---
type: artifact
project: austin-house
artifact: land-search
created: 2026-06-07
author: dev sub-agent
status: initial-survey
inputs: budget $1M-$2M all-in; MCM build ~$400-600/sf; move-in 2027-06 to 2028-06
---

# Austin Metro — Land Search Criteria + Initial Plot Survey

For George Waked & Taylor. Custom mid-century-modern (MCM) home, adapted for Texas
heat, site-responsive design. Right land trumps location.

> **Document scope.** Part 1 is a durable criteria spec (reusable through the whole
> search). Part 2 is a snapshot of live listings as of 2026-06-07 — it goes stale
> fast; treat it as a starting basket, not a standing inventory. Part 3 is a
> reusable site-visit template.

---

## TL;DR

**Land budget envelope:** roughly $200k (Hill Country acreage) to $900k (inner
suburb lot), inversely traded against build size. The math only closes three ways
(Scenarios A/B/C below). For a *site-responsive MCM* — where slope, trees, views,
and east-west solar orientation are the whole point — the Hill Country and lake
submarkets give you far more land to design with per dollar than inner Austin
infill, where you mostly buy a flat rectangle and a zip code.

**Top 3 plots from this survey (best-to-worst on MCM site fit + value + risk):**

1. **414 Blue Creek Dr, Dripping Springs** — $620k / 7.3 ac. "Gently sloping,
   multiple build sites," heavy oaks, Hill Country views, light deed restrictions,
   only ~$120/yr HOA. The cleanest match to the entire brief; budget lands squarely
   in Scenario A (leaves ~$1.4M for build). *Verified active, 19 DOM.*
2. **3006 Point Cv, Lago Vista** — $575k / 1.02 ac. Lake Travis waterfront with
   **public water AND public sewer** (rare out here — kills the well+septic cost and
   risk), moderate trees, panoramic main-channel views, freshest listing found (20
   DOM). Best "low-friction utilities + water + view" package. *Verified active.*
3. **Lot 33 Vista Ridge Dr, Round Mountain** — $244k / 7.25 ac. Big Hill Country
   views, level-to-gentle, gated, wildlife-exempt (tiny carrying cost). Cheapest
   path to acreage — pushes you toward Scenario A with a fat build budget. Trade-off:
   ~75 min to downtown and you must drill a well. *Verified active, price reduced.*

Runners-up worth the drive: **101 Purple Sage, Driftwood** ($695k/11.5 ac, well +
septic already in, mature oaks, rolling) and **421 S Bear Creek Rd, Liberty Hill**
($549k/5 ac, the only lot found with well+septic+electric ALL installed).

**Verification reality (read this):** Zillow, Redfin, LandWatch, Lands of Texas,
Realtor, HAR, and Homes.com all block automated fetching (HTTP 403). The verified
listings below were pulled from two broker sites that serve live ACTRIS MLS data and
*did* load — **Longhorn Realty** (Hill Country) and **TexasRealEstateSource** (lake/
inner). Listings sourced only from blocked aggregators are flagged "search-snippet
only — unconfirmed URL." No URLs were fabricated. Every "verified" URL was fetched
and returned live MLS data.

**Criteria-spec gaps the search revealed** (detail at the end): listings almost
never disclose (a) floodplain / Atlas-14 status, (b) Edwards Aquifer recharge-zone
status, (c) WUI/wildfire rating, (d) soil type, or (e) lot long-axis orientation.
All five are parcel-level checks you must run yourself (county CAD + FEMA + TCEQ +
geotech). Build them into the offer-contingency stage, not the listing filter.

---

# PART 1 — Land Search Criteria Worksheet

## 1.1 Geography / Sub-Market Profiles

Commute baselines are to downtown Austin (Congress Ave) and to "the tech corridor"
(loosely: the Domain/North Austin for Apple/Google/Meta; Tesla Gigafactory + Samsung
Taylor for the east/northeast). Price/acre figures are order-of-magnitude for raw or
scrape lots in mid-2026 and vary wildly by view and buildability.

### Inner / Close-In (city water + sewer, high $/acre, small lots)

**Tarrytown (78703)** — Old-money close-in Austin, tree-canopied, walk/bike to Lake
Austin and downtown. Eanes-adjacent reputation but actually **Austin ISD** (Casis
Elementary is the draw). ~10 min to downtown, ~25 to the Domain. Lots ~0.15-0.30 ac;
raw/scrape land $1.5M-$2.5M+ — *above your land budget almost everywhere*. City of
Austin permitting (slow, tree ordinance strict). No HOA typically, but
historic/character pressure is real. Low flood risk except near Lake Austin/creeks.

**Westlake / West Lake Hills (78746)** — Affluent hills west of downtown, canyon and
Lake Austin views, **Eanes ISD** (the marquee district). ~12-15 min downtown.
Wooded, sloped lots ~0.3-0.8 ac; scrape/raw lots $900k-$2M+. Mostly **septic** (no
city sewer in much of West Lake Hills), city or MUD water, fiber widely available.
West Lake Hills has its **own city government and architectural/site review** — and
steep-slope + creek (CWQZ) rules that bite hard. Edwards limestone (good soil) but
karst/recharge constraints possible. Moderate-high lot prices push you to Scenario C.

**Rollingwood (78746)** — Tiny incorporated city wedged between Zilker and Westlake,
Eanes ISD, ~8 min downtown. Flat-to-rolling, mature trees, ~0.25-0.5 ac lots. Its own
city permitting + building rules. Very limited land inventory; when raw lots appear
they're $600k-$1.5M. City water/sewer in parts, septic in others. Low HOA prevalence
(city rules substitute). Some Eanes Creek floodplain exposure.

**Bouldin Creek / South Congress (78704)** — Hip, walkable, close-in south. Austin
ISD. ~5-10 min downtown — best urban-lifestyle option here. Lots small (~0.12-0.25
ac); scrape lots $700k-$1.2M. City water/sewer, fiber. New Austin "HOME" code allows
up to 3 units / higher lot coverage — relevant if you ever want a casita/ADU. Austin
permitting + tree ordinance. Some Bouldin Creek / Bear Creek floodplain pockets — verify.
MCM infill is welcomed here (modern is the local vernacular) — low style friction.

**East Austin — Mueller / Cherrywood / Holly (78702/78722/78723)** — Eclectic,
gentrifying, close-in east. Austin ISD. ~5-10 min downtown. **Mueller** is a master-
planned, design-controlled community with its own **architectural review + modern
design code** (MCM-friendly *aesthetically* but you build to their book, and lots are
mostly sold through builders). **Cherrywood/Holly** are older grids with scrape lots
~0.1-0.2 ac, $325k-$900k. City water/sewer/fiber. Holly is near Lady Bird Lake —
**floodplain check essential**. Blackland clay starts showing up east of I-35 — soil
risk rises. Tree ordinance applies.

### Lake / West Hills (MUD or well water, septic common, view premium)

**Lakeway (78734/78738)** — Established Lake Travis resort-suburb, **Lake Travis
ISD** (strong). ~30-40 min downtown, ~35 to Domain. Rolling limestone hills, lake +
canyon views. Lots ~0.3-1.0 ac (raw land thin and sub-1-acre); $250k-$900k in budget,
larger parcels jump over $1M. MUD water + MUD sewer in newer sections (Rough Hollow),
septic in older. Fiber/propane common. **HOA prevalence high** (Rough Hollow, Flint
Rock — amenity HOAs $200-270/mo with design review). Edwards limestone. Some WUI
wildfire exposure on the urban-wildland edge.

**Bee Cave (78738)** — Newer affluent hub west of Austin (Hill Country Galleria
retail), **Lake Travis ISD**. ~25-35 min downtown. Hill Country views, limestone.
**Raw land is very thin** (3 vacant lots found total; most $1.2M-$1.6M). ~25 min to
nothing tech-wise but good lifestyle/retail. City of Bee Cave permitting + likely HOA/
review in subdivisions. Edwards recharge zone touches here — restrictions possible.

**Lago Vista (78645)** — More affordable Lake Travis community on the north shore,
**Lago Vista ISD** (smaller). ~45-55 min downtown — the commute is the cost. **Deepest
in-budget inventory of any lake submarket** ($250k-$800k for 0.7-2.5 ac). Highland
Lake Estates / POA gives lake-park + boat-ramp access for a low fee (~$200-1,000/yr).
Mix of well/septic and (in spots) **public water + sewer** — a real differentiator.
Limestone hills, lake + Hill Country views, some lakefront. WUI exposure on the edges.
Low style friction (no dominant conservative ARB).

**Spicewood (78669)** — Strung along Lake Travis + the Pedernales, Burnet/Travis line,
**Marble Falls or Lake Travis ISD** depending on parcel. ~45-55 min downtown. Rural-
luxe, vineyards, lake estates. Lots 1-10 ac, $300k-$900k in budget. Mostly **well +
septic**; some lake communities (Barton Creek Lakeside) have amenities + HOA. Edwards/
Trinity aquifer + WUI considerations. Beautiful, but services and commute are real.

### Hill Country (well + septic, limestone, acreage, views, low $/acre)

**Dripping Springs (78620)** — "Gateway to the Hill Country," fast-growing, wineries/
distilleries, **Dripping Springs ISD** (excellent, a major draw). ~35-45 min downtown,
~40 to tech. 5-15 ac lots common, $500k-$800k (≈$60k-$120k/ac). **Well + septic**
nearly universal; electric available; fiber spotty (verify per parcel). Light deed
restrictions in ranch subdivisions (Blue Creek, Stagecoach Ranch), modest HOAs
($100-300/yr). Edwards limestone (good foundations) **but much of the area sits over
the Barton Springs Edwards Aquifer recharge/contributing zone — expect impervious-
cover limits, water-quality controls, and septic scrutiny.** Hays County permitting +
ETJ patchwork. WUI wildfire relevant. **Best all-around fit for the brief.**

**Driftwood (78619)** — Quieter, more rural than Dripping Springs, same DSISD, home of
Salt Lick BBQ + wineries. ~35-45 min downtown. 5-12 ac, $425k-$700k. Well + septic;
mature oaks, rolling limestone ridgelines — *excellent MCM site profile*. Light/no HOA
in many subdivisions. Same aquifer-recharge caution as Dripping Springs (verify
recharge-zone status — it varies parcel to parcel). Hays County.

**Wimberley (78676)** — Artsy Hill Country village on the Blanco River + Cypress
Creek, **Wimberley ISD**. ~50-60 min downtown — the farthest "lifestyle" option. 5-7
ac lots $300k-$770k. Well + septic. Devil's Backbone views are spectacular. **Flood
history is serious** — the 2015 Blanco River flood was catastrophic; any creek/river-
adjacent parcel needs a hard floodplain + Atlas-14 review. WUI wildfire relevant. Low
style friction. Great land, longest commute.

**Round Mountain (78663)** — Far northwest, **Blanco County**, tiny. ~60-75 min
downtown — effectively rural. 5-11 ac lots $200k-$400k (**best $/acre + views in this
whole survey**). Well + septic; underground utilities in newer gated subdivisions
(The Vistas, The Bluffs). Wildlife/ag exemptions keep carrying costs near zero.
Limestone, big long-range views. Trade-off is pure distance + total car dependence.
Blanco County permitting is light (a plus for an unconventional design).

**Spicewood / Round Mountain note:** these far-west/northwest options maximize land
quality per dollar and minimize regulatory friction, at the explicit cost of commute
and services. If neither George nor Taylor must be downtown often, they're undervalued.

### Exurban / Edge (mixed soil — clay risk east, value but fit risk)

**Liberty Hill (78642)** — Northwest, **Williamson County**, fast-growing, **Liberty
Hill ISD**. ~45-55 min downtown, but closer to the NW tech/Cedar Park job pockets. 5-13
ac, $300k-$550k. Well + septic (some with utilities already in). Western Williamson is
**limestone/caliche** (good) — but verify, the clay line runs through the county.
Hill Country views on the west side. Low-to-moderate HOA. Solid value, decent soil.

**Pflugerville rural pockets (78660)** — North-northeast, Pflugerville/Hutto ISD, close
to the Domain + Tesla-ish. ~30-40 min downtown. **CUT RECOMMENDATION:** (1) no in-
budget rural land found — qualifying acreage is priced as development land ($1.5M-
$2.75M), and (2) **Blackland Prairie clay** — expansive-soil foundation risk exactly
as flagged. Flat, treeless prairie is also a weak site-responsive-MCM canvas.

**Manor rural pockets (78653)** — East, Manor/Elgin ISD, ~25 min to downtown/Tesla
(the close-in commute is the only real draw). Cheap acreage ($300k-$575k for 6-15 ac).
**CLAY-SOIL FLAG: Blackland Prairie** — engineered foundations effectively mandatory,
adds real cost. Flat, open, sparse trees — no slope/view/shade assets to design
around. Include only if proximity-to-east-side-jobs outweighs build cost + aesthetics.

#### Sub-market quick-compare

| Submarket | County | ISD | ~Downtown | Typical lot | In-budget $/parcel | Water/Sewer | Soil | Key risk |
|---|---|---|---|---|---|---|---|---|
| Tarrytown | Travis | Austin | 10 min | 0.15-0.30 ac | $1.5M+ (over) | City/City | Limestone | Price |
| Westlake | Travis | Eanes | 12-15 min | 0.3-0.8 ac | $900k-$2M | City-MUD/**Septic** | Limestone | Price, slope/CWQZ, ARB |
| Rollingwood | Travis | Eanes | 8 min | 0.25-0.5 ac | $600k-$1.5M | Mixed | Limestone | Inventory, city rules |
| Bouldin/SoCo | Travis | Austin | 5-10 min | 0.12-0.25 ac | $700k-$1.2M | City/City | Mixed | Price, small lot, flood pockets |
| E. Austin (Mueller/Cherrywood/Holly) | Travis | Austin | 5-10 min | 0.1-0.2 ac | $325k-$900k | City/City | Clay rising E | Flood (Holly), ARB (Mueller), clay |
| Lakeway | Travis | Lake Travis | 30-40 min | 0.3-1.0 ac | $250k-$900k | MUD/MUD or Septic | Limestone | HOA $$, WUI |
| Bee Cave | Travis | Lake Travis | 25-35 min | 1-3 ac | $1.2M+ (thin) | City/Septic | Limestone | Inventory, recharge zone |
| Lago Vista | Travis | Lago Vista | 45-55 min | 0.7-2.5 ac | $250k-$800k | Mixed (**some public sewer**) | Limestone | Commute, WUI |
| Spicewood | Burnet/Travis | MFalls/LT | 45-55 min | 1-10 ac | $300k-$900k | Well/Septic | Limestone | Commute, aquifer, WUI |
| Dripping Springs | Hays | Dripping Springs | 35-45 min | 5-15 ac | $500k-$800k | Well/Septic | Limestone | **Aquifer recharge**, WUI |
| Driftwood | Hays | Dripping Springs | 35-45 min | 5-12 ac | $425k-$700k | Well/Septic | Limestone | Aquifer recharge, WUI |
| Wimberley | Hays | Wimberley | 50-60 min | 5-7 ac | $300k-$770k | Well/Septic | Limestone | **Flood (Blanco)**, commute, WUI |
| Round Mountain | Blanco | Johnson City/etc | 60-75 min | 5-11 ac | $200k-$400k | Well/Septic | Limestone | Commute, services |
| Liberty Hill | Williamson | Liberty Hill | 45-55 min | 5-13 ac | $300k-$550k | Well/Septic | Limestone (verify) | Clay line, commute |
| Pflugerville rural | Travis | Pflugerville | 30-40 min | 5+ ac | $1.5M+ (over) | Well/Septic | **CLAY** | Price + clay — CUT |
| Manor rural | Travis | Manor/Elgin | 25 min | 6-15 ac | $300k-$575k | Well/Septic | **CLAY** | Clay foundations, flat/treeless |

## 1.2 Lot Characteristics That Matter for MCM + Site-Responsive Design

| Characteristic | Target / Ideal | Why it matters for MCM | Red flag |
|---|---|---|---|
| **Acreage** | 1-10 ac sweet spot (0.3-1 ac acceptable inner-suburb; up to 15 ac Hill Country) | Room to site the house for sun/view/privacy; buffer = quiet | <0.15 ac forces a box on a rectangle; >15 ac = ag/management overhead |
| **Orientation** | **Long axis runs E-W** so primary glazing faces N (even light) and S (shadeable winter sun) | The whole MCM glass-wall move works only if you can shade it; E-W long axis is the single most valuable free design asset | Long axis N-S forces big glass to face brutal E/W low sun — overheating, glare |
| **Slope** | Gentle 3-12% — enables walkout/split-level, drainage, view | Gentle grade = cheap drama (cantilevers, terraces) + natural drainage | Flat = bland + drainage/clay risk; >20% = expensive cut/fill, retaining, foundation $$ |
| **Trees** | Mature live oaks/elms as SW/W summer shade; cluster, not scattered | Free afternoon shade is worth tons of cooling; canopy = instant maturity | Austin/ETJ **tree ordinance**: protected ≥19" dia., heritage ≥24" — can't remove, constrains envelope; cedar-only = fire fuel, less shade value |
| **Views** | Hill Country ridgeline, Lake Travis/Austin, or downtown skyline — to the **N or E** ideally | View axis should align with shadeable glazing, not fight solar control | Best view due **west** = conflict between view glass and afternoon heat (solvable with deep overhangs/screens, but costs) |
| **Privacy / setbacks** | Natural screening + generous setbacks; no house staring into your glass walls | MCM lives or dies on indoor-outdoor openness — needs privacy to use it | Tight side setbacks + neighbor windows kill the glass-wall concept |
| **Frontage / access** | Paved, public-maintained road; legal frontage; reasonable driveway grade | Affects build cost, financing, resale, emergency access | Private/easement-only road (maintenance disputes), long steep driveway ($$), shared access |
| **Soil** | **Edwards Plateau limestone/caliche** (Hill Country, west) | Stable, drains, cheap slab/pier foundations; rock = drama but trenching cost | **Blackland Prairie clay** (east: Manor, Pflugerville, E of I-35) = expansive, heaves, **engineered foundation required (+$30-80k)** |
| **Floodplain** | Building envelope entirely **outside** FEMA 100-yr AND 500-yr | Post-2018 **Atlas 14** re-rated Central TX rainfall sharply upward — old maps understate risk; insurance + buildability + resale | Any 100-yr (Zone AE/A) on the build pad; creek/river adjacency (Wimberley, Holly, creekside Westlake) |
| **Wildfire / WUI** | Outside or low-rated Wildland-Urban Interface; defensible space possible | Hill Country WUI affects insurance, code (ignition-resistant materials), survivability | High WUI rating in cedar-heavy terrain = insurance cost/availability hit |
| **Karst / aquifer recharge** | Outside the **Barton Springs Edwards Aquifer recharge zone** if possible | Recharge zone = strict impervious-cover caps, water-quality controls, geologic assessment, void/cave mitigation — can gut a design + add cost/time | Parcel in recharge zone (much of Dripping Springs/Driftwood/SW Travis); known caves/sinkholes |

## 1.3 Regulatory / Dealbreaker Filters

**Jurisdiction & permitting (this changes everything about cost + timeline):**

- **City of Austin (full-purpose):** strictest. Tree ordinance, impervious cover,
  McMansion/compatibility rules, slow review. Tarrytown, Bouldin, East Austin.
- **Incorporated suburbs (own govt + often own ARB):** West Lake Hills, Rollingwood,
  Bee Cave, Lakeway — their own building/site rules + architectural review.
- **City of Austin ETJ:** limited Austin authority + county — a confusing middle
  ground; verify exactly what applies (it has shifted with recent TX legislation).
- **Unincorporated county (lightest):** Hays / Travis / Williamson / Burnet / Blanco
  county only — generally **no zoning, no design review**; you mainly clear septic
  (county/TCEQ), driveway/culvert, floodplain, and (if applicable) Edwards Aquifer
  permits. **Best regulatory path for an unconventional MCM design.** Round Mountain
  (Blanco) and rural Hays are the lightest-touch.

**HOA / deed restrictions / ARB — the MCM-style risk:**
- Conservative amenity-HOAs (some Lakeway/Hill Country gated communities) run
  **architectural review boards** that can fight flat roofs, large glazing, or modern
  massing. **Get the CC&Rs and design guidelines BEFORE offer** and read the
  "architectural style," roof, and materials sections specifically.
- "Light" or "minimal" deed restrictions (Blue Creek, York Creek, many ranch
  subdivisions) usually just bar mobile homes/commercial/livestock limits — generally
  MCM-safe. **No HOA + unincorporated county = maximum design freedom.**

**Utilities — cost + effort + risk:**
- **Septic (OSSF):** requires a **perc/soil test**, system design, county/TCEQ permit.
  ~$15-30k. Edwards recharge zone = aerobic system + extra scrutiny. Adds design time.
- **Well:** ~$15-50k depending on depth; **water quantity & quality unknown until
  drilled** — a real risk in parts of the Hill Country. Ask neighbors' well depths/GPM.
  A parcel with a *producing well already in* (e.g., Round Mountain Lot 3&4 @ 40 GPM,
  101 Purple Sage, 421 S Bear Creek) removes a major unknown — value that highly.
- **City/MUD water + sewer** removes both unknowns — rare on acreage, common inner-
  suburb and parts of Lago Vista; a genuine differentiator (see 3006 Point Cv).
- **Fiber:** verify per address (AT&T Fiber, Google Fiber, local WISPs). Spotty in
  Hill Country — matters if either works from home.

**Easements:** utility, access, pipeline, drainage, conservation. Pull the survey +
title commitment; an easement across the ideal build pad can force a worse siting.

**Property tax rates (2026, approximate combined effective, varies by exact ESD/MUD/
city overlay — verify per parcel on the county CAD):**

| Jurisdiction | Approx. combined rate | Note |
|---|---|---|
| City of Austin + Travis + AISD | ~1.8-2.1% | Highest; city + AISD stack |
| Travis County unincorporated | ~1.6-1.9% | No city tax; + ESD |
| Hays County (Dripping Springs ISD area) | ~1.7-2.0% | DSISD bonds elevated |
| Williamson County (Liberty Hill ISD) | ~1.8-2.1% | Fast-growth ISD debt |
| Burnet County (Spicewood) | ~1.5-1.8% | Generally lower |
| Blanco County (Round Mountain) | ~1.3-1.6% | **Lowest**; + ag/wildlife exemption can cut land tax to near zero |

> Carrying-cost lever: a **wildlife or ag exemption** (common on Hill Country
> acreage — Round Mountain, Spicewood, Liberty Hill listings note it) can drop the
> *land's* taxable value enormously while you design and build. Confirm the exemption
> transfers / can be maintained through construction.

## 1.4 Budget Split Scenarios

All-in envelope $1M-$2M (land + build + soft costs). Build cost 2026 Austin custom MCM
≈ **$400-600/sf** (MCM glass/steel/site work trends to the high end). Soft costs
(architect 8-12%, structural/civil/MEP engineering, geotech, survey, permits,
financing fees) ≈ **10-18% of build** — budget ~$150-250k and don't let it surprise you.

| Scenario | Land | Build budget | Sq ft @ ~$500/sf | Soft costs (in env.) | Where it fits | Profile |
|---|---|---|---|---|---|---|
| **A — Hill Country** | $300k | ~$1.4M | ~2,500-3,000 sf | ~$200k | Dripping Springs, Driftwood, Round Mountain, Liberty Hill, Wimberley | Most land, biggest house, longest commute. Well+septic cost lives in the build column. |
| **B — Inner suburb** | $600k | ~$1.1M | ~2,000-2,500 sf | ~$150k | Lakeway, Lago Vista, Bee Cave, edge Westlake | Balanced. Lake/view access, shorter commute, mid house. |
| **C — Premium location** | $900k | ~$800k | ~1,400-1,800 sf | ~$120k | Westlake, Bouldin, close-in East Austin | Smallest footprint, best location/walkability. MCM "jewel box." Tightest design discipline. |

**Read on the scenarios for *this* brief:** because the design is explicitly site-
responsive (slope/trees/views/wind drive it), **Scenario A maximizes the raw material
the design works with** and leaves the most build budget for the expensive MCM moves
(big glazing, deep overhangs, steel, cantilevers, passive cooling). Scenario C buys a
location and a constrained box. Scenario B is the hedge — real views + manageable
commute. The plot survey skews A/B because that's where the land + budget + design fit.

**Land carrying cost during design + build (18-24 months):**
- **Property tax on raw land:** with an ag/wildlife exemption, often **$50-500/yr**
  (negligible). Without exemption on a $600k lot at ~1.9%, ~**$11,400/yr** — material.
  *Prioritize parcels that already carry, or can establish, an exemption.*
- **Land loan financing:** raw-land loans run higher rate + larger down (often 20-35%
  down, rate ~1-2 pts above conventional). On $300-600k financed for ~2 yrs, interest
  is roughly **$30k-$80k** — real money. A **construction-to-permanent loan** that
  rolls the lot in can be cheaper than a separate land loan; price both. Cash for land
  (if feasible) removes this line entirely.
- **Rough A/B/C carrying-cost reserve to hold:** **$40k-$100k** over the project, depending
  on cash-vs-finance and exemption status. Put it in the all-in math now, not later.

---

# PART 2 — Initial Plot Survey (live listings as of 2026-06-07)

**Sourcing & confidence.** Verified = URL fetched live, returned current ACTRIS MLS
data (price/acreage/DOM/utilities/HOA). Snippet = real URL from search results but the
aggregator (Zillow/Redfin/etc.) blocked the page, so details are from the snippet only
— confirm before relying. Longhorn Realty + TexasRealEstateSource are MLS-fed broker
sites; they are the live data, not Zillow scrapes. **All "verify" flags (floodplain,
aquifer, WUI, soil, orientation) are because listings don't disclose them — not because
something is known-bad.**

## 2.1 Shortlist (12 plots, ranked best-to-worst for MCM site fit + value + risk)

### #1 — 414 Blue Creek Dr, Dripping Springs 78620 ✅ Verified active
- **URL:** https://www.longhornrealty.com/property-search/detail/44/9898962/414-blue-creek-dr-dripping-springs-tx-78620/
- **Price / acreage:** $620,000 / 7.3 ac (7.2 usable) · Blue Creek Ranch (<30 homesites)
- **Submarket:** Dripping Springs (Hays) · **DOM:** 19 · ~10 min to downtown Dripping Springs
- **Orientation/shape:** not in listing — pull plat; 7+ ac gives freedom to site E-W regardless
- **Features:** "gently sloping, multiple build sites," mix of open/oak/cedar/heavy woods,
  Trees-Large (40 ft+), Hill Country + woods views, wet-weather creek along the back
- **Utilities:** electric available; **well + septic needed**
- **Flags:** floodplain/aquifer not stated — **wet-weather creek + Dripping Springs =
  check FEMA + Edwards recharge-zone status carefully**; WUI uncertain
- **HOA / deed:** ~$120/yr; **light restrictions** (residential-only, animals allowed) — MCM-safe
- **Why MCM:** Hits nearly every brief criterion at once — gentle slope (walkout/terraces),
  large shade oaks, multiple build pads to chase E-W orientation + views, big enough for
  privacy, light restrictions = design freedom. Price lands in Scenario A (~$1.4M build left).
- **Risks:** creek floodplain on part of the lot; confirm a build pad fully out of it.
  Aquifer recharge could impose impervious-cover limits — verify before offer.

### #2 — 3006 Point Cv, Lago Vista 78645 ✅ Verified active
- **URL:** https://www.texasrealestatesource.com/listing/lago-vista-tx/78645/3006-point-cv/44-913144265/
- **Price / acreage:** $575,000 / 1.02 ac · Highland Lake Estates
- **Submarket:** Lago Vista (Travis) · **DOM:** 20 (freshest lake listing) · 45-55 min downtown
- **Orientation/shape:** waterfront lot; view axis to the lake/main channel — confirm sun vs. view
- **Features:** Lake Travis waterfront, unobstructed main-channel views (across from Pace
  Bend Park), native plants + moderate trees, deep water
- **Utilities:** **public water + public sewer + electric + cable ALL available** — rare; removes
  the well+septic cost AND the well water-quality unknown
- **Flags:** floodplain not stated — **waterfront, so verify the build pad elevation vs.
  Lake Travis flood pool / FEMA** (this is the main risk); WUI uncertain
- **HOA / deed:** ~$17/mo + $200/yr POA (9 lake parks, boat ramps) — cheap, amenity-rich
- **Why MCM:** Full public utilities + water view + moderate trees is the lowest-friction
  package found. A 1-acre waterfront lot suits a horizontal MCM with a lake-facing glass
  wall (shade it well). Scenario B.
- **Risks:** commute is the real cost; waterfront flood-pad elevation must check out; smaller
  acreage limits siting flexibility vs. the Hill Country lots.

### #3 — 101 Purple Sage, Driftwood 78619 ✅ Verified active
- **URL:** https://www.longhornrealty.com/property-search/detail/44/3004040/101-purple-sage-driftwood-tx-78619/
- **Price / acreage:** $695,000 (cut from $843k) / 11.5 ac · Rolling Oaks · platted into 2 tracts
- **Submarket:** Driftwood (Hays) · **DOM:** ~103 · 35-45 min downtown
- **Features:** mature oaks throughout, **rolling topography**, Hill Country views, backs to a
  historic ranch (privacy); corral/lean-to/shed
- **Utilities:** **water well on-site, electric, existing septic**, asphalt access — major de-risk
- **Flags:** floodplain/aquifer not stated — verify recharge zone (Driftwood varies); WUI uncertain
- **HOA / deed:** none indicated
- **Why MCM:** Big acreage + rolling + mature oaks + utilities already in + no HOA = enormous
  design freedom and a de-risked site. The 2-tract plat is optionality (build on one, hold/sell
  the other). Price cut shows motivation. Scenario A/B border.
- **Risks:** 11.5 ac is more land (and tax/management) than needed; confirm exemption holds.
  Existing septic age/condition needs inspection.

### #4 — Lot 33 Vista Ridge Dr, Round Mountain 78663 ✅ Verified active
- **URL:** https://www.longhornrealty.com/property-search/detail/44/7990916/lot-33-vista-ridge-dr-round-mountain-tx-78663/
- **Price / acreage:** $244,000 (cut from $249k) / 7.25 ac · The Vistas at Round Mountain (gated)
- **Submarket:** Round Mountain (Blanco) · **DOM:** 251 · 60-75 min downtown
- **Features:** mostly cleared, level-to-gentle, "pretty Hill Country views," native plants;
  **wildlife-exempt (near-zero carrying cost)**
- **Utilities:** electric + underground utilities available; **septic needed** (no municipal water → well)
- **Flags:** floodplain not stated (elevated lot → likely low); WUI uncertain; **light Blanco
  County permitting = design-freedom plus**
- **HOA / deed:** ~$42/mo + $500/yr
- **Why MCM:** Cheapest route to real acreage + big views; wildlife exemption makes the
  18-24-month hold almost free. Leaves the fattest build budget of any plot (Scenario A,
  ~$1.5M+ build). Light county oversight suits an unconventional design.
- **Risks:** distance/total car-dependence is the headline; must drill a well (cost + quantity
  unknown — ask neighbors); fewer trees (less natural shade — design for it). Long DOM.

### #5 — 421 S Bear Creek Rd, Liberty Hill 78642 ✅ Verified active
- **URL:** https://www.longhornrealty.com/property-search/detail/44/8209591/421-s-bear-creek-rd-liberty-hill-tx-78642/
- **Price / acreage:** $549,000 / 5 ac · Bear Creek Ranch · subdividable
- **Submarket:** Liberty Hill (Williamson) · **DOM:** ~74 · 45-55 min downtown
- **Features:** heavy mature trees (40 ft+), rolling, scenic vistas, seasonal pond (needs work);
  existing mobile home + barn
- **Utilities:** **well + septic + electric ALL installed/operational** — fully de-risked utilities
- **Flags:** "Bear Creek" name → **check floodplain**; soil likely limestone/caliche (verify, clay
  line runs through Williamson); WUI uncertain
- **HOA / deed:** no HOA fee noted
- **Why MCM:** Only plot found with every utility already in and working — removes the two biggest
  Hill Country unknowns at once. Rolling + heavy shade trees + 5 ac is a strong canvas. Scenario A/B.
- **Risks:** creek floodplain to verify; mobile-home removal/cleanup cost; confirm soil isn't clay.

### #6 — 977 Tomichi Trl, Lakeway 78738 ✅ Verified active
- **URL:** https://www.texasrealestatesource.com/listing/lakeway-tx/78738/977-tomichi-trl/44-917867300/
- **Price / acreage:** $795,000 / 0.80 ac · Rough Hollow – Las Brisas Estates
- **Submarket:** Lakeway (Travis) · **DOM:** 613 (stale — possible negotiation room) · 30-40 min downtown
- **Features:** gently sloping, backs to park/greenbelt, many trees, Canyon/Hill Country/Lake/
  panoramic views over Little Rough Hollow Cove
- **Utilities:** **MUD water + MUD sewer + electric + fiber + propane** — full services
- **Flags:** floodplain not disclosed; greenbelt-backing helps privacy; WUI edge — verify
- **HOA / deed:** **$267/mo** (Rough Hollow resort amenities) — **and an ARB: confirm MCM/flat-roof/
  glazing is allowed in the design guidelines BEFORE offer**
- **Why MCM:** Gentle slope + greenbelt + panoramic lake views + full utilities + fiber + LTISD,
  closer-in than the Hill Country plots. Scenario B/C.
- **Risks:** **high HOA carrying cost + architectural review is the real MCM risk here** —
  vet the CC&Rs first. 613 DOM suggests something's off (price? lot constraints?) — diligence.
  Sub-1-acre limits siting.

### #7 — 1202 Dusk Ct, Lago Vista 78645 ✅ Verified active
- **URL:** https://www.texasrealestatesource.com/listing/lago-vista-tx/78645/1202-dusk-ct/44-911724557/
- **Price / acreage:** $799,000 (cut from $850k) / 2.48 ac · Emerald Bend · cul-de-sac
- **Submarket:** Lago Vista (Travis) · **DOM:** ~81 · 45-55 min downtown
- **Features:** **direct Lake Travis waterfront + existing boat dock + deeded lake privileges**,
  open landscape with several mature medium trees, Hill Country/lake/panoramic views
- **Utilities:** verify (waterfront; likely water available, septic needed) — confirm on the page
- **Flags:** waterfront → **floodplain/flood-pool elevation check essential**; WUI uncertain
- **HOA / deed:** ~$240/yr (Emerald Bend)
- **Why MCM:** Best acreage-in-budget on the water (2.48 ac) + a dock + panoramic views; room to
  site an E-W MCM with a lake-facing shaded glass wall. Scenario B.
- **Risks:** waterfront flood diligence; fewer large trees (less shade); confirm utilities/septic feasibility.

### #8 — 1935 Wayside Dr, Wimberley 78676 ✅ Verified active
- **URL:** https://www.longhornrealty.com/property-search/detail/44/9519580/1935-wayside-dr-wimberley-tx-78676/
- **Price / acreage:** $529,000 / 6 ac · Blanco River Ranch Estates
- **Submarket:** Wimberley (Hays) · **DOM:** ~66 · 50-60 min downtown
- **Features:** **panoramic Devil's Backbone views**, gently sloping, partially cleared w/ mature
  trees, multiple build sites, ~98% fenced/gated, private Blanco River park access
- **Utilities:** not detailed — assume well + septic; confirm
- **Flags:** **Wimberley + Blanco River access = run the floodplain/Atlas-14 review hard** (2015
  flood history); WUI relevant; verify recharge zone
- **HOA / deed:** ~$50/yr (low)
- **Why MCM:** Gentle slope + multiple build sites + iconic Devil's Backbone views + mature trees
  + tiny HOA is a textbook site-responsive canvas. Scenario A.
- **Risks:** longest "lifestyle" commute; flood history in the area (the *build pad* must be high
  and dry — river park access ≠ building in the floodplain, but verify); well unknowns.

### #9 — 2900 Constitution Dr, Lago Vista 78645 ✅ Verified active
- **URL:** https://www.texasrealestatesource.com/listing/lago-vista-tx/78645/2900-constitution-dr/44-1800494427/
- **Price / acreage:** $534,900 (cut from $549,900) / 1.40 ac · Highland Lake Estates Sec 6 · ~130 ft wide
- **Submarket:** Lago Vista (Travis) · **DOM:** ~48 · 45-55 min downtown
- **Features:** rolling slope, medium trees (20-40 ft), Hill Country + lake views, "strong view potential"
- **Utilities:** water + electric available; **septic needed**
- **Flags:** listing explicitly says **buyer to verify floodplain/buildability**; WUI uncertain
- **HOA / deed:** ~$240/yr
- **Why MCM:** **~130 ft width is genuinely useful — enough frontage to orient the long axis E-W**
  for a horizontal MCM; rolling slope + view potential + trees. Scenario B.
- **Risks:** seller flags buildability — do the floodplain/geotech early; septic perc test needed.

### #10 — Lot 2 Hamilton Pool Rd, Bee Cave 78738 ✅ Verified active
- **URL:** https://www.texasrealestatesource.com/listing/bee-cave-tx/78738/lot-2-hamilton-pool-rd/44-918527490/
- **Price / acreage:** $375,000 / 2.28 ac · Gorman subdivision
- **Submarket:** Bee Cave (Travis) · **DOM:** ~382 · 25-35 min downtown · Lake Travis ISD
- **Features:** building site overlooking trees, Hill Country views; frontage on Hamilton Pool Rd + Cuerva Dr
- **Utilities:** public water available, utilities above-ground; septic likely
- **Flags:** **Hamilton Pool Rd frontage = traffic/road noise** (works against MCM indoor-outdoor
  quiet — verify setback/buffer); recharge zone possible here; floodplain not disclosed
- **HOA / deed:** N/A noted
- **Why MCM:** Only in-budget Bee Cave option — closer-in, LTISD, Hill Country views, no HOA, 2.28 ac.
  Cheapest entry to a premium school suburb. Scenario A/B.
- **Risks:** the highway frontage is the catch (noise + access safety); long DOM; verify recharge-zone
  impervious limits and a quiet build envelope away from the road.

### #11 — 1912 Holly St, Austin 78702 (East Austin / Holly) ✅ Verified active
- **URL:** https://www.texasrealestatesource.com/listing/austin-tx/78702/1912-holly-st/44-1802545517/
- **Price / acreage:** $649,000 / **0.1 ac (small)** · teardown, sold land-value
- **Submarket:** East Austin – Holly (Travis) · **DOM:** ~6 (fresh) · 5-10 min downtown
- **Features:** level city lot, all utilities connected, minutes to Lady Bird Lake/downtown
- **Utilities:** **city water + sewer connected** (de-risked)
- **Flags:** **Holly is near Lady Bird Lake — floodplain check essential**; Austin tree ordinance applies;
  clay soil possible E of I-35 — verify
- **HOA / deed:** N/A
- **Why MCM:** Walkable urban infill, full utilities, fast downtown access; East Austin welcomes modern
  design (low style friction). A jewel-box MCM. Scenario C.
- **Risks:** **0.1 ac is tight** — limited siting/orientation freedom and no privacy buffer; floodplain
  proximity; cash/as-is teardown.

### #12 — 551 Lake View Dr, Spicewood 78669 ✅ Verified active
- **URL:** https://www.longhornrealty.com/property-search/detail/44/3218370/551-lake-view-dr-spicewood-tx-78669/
- **Price / acreage:** $499,000 / 7.74 ac · Lake Oaks Ranch · **ag-exempt (taxes ~$7/yr now)**
- **Submarket:** Spicewood (Burnet) · **DOM:** ~38 · 45-55 min downtown
- **Features:** Lake Travis frontage, gated, mix of medium/small trees for privacy, Hill Country + lake views
- **Utilities:** electricity + water available; **septic needed**
- **Flags:** lakefront → floodplain check; Edwards/Trinity aquifer + WUI considerations; verify recharge zone
- **HOA / deed:** **$121/mo ($1,452/yr)** — confirm design guidelines/ARB
- **Why MCM:** 7.74 ac + lake frontage + ag exemption (near-zero hold cost) + views is a strong,
  cheap-to-carry Hill Country/lake hybrid. Scenario A/B.
- **Risks:** higher monthly HOA (and possible ARB — vet it); commute; septic + floodplain diligence on
  the lakefront pad.

## 2.2 Honorable mentions / leads worth a look (lower confidence)

- **Lot 3 & 4 Vista Ridge Dr, Round Mountain** — $399,900 / 11.01 ac, **40 GPM well already in**,
  pond, big views (Longhorn, index-listed; well-in is a big plus). https://www.longhornrealty.com/property-search/detail/44/7674680/lot-3-amp-4-vista-ridge-dr-round-mountain-tx-78663/
- **109 Scotty Ln, Liberty Hill** — $412k / 5.53 ac, gentle slope, creek frontage, Hill Country views,
  gated (creek = flood check). https://www.longhornrealty.com/property-search/detail/44/1263738/109-scotty-ln-liberty-hill-tx-78642/
- **10673 W FM 150, Driftwood** — $429k / 5 ac, heavy 40 ft+ trees, level, gated, 19 DOM (level = less
  walkout drama). https://www.longhornrealty.com/property-search/detail/44/6129052/10673-w-w-fm-150-driftwood-tx-78619/
- **1216 Overland Stage Rd, Dripping Springs** — $725k / 10.54 ac, Stagecoach Ranch (index-listed). https://www.longhornrealty.com/property-search/detail/44/7358324/1216-overland-stage-rd-dripping-springs-tx-78620/
- **230 Meadowview Dr, Wimberley** — $374k / 5 ac, low entry (verify slope/flood). https://www.longhornrealty.com/property-search/detail/44/8825491/230-meadowview-dr-wimberley-tx-78676/

**Inner-Austin leads (snippet-only — URLs real, pages blocked, confirm price/status):**
- **2204 Matthews Dr, Tarrytown** — ~$1.75M / 0.24 ac, high point, **Lake Austin treetop views**,
  mature oaks (over land budget but the marquee view/tree lot). https://www.redfin.com/TX/Austin/2204-Matthews-Dr-78703/home/29336065
- **2109 S 5th St, Bouldin 78704** — ~$899k / ~0.23 ac, walk to South Congress, new code allows
  multi-unit. https://www.redfin.com/TX/Austin/2109-S-5th-St-78704/home/31682850
- **1204 Yaupon Valley Rd, West Lake Hills 78746** — ~$980k / 0.53 ac, teardown, heavy trees, canyon
  views, Eanes ISD (just over budget). https://www.texasrealestatesource.com/listing/west-lake-hills-tx/78746/1204-yaupon-valley-rd/44-919419061/

**Excluded after cross-check (do not chase):** Pflugerville rural (no in-budget inventory + clay);
Manor (001 Bois D Arc Rd $298k/6.09 ac, 16024 Wells Rd $430k/10.1 ac — both in budget but Blackland
**clay**, flat, treeless — weak MCM fit, engineered foundation cost); several Tarrytown lots that
sold in 2025; 3403 Winfield Dr (conflicting/likely off-market).

---

# PART 3 — How to Evaluate Land In Person (reusable site-visit checklist)

Bring: compass (or phone compass app), a long tape/measuring wheel, the plat/survey,
the FEMA flood map + county CAD pulled up on your phone, a shovel or soil probe,
water (you), and a notebook. **Visit at least twice — once mid-afternoon in summer
heat to feel the west sun, once after heavy rain to see where water goes.** Photograph
everything with location on.

**Orientation & sun**
1. **Compass-check the long axis of the buildable area.** Note where you'd want the
   main glass wall and whether you can face it N/S (good) vs. E/W (heat problem).
   Stand where the living room would go and note the sun's path.
2. **Walk it mid-afternoon in summer** to feel the west/southwest sun and where shade
   falls. Note which existing trees would shade the afternoon glazing.
3. **Note prevailing wind** (Central TX summer breeze is typically from the S/SE) —
   stand still, feel it; it drives porch placement + cross-ventilation for passive cooling.

**Topography, drainage & soil**
4. **Walk the full slope** — identify the natural high point (build pad) and low points
   (where water collects). Look for a gentle-grade spot for a walkout/terrace.
5. **Dig a hole (12-18 in) in 2-3 spots.** Limestone/caliche near surface = good
   (Hill Country); sticky dark clay = Blackland Prairie = foundation cost flag.
6. **Look for drainage clues:** erosion channels, silt lines on fences/trees,
   standing water, "where would a flash flood go?" Walk any creek/draw and imagine it full.
7. **Check for rock outcrops / sinkholes / caves** (karst) — dramatic for design but a
   recharge-zone/foundation flag; note depressions that swallow water.

**Trees & vegetation**
8. **Catalog the significant trees:** species (live oak/elm = shade asset; cedar =
   fuel/less shade), approximate trunk diameter (≥19 in = protected, ≥24 in = heritage
   under Austin rules), health, and whether they sit on the ideal build pad (constraint)
   or shade it (asset). Photograph each.
9. **Note canopy vs. clearing** — where you can build without removing protected trees.

**Views & privacy**
10. **Stand at the likely build-pad height (eye level, and imagine a second story)** and
    log the views by compass direction. Does the best view align with shadeable glazing?
11. **Check sightlines from neighbors** — can anyone see into where your glass walls go?
    Note natural screening.

**Access, frontage & easements**
12. **Drive the access road** — paved/public vs. gravel/private-easement; note driveway
    grade and a safe entry sightline (especially off a highway like Hamilton Pool Rd).
13. **Walk the boundaries** against the plat/survey — find the pins; confirm acreage feels
    right; note any easements (overhead lines, pipelines markers, drainage) crossing the pad.

**Utilities**
14. **Locate the nearest electric** (pole/transformer) — how far to pull service?
15. **Septic:** is there room for a drainfield away from the well and downhill of the
    house? (Note for the perc test.) **Well:** ask neighbors their well depth + GPM +
    water quality; look for an existing well/meter.
16. **Check cell signal on-site** and look up fiber availability for the address.

**Environmental flags (verify against maps, confirm on the ground)**
17. **Pull FEMA + county GIS on your phone while standing there** — is the build pad
    outside 100-yr AND 500-yr? Walk to the floodplain line if there is one.
18. **Check Edwards Aquifer recharge-zone status** (TCEQ map) — affects impervious cover.
19. **Assess wildfire/WUI:** cedar density, single vs. multiple exit roads, defensible-
    space room around the pad.

**Nuisance & neighborhood (the stuff listings hide)**
20. **Stop, close your eyes, and listen** — road noise, highway hum, dogs, nearby
    commercial/quarry/shooting-range, aircraft. Do it on a weekday AND a weekend.
21. **Look up and around for what photos crop out:** power transmission lines, cell
    towers, a neighbor's junk/RV, a quarry, a future-development sign, a wastewater plant.
22. **Smell** — feedlots, wastewater, a nearby landfill carry on the wind.
23. **Note the neighbors' houses** — modern-tolerant or all traditional? (HOA/ARB hint.)
24. **Check phone reception + drive the real commute** at the actual time you'd drive it.
25. **Re-read the deed restrictions / CC&Rs on-site** with the lot in front of you — can
    you actually build a flat-roofed glass MCM here?

---

# Criteria-Spec Gaps Revealed by the Search

1. **Floodplain is never in listings.** Must be checked per parcel (FEMA + county GIS +
   Atlas-14). Several top plots are creek/lake-adjacent — make a clean build-pad-out-of-
   floodplain finding a hard offer contingency.
2. **Edwards Aquifer recharge-zone status is never disclosed** yet materially constrains
   Dripping Springs/Driftwood/SW Travis design (impervious cover, water-quality, geo
   assessment). Add a TCEQ recharge-zone check to the per-parcel workflow.
3. **WUI/wildfire rating is never disclosed** — relevant to all Hill Country plots for
   insurance + materials. Check Texas A&M Forest Service WUI layers.
4. **Soil type is never stated** — inferred from regional geology. A geotech/soil report
   is a pre-offer (or option-period) must, especially anywhere near the clay line
   (Williamson, east Travis).
5. **Lot long-axis orientation is never given** — must come from the plat/survey + satellite.
   The single most design-relevant attribute (E-W long axis) is invisible in listing filters,
   so it can only be applied at the per-parcel stage, not as a search filter.
6. **Aggregators block scraping** — a future scraping agent should target MLS-fed broker
   sites (Longhorn Realty, TexasRealEstateSource) or an MLS/IDX feed, not Zillow/Redfin
   directly. Best path is engaging a buyer's agent with raw-land/IDX access (already a
   Phase-1 task in project.md).
7. **Carrying-cost / exemption status** matters a lot over an 18-24 month hold but isn't a
   standard filter — prioritize ag/wildlife-exempt parcels explicitly.

---

# Machine-Readable Criteria Block (for a future scraping agent)

```yaml
# austin-house land search criteria — v1 (2026-06-07)
# Consumed by a future listing-scraping/scoring agent.
meta:
  project: austin-house
  buyers: [George, Taylor]
  all_in_budget_usd: { min: 1000000, max: 2000000 }   # land + build + soft costs
  build_cost_per_sf_usd: { min: 400, max: 600 }        # 2026 Austin custom MCM
  target_move_in: { start: "2027-06", end: "2028-06" }
  design: mid_century_modern_texas_heat_site_responsive
  principle: "right land trumps location"

counties: [Travis, Hays, Williamson, Burnet, Blanco]

land_budget_usd: { min: 200000, max: 900000 }          # inversely traded vs build size

submarkets:
  # bucket: { tier, county, school_district, downtown_min, typ_acres, in_budget_usd, water, sewer, soil, notes }
  tarrytown:        { tier: inner,   county: Travis,     isd: Austin,         downtown_min: 10, typ_acres: [0.15,0.30], in_budget_usd: [1500000, 2500000], water: city, sewer: city,   soil: limestone, status: likely_over_budget }
  westlake:         { tier: inner,   county: Travis,     isd: Eanes,          downtown_min: 14, typ_acres: [0.30,0.80], in_budget_usd: [900000, 2000000],  water: city_mud, sewer: septic, soil: limestone, flags: [arb, steep_slope_cwqz] }
  rollingwood:      { tier: inner,   county: Travis,     isd: Eanes,          downtown_min: 8,  typ_acres: [0.25,0.50], in_budget_usd: [600000, 1500000],  water: mixed, sewer: mixed,  soil: limestone, flags: [low_inventory, city_rules] }
  bouldin_soco:     { tier: inner,   county: Travis,     isd: Austin,         downtown_min: 8,  typ_acres: [0.12,0.25], in_budget_usd: [700000, 1200000],  water: city, sewer: city,   soil: mixed,     flags: [small_lot, flood_pockets], mcm_style_friction: low }
  east_austin:      { tier: inner,   county: Travis,     isd: Austin,         downtown_min: 8,  typ_acres: [0.10,0.20], in_budget_usd: [325000, 900000],   water: city, sewer: city,   soil: clay_rising_east, flags: [flood_holly, arb_mueller, tree_ordinance] }
  lakeway:          { tier: lake,    county: Travis,     isd: LakeTravis,     downtown_min: 35, typ_acres: [0.30,1.00], in_budget_usd: [250000, 900000],   water: mud, sewer: mud_or_septic, soil: limestone, flags: [hoa_high, wui] }
  bee_cave:         { tier: lake,    county: Travis,     isd: LakeTravis,     downtown_min: 30, typ_acres: [1.0,3.0],   in_budget_usd: [375000, 900000],   water: city, sewer: septic, soil: limestone, flags: [low_inventory, recharge_zone] }
  lago_vista:       { tier: lake,    county: Travis,     isd: LagoVista,      downtown_min: 50, typ_acres: [0.7,2.5],   in_budget_usd: [250000, 800000],   water: mixed_some_public, sewer: mixed_some_public, soil: limestone, flags: [commute, wui], mcm_style_friction: low }
  spicewood:        { tier: lake,    county: Burnet,     isd: MarbleFalls_LT, downtown_min: 50, typ_acres: [1,10],      in_budget_usd: [300000, 900000],   water: well, sewer: septic, soil: limestone, flags: [commute, aquifer, wui] }
  dripping_springs: { tier: hill,    county: Hays,       isd: DrippingSprings,downtown_min: 40, typ_acres: [5,15],      in_budget_usd: [500000, 800000],   water: well, sewer: septic, soil: limestone, flags: [aquifer_recharge, wui], fit: best_overall }
  driftwood:        { tier: hill,    county: Hays,       isd: DrippingSprings,downtown_min: 40, typ_acres: [5,12],      in_budget_usd: [425000, 700000],   water: well, sewer: septic, soil: limestone, flags: [aquifer_recharge, wui], fit: strong }
  wimberley:        { tier: hill,    county: Hays,       isd: Wimberley,      downtown_min: 55, typ_acres: [5,7],       in_budget_usd: [300000, 770000],   water: well, sewer: septic, soil: limestone, flags: [flood_blanco_river, commute, wui] }
  round_mountain:   { tier: hill,    county: Blanco,     isd: JohnsonCity,    downtown_min: 70, typ_acres: [5,11],      in_budget_usd: [200000, 400000],   water: well, sewer: septic, soil: limestone, flags: [commute, services], fit: best_value }
  liberty_hill:     { tier: exurban, county: Williamson, isd: LibertyHill,    downtown_min: 50, typ_acres: [5,13],      in_budget_usd: [300000, 550000],   water: well, sewer: septic, soil: limestone_verify_clay_line, flags: [commute] }
  pflugerville_rural:{ tier: exurban, county: Travis,    isd: Pflugerville,   downtown_min: 35, typ_acres: [5,10],      in_budget_usd: [1500000, 2750000], water: well, sewer: septic, soil: clay, status: cut, reason: "no in-budget inventory + clay" }
  manor_rural:      { tier: exurban, county: Travis,     isd: Manor_Elgin,    downtown_min: 25, typ_acres: [6,15],      in_budget_usd: [300000, 575000],   water: well, sewer: septic, soil: clay, flags: [clay_foundation, flat_treeless], fit: weak }

lot_targets:
  acreage_acres: { min: 0.3, ideal_min: 1, ideal_max: 10, max: 15 }
  price_usd: { min: 200000, max: 900000 }              # land only
  long_axis: east_west_preferred                        # enables shadeable N/S glazing
  slope_pct: { ideal_min: 3, ideal_max: 12, max_before_costly: 20 }
  trees: mature_shade_oaks_preferred                    # SW/W canopy = cooling asset
  views: [hill_country, lake, downtown_skyline]         # ideally to N or E
  road_access: paved_public_maintained

hard_filters:                                           # exclude if true
  in_floodplain_100yr_on_build_pad: true
  blackland_clay_soil: true                             # unless engineered-foundation budget accepted
  long_axis_locked_north_south: true                    # if lot too narrow to reorient
  no_legal_road_frontage: true
  price_land_usd_over: 900000
  acreage_under: 0.15

soft_preferences:                                       # score, don't exclude
  - utilities_already_installed                         # existing well+septic+electric
  - public_water_and_sewer                              # removes well/septic risk
  - ag_or_wildlife_exemption                            # near-zero carrying cost
  - no_hoa_or_light_deed_restrictions
  - unincorporated_county                               # lightest permitting, design freedom
  - gentle_slope_for_walkout
  - mature_oak_canopy_for_shade
  - view_aligned_with_shadeable_glazing
  - fiber_available
  - low_days_on_market_fresh OR high_dom_negotiable     # flag both
  - lower_property_tax_jurisdiction                      # Blanco/Burnet favored

dealbreakers:                                           # hard no
  - conservative_hoa_arb_that_prohibits_modern_design   # verify CC&Rs pre-offer
  - build_pad_inside_fema_100yr_floodway
  - no_viable_septic_drainfield_and_no_sewer
  - well_dry_or_unpotable_known
  - access_only_via_disputed_private_easement

per_parcel_verification_required:                       # NOT in listings — check every time
  - fema_floodplain_100yr_and_500yr: "FEMA + county GIS + Atlas-14"
  - edwards_aquifer_recharge_zone: "TCEQ map"
  - wui_wildfire_rating: "Texas A&M Forest Service"
  - soil_geotech: "boring/perc test, esp near clay line"
  - long_axis_orientation: "plat/survey + satellite"
  - easements_title: "title commitment + survey"
  - hoa_ccr_design_guidelines: "obtain + read before offer"
  - exemption_transferability: "county CAD"

budget_scenarios:
  A_hill_country:  { land_usd: 300000, build_usd: 1400000, sf: [2500,3000], submarkets: [dripping_springs, driftwood, round_mountain, liberty_hill, wimberley] }
  B_inner_suburb:  { land_usd: 600000, build_usd: 1100000, sf: [2000,2500], submarkets: [lakeway, lago_vista, bee_cave, westlake_edge] }
  C_premium_loc:   { land_usd: 900000, build_usd: 800000,  sf: [1400,1800], submarkets: [westlake, bouldin_soco, east_austin] }
  carrying_cost_reserve_usd: { min: 40000, max: 100000 }  # raw-land tax (sans exemption) + financing, 18-24 mo

data_sources:
  fetchable_mls_broker_sites: [longhornrealty.com, texasrealestatesource.com]
  blocked_aggregators: [zillow.com, redfin.com, landwatch.com, landsoftexas.com, realtor.com, har.com, homes.com, land.com, landsearch.com]
  county_cad: [traviscad.org, hayscad.com, wcad.org, burnetcad.org, blancocad.com]
  recommended: "engage buyer's agent with raw-land IDX/MLS access (project.md Phase 1)"
```
