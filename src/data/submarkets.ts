// Sub-market profiles from land-search.md (Part 1.1 + the quick-compare table),
// grouped by tier for the accordion on /land.

export type Tier = 'Inner / Close-In' | 'Lake / West Hills' | 'Hill Country' | 'Exurban / Edge';

export interface Submarket {
  name: string;
  tier: Tier;
  county: string;
  isd: string;
  downtown: string;
  lot: string;
  budget: string;
  water: string;
  soil: string;
  keyRisk: string;
  profile: string;
  fit?: string; // editorial flag from the source
}

export const submarkets: Submarket[] = [
  // ── Inner / Close-In ──
  {
    name: 'Tarrytown',
    tier: 'Inner / Close-In',
    county: 'Travis',
    isd: 'Austin ISD',
    downtown: '~10 min',
    lot: '0.15–0.30 ac',
    budget: '$1.5M+ (over)',
    water: 'City / City',
    soil: 'Limestone',
    keyRisk: 'Price',
    profile:
      'Old-money close-in Austin, tree-canopied, walk/bike to Lake Austin and downtown. Eanes-adjacent reputation but actually Austin ISD (Casis Elementary is the draw). Lots ~0.15–0.30 ac; raw/scrape land $1.5M–$2.5M+ — above the land budget almost everywhere. City of Austin permitting (slow, strict tree ordinance). No HOA typically, but historic/character pressure is real. Low flood risk except near Lake Austin/creeks.',
  },
  {
    name: 'Westlake / West Lake Hills',
    tier: 'Inner / Close-In',
    county: 'Travis',
    isd: 'Eanes ISD',
    downtown: '12–15 min',
    lot: '0.3–0.8 ac',
    budget: '$900k–$2M',
    water: 'City-MUD / Septic',
    soil: 'Limestone',
    keyRisk: 'Price, slope/CWQZ, ARB',
    profile:
      'Affluent hills west of downtown, canyon and Lake Austin views, Eanes ISD (the marquee district). Wooded, sloped lots ~0.3–0.8 ac; scrape/raw lots $900k–$2M+. Mostly septic (no city sewer in much of West Lake Hills), city or MUD water, fiber widely available. West Lake Hills has its own city government and architectural/site review — and steep-slope + creek (CWQZ) rules that bite hard. Good limestone soil but karst/recharge constraints possible. Prices push you to Scenario C.',
  },
  {
    name: 'Rollingwood',
    tier: 'Inner / Close-In',
    county: 'Travis',
    isd: 'Eanes ISD',
    downtown: '~8 min',
    lot: '0.25–0.5 ac',
    budget: '$600k–$1.5M',
    water: 'Mixed',
    soil: 'Limestone',
    keyRisk: 'Inventory, city rules',
    profile:
      'Tiny incorporated city wedged between Zilker and Westlake, Eanes ISD, ~8 min downtown. Flat-to-rolling, mature trees, ~0.25–0.5 ac lots. Its own city permitting + building rules. Very limited land inventory; when raw lots appear they’re $600k–$1.5M. City water/sewer in parts, septic in others. Low HOA prevalence (city rules substitute). Some Eanes Creek floodplain exposure.',
  },
  {
    name: 'Bouldin Creek / South Congress',
    tier: 'Inner / Close-In',
    county: 'Travis',
    isd: 'Austin ISD',
    downtown: '5–10 min',
    lot: '0.12–0.25 ac',
    budget: '$700k–$1.2M',
    water: 'City / City',
    soil: 'Mixed',
    keyRisk: 'Price, small lot, flood pockets',
    fit: 'Low MCM style friction',
    profile:
      'Hip, walkable, close-in south. Austin ISD, ~5–10 min downtown — best urban-lifestyle option here. Lots small (~0.12–0.25 ac); scrape lots $700k–$1.2M. City water/sewer, fiber. New Austin "HOME" code allows up to 3 units / higher lot coverage — relevant if you want a casita/ADU. Austin permitting + tree ordinance. Some Bouldin/Bear Creek floodplain pockets — verify. MCM infill is welcomed (modern is the local vernacular).',
  },
  {
    name: 'East Austin (Mueller / Cherrywood / Holly)',
    tier: 'Inner / Close-In',
    county: 'Travis',
    isd: 'Austin ISD',
    downtown: '5–10 min',
    lot: '0.1–0.2 ac',
    budget: '$325k–$900k',
    water: 'City / City',
    soil: 'Clay rising east',
    keyRisk: 'Flood (Holly), ARB (Mueller), clay',
    profile:
      'Eclectic, gentrifying, close-in east. Austin ISD, ~5–10 min downtown. Mueller is a master-planned, design-controlled community with its own architectural review + modern design code (MCM-friendly aesthetically, but you build to their book and lots sell through builders). Cherrywood/Holly are older grids with scrape lots ~0.1–0.2 ac, $325k–$900k. City water/sewer/fiber. Holly is near Lady Bird Lake — floodplain check essential. Blackland clay starts showing up east of I-35. Tree ordinance applies.',
  },
  // ── Lake / West Hills ──
  {
    name: 'Lakeway',
    tier: 'Lake / West Hills',
    county: 'Travis',
    isd: 'Lake Travis ISD',
    downtown: '30–40 min',
    lot: '0.3–1.0 ac',
    budget: '$250k–$900k',
    water: 'MUD / MUD or Septic',
    soil: 'Limestone',
    keyRisk: 'HOA $$, WUI',
    profile:
      'Established Lake Travis resort-suburb, strong Lake Travis ISD. Rolling limestone hills, lake + canyon views. Lots ~0.3–1.0 ac (raw land thin and sub-1-acre); $250k–$900k in budget, larger parcels jump over $1M. MUD water + MUD sewer in newer sections (Rough Hollow), septic in older. Fiber/propane common. HOA prevalence high (amenity HOAs $200–270/mo with design review). Some WUI wildfire exposure on the urban-wildland edge.',
  },
  {
    name: 'Bee Cave',
    tier: 'Lake / West Hills',
    county: 'Travis',
    isd: 'Lake Travis ISD',
    downtown: '25–35 min',
    lot: '1–3 ac',
    budget: '$375k–$900k (thin)',
    water: 'City / Septic',
    soil: 'Limestone',
    keyRisk: 'Inventory, recharge zone',
    profile:
      'Newer affluent hub west of Austin (Hill Country Galleria retail), Lake Travis ISD. Hill Country views, limestone. Raw land is very thin (3 vacant lots found total; most $1.2M–$1.6M). Good lifestyle/retail. City of Bee Cave permitting + likely HOA/review in subdivisions. Edwards recharge zone touches here — restrictions possible.',
  },
  {
    name: 'Lago Vista',
    tier: 'Lake / West Hills',
    county: 'Travis',
    isd: 'Lago Vista ISD',
    downtown: '45–55 min',
    lot: '0.7–2.5 ac',
    budget: '$250k–$800k',
    water: 'Mixed (some public sewer)',
    soil: 'Limestone',
    keyRisk: 'Commute, WUI',
    fit: 'Low MCM style friction',
    profile:
      'More affordable Lake Travis community on the north shore, smaller Lago Vista ISD. The commute is the cost. Deepest in-budget inventory of any lake submarket ($250k–$800k for 0.7–2.5 ac). Highland Lake Estates / POA gives lake-park + boat-ramp access for a low fee. Mix of well/septic and (in spots) public water + sewer — a real differentiator. Limestone hills, lake + Hill Country views, some lakefront. WUI exposure on the edges.',
  },
  {
    name: 'Spicewood',
    tier: 'Lake / West Hills',
    county: 'Burnet / Travis',
    isd: 'Marble Falls / Lake Travis',
    downtown: '45–55 min',
    lot: '1–10 ac',
    budget: '$300k–$900k',
    water: 'Well / Septic',
    soil: 'Limestone',
    keyRisk: 'Commute, aquifer, WUI',
    profile:
      'Strung along Lake Travis + the Pedernales, on the Burnet/Travis line. Rural-luxe — vineyards, lake estates. Lots 1–10 ac, $300k–$900k in budget. Mostly well + septic; some lake communities (Barton Creek Lakeside) have amenities + HOA. Edwards/Trinity aquifer + WUI considerations. Beautiful, but services and commute are real.',
  },
  // ── Hill Country ──
  {
    name: 'Dripping Springs',
    tier: 'Hill Country',
    county: 'Hays',
    isd: 'Dripping Springs ISD',
    downtown: '35–45 min',
    lot: '5–15 ac',
    budget: '$500k–$800k',
    water: 'Well / Septic',
    soil: 'Limestone',
    keyRisk: 'Aquifer recharge, WUI',
    fit: 'Best all-around fit for the brief',
    profile:
      '"Gateway to the Hill Country," fast-growing, wineries/distilleries, excellent Dripping Springs ISD (a major draw). 5–15 ac lots common, $500k–$800k (≈$60k–$120k/ac). Well + septic nearly universal; electric available; fiber spotty. Light deed restrictions in ranch subdivisions (Blue Creek, Stagecoach Ranch), modest HOAs. Good limestone foundations — but much of the area sits over the Barton Springs Edwards recharge/contributing zone: expect impervious-cover limits, water-quality controls, and septic scrutiny. Hays County + ETJ patchwork. WUI relevant.',
  },
  {
    name: 'Driftwood',
    tier: 'Hill Country',
    county: 'Hays',
    isd: 'Dripping Springs ISD',
    downtown: '35–45 min',
    lot: '5–12 ac',
    budget: '$425k–$700k',
    water: 'Well / Septic',
    soil: 'Limestone',
    keyRisk: 'Aquifer recharge, WUI',
    fit: 'Strong fit',
    profile:
      'Quieter, more rural than Dripping Springs, same DSISD, home of Salt Lick BBQ + wineries. 5–12 ac, $425k–$700k. Well + septic; mature oaks, rolling limestone ridgelines — an excellent MCM site profile. Light/no HOA in many subdivisions. Same aquifer-recharge caution as Dripping Springs (verify recharge-zone status — it varies parcel to parcel). Hays County.',
  },
  {
    name: 'Wimberley',
    tier: 'Hill Country',
    county: 'Hays',
    isd: 'Wimberley ISD',
    downtown: '50–60 min',
    lot: '5–7 ac',
    budget: '$300k–$770k',
    water: 'Well / Septic',
    soil: 'Limestone',
    keyRisk: 'Flood (Blanco), commute, WUI',
    profile:
      'Artsy Hill Country village on the Blanco River + Cypress Creek, Wimberley ISD. The farthest "lifestyle" option. 5–7 ac lots $300k–$770k. Well + septic. Devil’s Backbone views are spectacular. Flood history is serious — the 2015 Blanco River flood was catastrophic; any creek/river-adjacent parcel needs a hard floodplain + Atlas-14 review. WUI relevant. Great land, longest commute.',
  },
  {
    name: 'Round Mountain',
    tier: 'Hill Country',
    county: 'Blanco',
    isd: 'Johnson City',
    downtown: '60–75 min',
    lot: '5–11 ac',
    budget: '$200k–$400k',
    water: 'Well / Septic',
    soil: 'Limestone',
    keyRisk: 'Commute, services',
    fit: 'Best $/acre + views in the survey',
    profile:
      'Far northwest, Blanco County, tiny. ~60–75 min downtown — effectively rural. 5–11 ac lots $200k–$400k (best $/acre + views in this whole survey). Well + septic; underground utilities in newer gated subdivisions. Wildlife/ag exemptions keep carrying costs near zero. Limestone, big long-range views. Trade-off is pure distance + total car dependence. Blanco County permitting is light — a plus for an unconventional design.',
  },
  // ── Exurban / Edge ──
  {
    name: 'Liberty Hill',
    tier: 'Exurban / Edge',
    county: 'Williamson',
    isd: 'Liberty Hill ISD',
    downtown: '45–55 min',
    lot: '5–13 ac',
    budget: '$300k–$550k',
    water: 'Well / Septic',
    soil: 'Limestone (verify clay line)',
    keyRisk: 'Clay line, commute',
    profile:
      'Northwest, Williamson County, fast-growing, Liberty Hill ISD, closer to the NW tech/Cedar Park job pockets. 5–13 ac, $300k–$550k. Well + septic (some with utilities already in). Western Williamson is limestone/caliche (good) — but verify, the clay line runs through the county. Hill Country views on the west side. Low-to-moderate HOA. Solid value, decent soil.',
  },
  {
    name: 'Pflugerville rural pockets',
    tier: 'Exurban / Edge',
    county: 'Travis',
    isd: 'Pflugerville ISD',
    downtown: '30–40 min',
    lot: '5+ ac',
    budget: '$1.5M+ (over)',
    water: 'Well / Septic',
    soil: 'CLAY',
    keyRisk: 'Price + clay — CUT',
    fit: 'Cut recommendation',
    profile:
      'North-northeast, close to the Domain + Tesla-ish. CUT RECOMMENDATION: (1) no in-budget rural land found — qualifying acreage is priced as development land ($1.5M–$2.75M), and (2) Blackland Prairie clay — expansive-soil foundation risk exactly as flagged. Flat, treeless prairie is also a weak site-responsive-MCM canvas.',
  },
  {
    name: 'Manor rural pockets',
    tier: 'Exurban / Edge',
    county: 'Travis',
    isd: 'Manor / Elgin ISD',
    downtown: '~25 min',
    lot: '6–15 ac',
    budget: '$300k–$575k',
    water: 'Well / Septic',
    soil: 'CLAY',
    keyRisk: 'Clay foundations, flat/treeless',
    fit: 'Weak fit',
    profile:
      'East, ~25 min to downtown/Tesla (the close-in commute is the only real draw). Cheap acreage ($300k–$575k for 6–15 ac). CLAY-SOIL FLAG: Blackland Prairie — engineered foundations effectively mandatory, adds real cost. Flat, open, sparse trees — no slope/view/shade assets to design around. Include only if proximity to east-side jobs outweighs build cost + aesthetics.',
  },
];

export const tiers: Tier[] = [
  'Inner / Close-In',
  'Lake / West Hills',
  'Hill Country',
  'Exurban / Edge',
];
