// Display helpers for the FEMA NFHL `flood` block written into plots-feed.json
// by scripts/backfill-flood.mjs. Keeps the pill label + MCM color tone
// consistent across the land cards, the Leaflet popups and the feed page.

export interface Flood {
  femaZone: string;
  femaZoneSubtype: string;
  sfha: boolean;
  baseFloodElevationFt: number | null;
  riskLevel: 'low' | 'moderate' | 'high' | 'extreme' | 'undetermined' | 'n/a';
  description: string;
  source: string;
  queriedAt: string;
  geoPrecisionNote: string;
}

// Maps to the MCM palette tokens in global.css.
const TONE: Record<Flood['riskLevel'], string> = {
  low: 'var(--color-sage-deep)',
  moderate: 'var(--color-ochre)',
  high: 'var(--color-terracotta-deep)',
  extreme: '#b3261e',
  undetermined: 'var(--color-muted)',
  'n/a': 'var(--color-muted)',
};

/** Short, human label, e.g. "Zone AE (high — insurance required)". */
export function floodLabel(f: Flood): string {
  const z = f.femaZone || 'X';
  switch (f.riskLevel) {
    case 'extreme':
      return `Zone ${z} (extreme — insurance required)`;
    case 'high':
      return `Zone ${z} (high — insurance required)`;
    case 'moderate':
      return `Zone ${z} 500-yr (moderate)`;
    case 'undetermined':
      return `Zone ${z} (undetermined)`;
    case 'n/a':
      return `Zone ${z} (on water — verify)`;
    default:
      return `Zone ${z} (low)`;
  }
}

/** True when the coordinate is street/town-level, so the pin/zone is approximate. */
export function isApprox(f: Flood): boolean {
  return /-level coord/.test(f.geoPrecisionNote);
}

export function floodTone(f: Flood): string {
  return TONE[f.riskLevel] ?? 'var(--color-muted)';
}

/** Full "Flood: …" line with the approx prefix when coords are imprecise. */
export function floodText(f: Flood): string {
  return `${isApprox(f) ? 'Approx · ' : ''}Flood: ${floodLabel(f)}`;
}
