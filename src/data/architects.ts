// Structured metadata for the 18 profiled firms. This mirrors the source
// `architect-shortlist.md` for cards, sorting and filtering ONLY — the full
// prose profile on each detail page is rendered directly from the markdown
// (matched by `mdKey`), so the markdown remains the single source of truth.

export type BudgetCat = 'In range' | 'Stretch above $2M' | 'Brackets $1–2M';
export type AvailabilityCat =
  | 'Likely available'
  | 'Possible queue'
  | 'Waitlist risk'
  | 'Unverified';
export type StudioCat = 'Solo / 2-person' | 'Boutique' | 'Mid-size' | 'Large';

export interface Architect {
  slug: string;
  mdKey: string; // slug of the H2 heading in architect-shortlist.md
  name: string;
  top5: number | null; // rank 1..5, else null
  mcmFit: number; // stars, e.g. 4.5
  mcmStars: string;
  studioCat: StudioCat;
  studioLabel: string;
  locations: string[];
  budgetCat: BudgetCat;
  budgetLabel: string;
  availability: AvailabilityCat;
  tagline: string; // aesthetic signature, short
  summary: string; // why-they-fit, short
  coDesign: string;
  heatSite: string;
  pullQuote: string;
  pullQuoteSource: string;
  website: string;
  phone?: string;
  email?: string;
  maybeNote?: string; // the "if…" condition for non-top-5 firms
}

function stars(n: number): string {
  const full = '★'.repeat(Math.floor(n));
  const half = n % 1 ? '½' : '';
  return full + half;
}

const raw: Omit<Architect, 'mcmStars'>[] = [
  {
    slug: 'nick-deaver',
    mdKey: 'nick-deaver-jes-deaver-architecture',
    name: 'Nick Deaver / Jes Deaver Architecture',
    top5: 1,
    mcmFit: 5,
    studioCat: 'Solo / 2-person',
    studioLabel: '2-person studio',
    locations: ['Austin'],
    budgetCat: 'In range',
    budgetLabel: 'Plausible; selective (verify)',
    availability: 'Waitlist risk',
    tagline: 'Quiet, place-rooted regional modernism — the clearest MCM-literate practice in Austin.',
    summary:
      'The purest MCM + co-design match in the metro: a father-daughter studio that literally restores Fehr & Granger glass houses. Caveat — 2-person studio, expect a waitlist.',
    coDesign: 'Very high — dialogue-driven',
    heatSite: 'Strong / very high',
    pullQuote:
      'Buildings can awaken the senses, reconnecting us with nature… celebrating modesty, beauty and meaning.',
    pullQuoteSource: 'aiaaustin.org/architects/ndjda',
    website: 'https://ndjda.com',
    phone: '512-494-9808',
  },
  {
    slug: 'matt-fajkus',
    mdKey: 'matt-fajkus-architecture-mf-architecture',
    name: 'Matt Fajkus Architecture',
    top5: 2,
    mcmFit: 4.5,
    studioCat: 'Boutique',
    studioLabel: '~8, boutique',
    locations: ['Austin'],
    budgetCat: 'In range',
    budgetLabel: 'Good match',
    availability: 'Possible queue',
    tagline: 'The most explicitly MCM-fluent of the larger-profile firms; sustainability-driven.',
    summary:
      'Repeatedly works in an explicit MCM idiom (Split House, Re-Open House, Alegria) on a brand-stated, client-and-site-driven process. Confirm large Hill-Country ground-up examples.',
    coDesign: 'Very high (explicit)',
    heatSite: 'Strong / strong (urban)',
    pullQuote:
      'Each project is unique and it should be driven by the client, the site, and the functional requirements, rather than a singular, preconceived aesthetic.',
    pullQuoteSource: 'mfarchitecture.com/practice',
    website: 'https://www.mfarchitecture.com',
    phone: '512-432-5137',
    email: 'info@mfarchitecture.com',
  },
  {
    slug: 'webber-studio',
    mdKey: 'webber-studio-architects',
    name: 'Webber + Studio, Architects',
    top5: 3,
    mcmFit: 4.5,
    studioCat: 'Boutique',
    studioLabel: 'Mid boutique',
    locations: ['Austin'],
    budgetCat: 'In range',
    budgetLabel: 'Squarely in range',
    availability: 'Likely available',
    tagline: 'Crisp, restrained Austin modernism — Functionalism, Expressionism, Regionalism, Minimalism.',
    summary:
      'The only Austin firm that explicitly markets a midcentury-modern practice, with a "the best designer for your home is you" co-design ethos. Best on-paper match for an MCM co-design couple.',
    coDesign: 'Very high (explicit)',
    heatSite: 'Good / good',
    pullQuote:
      'The best designer for your perfect home is you. We strongly believe that everyone can contribute to the design process.',
    pullQuoteSource: 'webberstudio.com',
    website: 'https://webberstudio.com',
    phone: '512-236-1032',
  },
  {
    slug: 'a-parallel',
    mdKey: 'a-parallel-architecture',
    name: 'A Parallel Architecture',
    top5: 4,
    mcmFit: 4,
    studioCat: 'Boutique',
    studioLabel: '~9, boutique',
    locations: ['Austin'],
    budgetCat: 'In range',
    budgetLabel: 'Good match',
    availability: 'Possible queue',
    tagline: 'Self-described "crafted modernism" — floating roofs on rusticated limestone, quietly iconic.',
    summary:
      'The best-documented collaborative philosophy of any firm here, crisp contemporary-MCM, and the clearest named-project Texas-heat/site evidence (Canopy House). Confirm appetite for a mid-century brief.',
    coDesign: 'Very high (explicit)',
    heatSite: 'Strong / excellent',
    pullQuote:
      'We embrace every project as an opportunity to collaborate and create, working in concert with client, consultant and contractor… with parallel objectives and a common goal.',
    pullQuoteSource: 'aparallel.com/profile',
    website: 'https://www.aparallel.com',
    phone: '512-464-1199',
    email: 'info@aparallel.com',
  },
  {
    slug: 'pollen',
    mdKey: 'pollen-architecture-and-design',
    name: 'Pollen Architecture & Design',
    top5: 5,
    mcmFit: 4,
    studioCat: 'Boutique',
    studioLabel: '~5–6, boutique',
    locations: ['Austin'],
    budgetCat: 'In range',
    budgetLabel: 'Plausible match (estimate)',
    availability: 'Likely available',
    tagline: 'Quiet, craft-driven modernism in genuine dialogue with mid-century restraint.',
    summary:
      'Reconceived a 1957 Case-Study-era house as their own home — genuine mid-century soul, strong site/climate instincts, principal-level access. Smallest built ground-up track record of the strong fits.',
    coDesign: 'High',
    heatSite: 'Strong / strong',
    pullQuote:
      'To connect architecture with the natural environment, and to celebrate materiality and the collaborative nature of the design process.',
    pullQuoteSource: 'pollenarchitecture.com/studio',
    website: 'https://www.pollenarchitecture.com',
    phone: '512-499-0888',
    email: 'info@pollenarchitecture.com',
  },
  {
    slug: 'clayton-korte',
    mdKey: 'clayton-korte',
    name: 'Clayton Korte',
    top5: null,
    mcmFit: 4.5,
    studioCat: 'Large',
    studioLabel: 'Large (~25+)',
    locations: ['Austin', 'San Antonio'],
    budgetCat: 'Stretch above $2M',
    budgetLabel: 'Lower-end / stretch up',
    availability: 'Possible queue',
    tagline: 'Warm, materially-rich modernism with a strong craft and adaptive-reuse streak.',
    summary:
      'The deepest authentic-MCM renovation track record in the metro (a 1950s Roland Roessner house) and elite site/craft. Largest firm in the tier; skews higher-budget.',
    coDesign: 'Team-delivered (unverified)',
    heatSite: 'Strong / outstanding',
    pullQuote:
      'Clayton Korte creates places that celebrate their environment and exalt the human experience at the intersection of architecture, interiors, authenticity, and craft.',
    pullQuoteSource: 'claytonkorte.com/about',
    website: 'https://claytonkorte.com',
    maybeNote:
      'If budget flexes toward $2M+ and you want authentic MCM-renovation craft.',
  },
  {
    slug: 'jay-corder',
    mdKey: 'jay-corder-architect',
    name: 'Jay Corder, Architect',
    top5: null,
    mcmFit: 4,
    studioCat: 'Boutique',
    studioLabel: 'Small boutique',
    locations: ['Austin'],
    budgetCat: 'In range',
    budgetLabel: 'Upper-mid to high (estimate)',
    availability: 'Unverified',
    tagline: 'Warm modernism, not cold minimalism — comfortable with sensitive MCM renovation.',
    summary:
      'Strong #6: explicit MCM-restoration credibility (Pemberton) plus a "listening as much as talking" reciprocal process. Could move into the Top 5 after a first call.',
    coDesign: 'High (reciprocal)',
    heatSite: 'Implied / strong',
    pullQuote:
      'We believe in a reciprocal client relationship and want to be listening as much as we are talking.',
    pullQuoteSource: 'jaycorder.com/about',
    website: 'https://www.jaycorder.com',
    phone: '512-243-8507',
    email: 'itsyours@jaycorder.com',
    maybeNote: 'Strong #6 — could move into the Top 5 after a first call.',
  },
  {
    slug: 'specht-novak',
    mdKey: 'specht-novak-formerly-specht-architects',
    name: 'Specht Novak',
    top5: null,
    mcmFit: 3.5,
    studioCat: 'Boutique',
    studioLabel: 'Boutique',
    locations: ['Austin', 'New York'],
    budgetCat: 'In range',
    budgetLabel: 'Documented at/below; scales up',
    availability: 'Possible queue',
    tagline: 'Refined, precise, restrained modernism with strong craft and proven hot-climate design.',
    summary:
      'Restrained, conceptual MCM with proven hot-climate engineering (Stealth House) and documented budget discipline (a $645K build). Geographically diffuse practice.',
    coDesign: 'Moderate–strong',
    heatSite: 'Strong (proven) / strong',
    pullQuote:
      'Buildings that are elegant, comfortable, and timeless… rooted in the unique environments in which they exist and shaped by the character of the people who will inhabit them.',
    pullQuoteSource: 'spechtnovak.com/about',
    website: 'https://spechtnovak.com',
    phone: '512-382-7938',
    email: 'info@spechtnovak.com',
    maybeNote:
      'If you want restrained, conceptual MCM with proven hot-climate engineering and budget discipline.',
  },
  {
    slug: 'jay-hargrave',
    mdKey: 'jay-hargrave-architecture-formerly-cottam-hargrave',
    name: 'Jay Hargrave Architecture',
    top5: null,
    mcmFit: 4,
    studioCat: 'Boutique',
    studioLabel: 'Small design-build',
    locations: ['Austin', 'Palm Springs'],
    budgetCat: 'Brackets $1–2M',
    budgetLabel: '$500K–$10M stated — brackets budget',
    availability: 'Likely available',
    tagline: 'Integrated design-build-fabricate shop — bespoke crafted steel, glass and wood detailing.',
    summary:
      'An integrated design-build-fabricate model that produces the crisp post-and-beam, custom-steel detailing MCM depends on — and they work in Palm Springs. Thinnest public press of the strong fits.',
    coDesign: 'High (build-it-themselves)',
    heatSite: 'Implied / stated',
    pullQuote: 'We build what we design because that’s what makes us happy.',
    pullQuoteSource: 'houzz.com (Jay Hargrave Architecture)',
    website: 'https://www.jayhargrave.com',
    phone: '512-784-4868',
    maybeNote:
      'If you value an integrated design-build-fabricate shop and bespoke custom detailing.',
  },
  {
    slug: 'cuppett-kilpatrick',
    mdKey: 'cuppett-kilpatrick-architecture-interior-design-formerly-tim-cuppett-architects',
    name: 'Cuppett Kilpatrick',
    top5: null,
    mcmFit: 3,
    studioCat: 'Boutique',
    studioLabel: 'Boutique',
    locations: ['Austin'],
    budgetCat: 'In range',
    budgetLabel: 'Sweet spot',
    availability: 'Possible queue',
    tagline: '"Quiet modernism" rooted in hearth and home — warm, daylight-balanced, craft-forward.',
    summary:
      'Genuinely modernist and deeply site/climate-literate, with both principals on every project and budget in the sweet spot. The idiom is warm/regional modernism — pressure-test MCM appetite.',
    coDesign: 'High (collaborator)',
    heatSite: 'Strong / strong',
    pullQuote: 'Consult the genius of the place.',
    pullQuoteSource: 'cuppettkilpatrick.com/about',
    website: 'https://cuppettkilpatrick.com',
    phone: '512-450-0820',
    email: 'contact@cuppettkilpatrick.com',
    maybeNote: 'If you’ll accept warm regional modernism over orthodox MCM.',
  },
  {
    slug: 'chioco-design',
    mdKey: 'chioco-design',
    name: 'Chioco Design',
    top5: null,
    mcmFit: 3.5,
    studioCat: 'Boutique',
    studioLabel: 'Boutique',
    locations: ['Austin'],
    budgetCat: 'In range',
    budgetLabel: 'Mid-to-high (estimate)',
    availability: 'Unverified',
    tagline: 'Rigorous regional modernism — interlocking volumes in Lueders limestone, stucco, fir, steel, glass.',
    summary:
      'Excellent site-driven regional modernism with refined materials and clear MCM DNA. Less period-MCM and less co-design-forward in its messaging than Corder or Deaver.',
    coDesign: 'Medium–high',
    heatSite: 'Implied / very high',
    pullQuote:
      'Projects explore challenges unique to site, program, material, environment and economic issues… inventive, honest, and responsive.',
    pullQuoteSource: 'chiocodesign.com/profile',
    website: 'https://www.chiocodesign.com',
    maybeNote:
      'If your site is the star and you want material-forward regional modernism.',
  },
  {
    slug: 'alterstudio',
    mdKey: 'alterstudio-architecture',
    name: 'Alterstudio Architecture',
    top5: null,
    mcmFit: 4,
    studioCat: 'Boutique',
    studioLabel: 'Boutique',
    locations: ['Austin'],
    budgetCat: 'Stretch above $2M',
    budgetLabel: 'Likely at/above $2M (estimate)',
    availability: 'Possible queue',
    tagline: 'Crisp, rigorously detailed modernism — light, shadow, threshold, bold cantilevers.',
    summary:
      'Best-in-class craft, deep site sensitivity and true modernist DNA (the Shah Residence references Breuer). Design-forward auteur posture; a literal MCM ask may be reinterpreted.',
    coDesign: 'Refined auteur',
    heatSite: 'Strong / excellent',
    pullQuote:
      'Concerned with its place in the world; with its thoughtful construction and detail; with its phenomenal experience; with light and shadow; with material identity.',
    pullQuoteSource: 'alterstudio.net (via ArchitectureLab)',
    website: 'https://alterstudio.net',
    phone: '512-499-8007',
    email: 'info@alterstudio.net',
    maybeNote:
      'If budget flexes to ~$2M+ and you’re happy co-designing within a refined, auteur-leaning voice.',
  },
  {
    slug: 'furman-keil',
    mdKey: 'furman-keil-architects-fka',
    name: 'Furman + Keil Architects',
    top5: null,
    mcmFit: 3,
    studioCat: 'Boutique',
    studioLabel: 'Small–mid boutique',
    locations: ['Austin'],
    budgetCat: 'In range',
    budgetLabel: 'Smaller end (~$585/sf data point)',
    availability: 'Possible queue',
    tagline: 'Warm, craft-forward modern regionalism — refined Hill Country contemporary.',
    summary:
      'Best-in-class Hill Country site-driven design and Texas-heat detailing. Default aesthetic is gabled modern-traditional; the ~$585/sf data point puts $1–2M at the tight end.',
    coDesign: 'Collaborator-leaning',
    heatSite: 'Strong / strong',
    pullQuote: 'Austin Architects Rooted in Local Tradition and Craft.',
    pullQuoteSource: 'fkarchitects.net',
    website: 'https://www.fkarchitects.net',
    phone: '512-479-4100',
    email: 'hello@fkarchitects.net',
    maybeNote:
      'If your site is a dramatic Hill Country lot and you’re flexible on "MCM-adjacent."',
  },
  {
    slug: 'larue',
    mdKey: 'larue-architects',
    name: 'LaRue Architects',
    top5: null,
    mcmFit: 3,
    studioCat: 'Boutique',
    studioLabel: 'Boutique (low volume)',
    locations: ['Austin'],
    budgetCat: 'Stretch above $2M',
    budgetLabel: 'Marquee work skews >$2M (estimate)',
    availability: 'Waitlist risk',
    tagline: '"Texas Hill Country Contemporary" — cantilevered boxes, big glass, view-driven luxury.',
    summary:
      'The strongest explicit client-co-design ritual ("lawn chairs and a cold beverage") and proven Hill Country site mastery. Default aesthetic is large-footprint Hill Country contemporary, not literal MCM.',
    coDesign: 'Very high ("lawn chairs")',
    heatSite: 'Strong / strong',
    pullQuote:
      'A Texas Hill Country contemporary vernacular… for a modernist-inspired approach to Texas living.',
    pullQuoteSource: 'aiaaustin.org/architects/larue-architects',
    website: 'https://www.larue-architects.com',
    maybeNote:
      'If you want the deepest co-design ritual and a Hill Country look you’ll steer toward MCM.',
  },
  {
    slug: 'lake-flato',
    mdKey: 'lakeflato-architects',
    name: 'Lake|Flato Architects',
    top5: null,
    mcmFit: 3.5,
    studioCat: 'Large',
    studioLabel: 'Large, multi-studio',
    locations: ['San Antonio', 'Austin'],
    budgetCat: 'In range',
    budgetLabel: 'Fits; lower end of custom book',
    availability: 'Possible queue',
    tagline: 'The gold standard — regional Texas modernism, 2024 AIA Gold Medal, 16 COTE Top Ten.',
    summary:
      'Unmatched Texas-climate and site mastery and warm material modernism. As a Gold-Medal firm you’d be a smaller project on a structured, facilitated process — and the idiom is ranch-regional, not strict MCM.',
    coDesign: 'Structured / facilitated',
    heatSite: 'Excellent (16 COTE) / excellent',
    pullQuote:
      'We begin all projects by listening—to each place, to each client and each community we serve.',
    pullQuoteSource: 'lakeflato.com/practice',
    website: 'https://www.lakeflato.com',
    phone: '512-373-3715',
    maybeNote:
      'If you want world-class climate/site mastery, accept ranch-regional (not strict MCM), and sit at the upper end.',
  },
  {
    slug: 'andersson-wise',
    mdKey: 'andersson-wise-architects',
    name: 'Andersson-Wise Architects',
    top5: null,
    mcmFit: 3,
    studioCat: 'Mid-size',
    studioLabel: 'Mid (~16)',
    locations: ['Austin', 'Denver'],
    budgetCat: 'Stretch above $2M',
    budgetLabel: 'Highest tier; weakest budget fit',
    availability: 'Likely available',
    tagline: 'Refined, nature-immersed modernism — "natural houses" that hover, terrace and float.',
    summary:
      'Peerless site/topography drama, refined materials and a Charles Moore lineage. Strongest for spectacular, high-budget, engineering-intensive sites; least MCM-specialized.',
    coDesign: 'Collaborative-auteur',
    heatSite: 'Strong / elite (dramatic sites)',
    pullQuote:
      'A collaborative approach to design leads to a built solution attuned to its purpose.',
    pullQuoteSource: 'anderssonwise.com',
    website: 'https://www.anderssonwise.com',
    phone: '512-476-5780',
    email: 'info@anderssonwise.com',
    maybeNote:
      'Only for a spectacular, engineering-intensive topographic site with budget well above $2M.',
  },
  {
    slug: 'bercy-chen',
    mdKey: 'bercy-chen-studio',
    name: 'Bercy Chen Studio',
    top5: null,
    mcmFit: 2.5,
    studioCat: 'Mid-size',
    studioLabel: '~20, design-build',
    locations: ['Austin'],
    budgetCat: 'In range',
    budgetLabel: 'Plausible (unverified)',
    availability: 'Unverified',
    tagline: 'The most experimental here — steel frames, glass curtain walls, water as a thermal element.',
    summary:
      'Exceptional site-and-climate creativity with in-house design/build and genuine sustainability. The most auteur-flavored and least period-MCM here; budget opaque.',
    coDesign: 'Collaborative-stated, auteur output',
    heatSite: 'Strong/inventive / very high',
    pullQuote:
      'We collaborate closely with our clients, consultants and experts… realizing innovative projects based on environmentally sustainable and financially viable models.',
    pullQuoteSource: 'aiaaustin.org/architects/bercy-chen-studio',
    website: 'https://www.bcarc.com',
    phone: '512-481-0092',
    maybeNote:
      'If you want bold, experimental, sustainability-driven modernism and value in-house design/build.',
  },
  {
    slug: 'michael-hsu',
    mdKey: 'michael-hsu-office-of-architecture-mhoa',
    name: 'Michael Hsu Office of Architecture',
    top5: null,
    mcmFit: 3,
    studioCat: 'Large',
    studioLabel: 'Large (45–90)',
    locations: ['Austin', 'Houston'],
    budgetCat: 'In range',
    budgetLabel: 'Comfortable ≥$1–2M (estimate)',
    availability: 'Unverified',
    tagline: 'Warm, materially rich modernism with a Texan scruffiness; hospitality-honed.',
    summary:
      'Warm materials, indoor-outdoor mastery and integrated interiors. A large, team-based firm with a hospitality/commercial brand — least mid-century-specific of the credible fits.',
    coDesign: 'Team-based',
    heatSite: 'Strong / solid',
    pullQuote: 'Good design should be democratic.',
    pullQuoteSource: 'Michael Hsu, via Metropolis',
    website: 'https://hsuoffice.com',
    phone: '512-706-4303',
    email: 'info@hsuoffice.com',
    maybeNote:
      'If you want warm modern with one-stop integrated interiors and don’t need intimate principal co-design.',
  },
];

export const architects: Architect[] = raw
  .map((a) => ({ ...a, mcmStars: stars(a.mcmFit) }))
  .sort((a, b) => {
    if (a.top5 && b.top5) return a.top5 - b.top5;
    if (a.top5) return -1;
    if (b.top5) return 1;
    return b.mcmFit - a.mcmFit;
  });

export const top5 = architects
  .filter((a) => a.top5)
  .sort((a, b) => (a.top5 as number) - (b.top5 as number));

export interface SkipFirm {
  name: string;
  reason: string;
}

export const skipList: SkipFirm[] = [
  {
    name: 'Dick Clark + Associates',
    reason:
      'A large (~23–27 person) firm best known for hospitality landmarks; residential work is high-end contemporary luxury, not MCM (fit ~2.5/5). Lowest, thinnest client-review signal of any firm researched.',
  },
  {
    name: 'Heyl Homes / Heyl Architects',
    reason:
      'A builder-led design-build company, not an MCM design studio (fit ~2/5). Repeatable luxury spec/custom homes; typical band sits above $1–2M; process is builder/auteur turnkey, not deep client co-design.',
  },
  {
    name: 'KEM Studio / KEM Architects',
    reason:
      'Not an Austin firm — the well-known KEM STUDIO is in Kansas City, Missouri. Repeated Austin searches found no firm by this name. Dropped; likely a name mismatch — flag for clarification.',
  },
];

// Filter facet helpers
export const FILTERS = {
  mcmFit: ['★★★★★ (5)', '★★★★½ (4.5)', '★★★★ (4)', '★★★½ (3.5)', '★★★ (3)', '★★½ (2.5)'],
  location: ['Austin', 'San Antonio', 'Houston', 'Palm Springs', 'New York', 'Denver'],
  budget: ['In range', 'Stretch above $2M', 'Brackets $1–2M'] as BudgetCat[],
  availability: [
    'Likely available',
    'Possible queue',
    'Waitlist risk',
    'Unverified',
  ] as AvailabilityCat[],
  studio: ['Solo / 2-person', 'Boutique', 'Mid-size', 'Large'] as StudioCat[],
};
