// One-off backfill: query FEMA's National Flood Hazard Layer (NFHL) by point
// for each plot and write a normalized `flood` block back into plots-feed.json.
// FEMA NFHL is the authoritative flood dataset used by lenders/insurers.
// Free, no key. Rate-limited to 1 req/sec to be polite.
import { readFile, writeFile } from 'node:fs/promises';

const FEED = new URL('../public/data/plots-feed.json', import.meta.url);

// Layer 28 = "Flood Hazard Zones" on the public NFHL MapServer.
const NFHL =
  'https://hazards.fema.gov/arcgis/rest/services/public/NFHL/MapServer/28/query';
const SOURCE = 'FEMA NFHL (MapServer/28)';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// FLD_ZONE -> coarse risk level. AE/A* = 100-yr SFHA; V* = coastal; D = unmapped.
function riskForZone(zone, subtype) {
  const z = (zone || '').toUpperCase().trim();
  const sub = (subtype || '').toUpperCase();
  if (z === 'OPEN WATER' || sub.includes('OPEN WATER')) return 'n/a';
  if (['V', 'VE', 'V1', 'V30', 'VO'].includes(z)) return 'extreme';
  if (['A', 'AE', 'AH', 'AO', 'AR', 'A99', 'A1', 'A30'].includes(z)) return 'high';
  if (z === 'D') return 'undetermined';
  // Shaded Zone X / Zone B = 0.2% (500-yr) -> moderate.
  if (z === 'B') return 'moderate';
  if (z === 'X' && /0\.2\s*PCT|0\.2%|500/.test(sub)) return 'moderate';
  // Unshaded X, Zone C, or no mapped feature -> minimal/low per FEMA.
  if (z === 'X' || z === 'C' || z === '') return 'low';
  // Unknown designation: be conservative, flag for manual check.
  return 'undetermined';
}

function describe(zone, subtype, risk, sfha, bfe, empty) {
  const z = zone || 'X';
  const sub = subtype && subtype.trim() ? ` (${subtype.trim()})` : '';
  const bfeStr = bfe != null ? ` Base flood elevation ${bfe} ft.` : '';
  if (empty) {
    return 'No FEMA flood feature mapped at this point — could mean minimal risk OR an unmapped/unanalyzed area; verify on county GIS.';
  }
  switch (risk) {
    case 'extreme':
      return `Zone ${z}${sub}: coastal high-hazard area with wave action — Special Flood Hazard Area, flood insurance required.${bfeStr}`;
    case 'high':
      return `Zone ${z}${sub}: inside the 100-year (1% annual chance) floodplain — Special Flood Hazard Area, lenders require flood insurance.${bfeStr}`;
    case 'moderate':
      return `Zone ${z}${sub}: inside the 500-year (0.2% annual chance) floodplain — moderate risk, insurance not federally mandated.`;
    case 'undetermined':
      return `Zone ${z}${sub}: possible but unanalyzed flood hazards — verify on county GIS before relying on this.`;
    case 'n/a':
      return `Point falls on open water per FEMA — unexpected for buildable land; check the coordinate.`;
    default:
      return `Zone ${z}${sub}: minimal flood hazard per FEMA (outside the 100- and 500-year floodplains).`;
  }
}

async function queryFema(lat, lng) {
  const params = new URLSearchParams({
    geometry: `${lng},${lat}`,
    geometryType: 'esriGeometryPoint',
    inSR: '4326',
    spatialRel: 'esriSpatialRelIntersects',
    outFields: 'FLD_ZONE,ZONE_SUBTY,STATIC_BFE,SFHA_TF',
    returnGeometry: 'false',
    f: 'json',
  });
  const res = await fetch(`${NFHL}?${params.toString()}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  if (json.error) throw new Error(`NFHL error ${json.error.code}: ${json.error.message}`);
  return json.features || [];
}

const feed = JSON.parse(await readFile(FEED, 'utf8'));
const queriedAt = new Date().toISOString();
const failures = [];
const breakdown = {};

for (const p of feed.plots) {
  if (p.lat == null || p.lng == null) {
    p.flood = null;
    failures.push({ id: p.id, reason: 'null lat/lng' });
    continue;
  }
  try {
    const features = await queryFema(p.lat, p.lng);
    const empty = features.length === 0;
    const a = empty ? {} : features[0].attributes;

    const zone = empty ? 'X' : a.FLD_ZONE || 'X';
    const subtype = empty ? '' : a.ZONE_SUBTY || '';
    const sfha = empty ? false : a.SFHA_TF === 'T' || a.SFHA_TF === true;
    const rawBfe = empty ? null : a.STATIC_BFE;
    const bfe = rawBfe == null || rawBfe === -9999 || rawBfe <= -9000 ? null : rawBfe;
    const risk = riskForZone(zone, subtype);

    const precision = p.geo_precision || 'unknown';
    const geoNote =
      precision === 'exact'
        ? 'exact coord'
        : `${precision}-level coord — verify on county GIS before offer`;

    p.flood = {
      femaZone: empty ? 'X' : zone,
      femaZoneSubtype: subtype,
      sfha,
      baseFloodElevationFt: bfe,
      riskLevel: risk,
      description: describe(zone, subtype, risk, sfha, bfe, empty),
      source: SOURCE,
      queriedAt,
      geoPrecisionNote: geoNote,
    };

    breakdown[risk] = (breakdown[risk] || 0) + 1;
    console.log(
      `${p.id}: zone ${empty ? 'X(empty)' : zone}${subtype ? '/' + subtype : ''} -> ${risk}${bfe != null ? ' BFE ' + bfe + 'ft' : ''}`,
    );
  } catch (err) {
    p.flood = null;
    failures.push({ id: p.id, reason: String(err.message || err) });
    console.error(`FAIL ${p.id}: ${err.message || err}`);
  }
  await sleep(1000);
}

feed.last_updated = queriedAt;
await writeFile(FEED, JSON.stringify(feed, null, 2) + '\n', 'utf8');
console.log('\nBreakdown:', breakdown);
console.log('Failures:', failures.length ? failures : 'none');
