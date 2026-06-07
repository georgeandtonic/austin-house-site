// Budget split scenarios from land-search.md (Part 1.4).

export interface Scenario {
  key: string;
  title: string;
  land: string;
  build: string;
  sqft: string;
  soft: string;
  where: string;
  profile: string;
}

export const scenarios: Scenario[] = [
  {
    key: 'A',
    title: 'Hill Country',
    land: '$300k',
    build: '~$1.4M',
    sqft: '~2,500–3,000 sf',
    soft: '~$200k',
    where: 'Dripping Springs, Driftwood, Round Mountain, Liberty Hill, Wimberley',
    profile:
      'Most land, biggest house, longest commute. Well + septic cost lives in the build column. Maximizes the raw material a site-responsive design works with, and leaves the most budget for the expensive MCM moves.',
  },
  {
    key: 'B',
    title: 'Inner suburb',
    land: '$600k',
    build: '~$1.1M',
    sqft: '~2,000–2,500 sf',
    soft: '~$150k',
    where: 'Lakeway, Lago Vista, Bee Cave, edge Westlake',
    profile:
      'Balanced. Lake/view access, shorter commute, mid-size house. The hedge — real views with a manageable commute.',
  },
  {
    key: 'C',
    title: 'Premium location',
    land: '$900k',
    build: '~$800k',
    sqft: '~1,400–1,800 sf',
    soft: '~$120k',
    where: 'Westlake, Bouldin, close-in East Austin',
    profile:
      'Smallest footprint, best location/walkability. An MCM "jewel box" — the tightest design discipline. Buys a location and a constrained box.',
  },
];

export const scenarioNotes = {
  buildCost:
    'Build cost for a 2026 Austin custom MCM ≈ $400–600/sf (glass/steel/site work trends to the high end). Soft costs (architect 8–12%, engineering, geotech, survey, permits, financing) ≈ 10–18% of build — budget ~$150–250k.',
  carrying:
    'Land carrying cost over an 18–24 month design + build: with an ag/wildlife exemption, property tax can be $50–500/yr (negligible); without it, a $600k lot at ~1.9% is ~$11,400/yr. Raw-land loans run higher rate + larger down — interest of roughly $30k–$80k. Hold a $40k–$100k carrying-cost reserve in the all-in math now, not later.',
};
