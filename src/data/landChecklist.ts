// The 25-item site-visit checklist from land-search.md (Part 3), verbatim,
// grouped for the printable checkbox UI.

export interface ChecklistGroup {
  theme: string;
  items: { n: number; text: string }[];
}

export const bring =
  'Bring: compass (or phone compass app), a long tape/measuring wheel, the plat/survey, the FEMA flood map + county CAD on your phone, a shovel or soil probe, water (you), and a notebook.';

export const visitNote =
  'Visit at least twice — once mid-afternoon in summer heat to feel the west sun, once after heavy rain to see where water goes. Photograph everything with location on.';

export const checklist: ChecklistGroup[] = [
  {
    theme: 'Orientation & sun',
    items: [
      {
        n: 1,
        text: 'Compass-check the long axis of the buildable area. Note where you’d want the main glass wall and whether you can face it N/S (good) vs. E/W (heat problem). Stand where the living room would go and note the sun’s path.',
      },
      {
        n: 2,
        text: 'Walk it mid-afternoon in summer to feel the west/southwest sun and where shade falls. Note which existing trees would shade the afternoon glazing.',
      },
      {
        n: 3,
        text: 'Note prevailing wind (Central TX summer breeze is typically from the S/SE) — stand still, feel it; it drives porch placement + cross-ventilation for passive cooling.',
      },
    ],
  },
  {
    theme: 'Topography, drainage & soil',
    items: [
      {
        n: 4,
        text: 'Walk the full slope — identify the natural high point (build pad) and low points (where water collects). Look for a gentle-grade spot for a walkout/terrace.',
      },
      {
        n: 5,
        text: 'Dig a hole (12–18 in) in 2–3 spots. Limestone/caliche near surface = good (Hill Country); sticky dark clay = Blackland Prairie = foundation cost flag.',
      },
      {
        n: 6,
        text: 'Look for drainage clues: erosion channels, silt lines on fences/trees, standing water, "where would a flash flood go?" Walk any creek/draw and imagine it full.',
      },
      {
        n: 7,
        text: 'Check for rock outcrops / sinkholes / caves (karst) — dramatic for design but a recharge-zone/foundation flag; note depressions that swallow water.',
      },
    ],
  },
  {
    theme: 'Trees & vegetation',
    items: [
      {
        n: 8,
        text: 'Catalog the significant trees: species (live oak/elm = shade asset; cedar = fuel/less shade), approximate trunk diameter (≥19 in = protected, ≥24 in = heritage under Austin rules), health, and whether they sit on the ideal build pad (constraint) or shade it (asset). Photograph each.',
      },
      {
        n: 9,
        text: 'Note canopy vs. clearing — where you can build without removing protected trees.',
      },
    ],
  },
  {
    theme: 'Views & privacy',
    items: [
      {
        n: 10,
        text: 'Stand at the likely build-pad height (eye level, and imagine a second story) and log the views by compass direction. Does the best view align with shadeable glazing?',
      },
      {
        n: 11,
        text: 'Check sightlines from neighbors — can anyone see into where your glass walls go? Note natural screening.',
      },
    ],
  },
  {
    theme: 'Access, frontage & easements',
    items: [
      {
        n: 12,
        text: 'Drive the access road — paved/public vs. gravel/private-easement; note driveway grade and a safe entry sightline (especially off a highway like Hamilton Pool Rd).',
      },
      {
        n: 13,
        text: 'Walk the boundaries against the plat/survey — find the pins; confirm acreage feels right; note any easements (overhead lines, pipeline markers, drainage) crossing the pad.',
      },
    ],
  },
  {
    theme: 'Utilities',
    items: [
      {
        n: 14,
        text: 'Locate the nearest electric (pole/transformer) — how far to pull service?',
      },
      {
        n: 15,
        text: 'Septic: is there room for a drainfield away from the well and downhill of the house? (Note for the perc test.) Well: ask neighbors their well depth + GPM + water quality; look for an existing well/meter.',
      },
      {
        n: 16,
        text: 'Check cell signal on-site and look up fiber availability for the address.',
      },
    ],
  },
  {
    theme: 'Environmental flags',
    items: [
      {
        n: 17,
        text: 'Pull FEMA + county GIS on your phone while standing there — is the build pad outside 100-yr AND 500-yr? Walk to the floodplain line if there is one. The site feed shows FEMA NFHL zone data, but confirm it on the county GIS (Travis/Hays/Williamson) — the national layer can lag local map revisions.',
      },
      {
        n: 18,
        text: 'Check Edwards Aquifer recharge-zone status (TCEQ map) — affects impervious cover.',
      },
      {
        n: 19,
        text: 'Assess wildfire/WUI: cedar density, single vs. multiple exit roads, defensible-space room around the pad.',
      },
    ],
  },
  {
    theme: 'Nuisance & neighborhood (the stuff listings hide)',
    items: [
      {
        n: 20,
        text: 'Stop, close your eyes, and listen — road noise, highway hum, dogs, nearby commercial/quarry/shooting-range, aircraft. Do it on a weekday AND a weekend.',
      },
      {
        n: 21,
        text: 'Look up and around for what photos crop out: power transmission lines, cell towers, a neighbor’s junk/RV, a quarry, a future-development sign, a wastewater plant.',
      },
      {
        n: 22,
        text: 'Smell — feedlots, wastewater, a nearby landfill carry on the wind.',
      },
      {
        n: 23,
        text: 'Note the neighbors’ houses — modern-tolerant or all traditional? (HOA/ARB hint.)',
      },
      {
        n: 24,
        text: 'Check phone reception + drive the real commute at the actual time you’d drive it.',
      },
      {
        n: 25,
        text: 'Re-read the deed restrictions / CC&Rs on-site with the lot in front of you — can you actually build a flat-roofed glass MCM here?',
      },
    ],
  },
];
