# The Austin House

A static research monograph for George & Taylor — consolidating three Austin-house
research artifacts into one navigable, MCM-styled web experience.

- **/** — project overview + card navigation
- **/mcm** — the Mid-Century-Modern-in-Texas dossier (sticky TOC, pull-quotes, full-width images)
- **/architects** — 18 firms, filterable/sortable, with a Top-5, per-firm detail pages, an
  [interview question bank](/architects/interview-questions) and an [engagement/fees page](/architects/engage)
- **/land** — 12 live plots (mapped), budget scenarios, sub-market profiles, and a
  [site-visit checklist](/land/site-visit-checklist)
- **/feed** — newest-first plot findings with a "new since your last visit" badge

## Stack

- **[Astro](https://astro.build)** (static output) — content-heavy, ships almost no JS
- **[Tailwind CSS v4](https://tailwindcss.com)** (CSS-first `@theme`) — MCM palette (Eames-House
  warm white, terracotta, sage, walnut, ochre, charcoal); Cormorant Garamond display + Inter body
- **[marked](https://marked.js.org)** — renders the source markdown at build time
- **[Leaflet](https://leafletjs.com) + OpenStreetMap** — the plot map (free tiles)

## Source of truth

The three markdown dossiers in `src/content/` are authoritative and are **not** rewritten:

- `mcm-texas-dossier.md` — rendered in full on `/mcm`
- `architect-shortlist.md` — each firm's profile is rendered verbatim on its detail page
  (matched by heading slug); `src/data/architects.ts` holds only the structured metadata
  used for cards, sorting and filtering
- `land-search.md` — the structured data files (`src/data/*.ts`) mirror its tables; the
  plot feed lives in `public/data/plots-feed.json`

To update content, edit the markdown (and, for the architect/land structured views, the
matching `src/data/*.ts`), then rebuild.

## The plot feed

`public/data/plots-feed.json` is the live land feed. The recurring land-scan agent appends
new plots to the `plots[]` array and bumps `last_updated`, then triggers a redeploy; the
site picks them up on the next build. Required fields per plot:

```
id, first_seen, address, submarket, price_usd, acreage,
listing_url, notes, risks, lat, lng, source
```

Optional fields used by the site: `rank, scenario, dom, hoa, utilities, geo_precision`
(`exact` | `street` | `town`). New plots can set `lat`/`lng` to `null` — they'll appear in
the cards and `/feed` but not on the map until geocoded.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Deploy

**Vercel (primary):** auto-detected as Astro; `vercel --prod` builds and serves `dist/`.

**GitHub Pages (fallback):** `.github/workflows/pages.yml` builds with
`BASE_PATH=/austin-house-site` and publishes to Pages. After the first run, set
*Settings → Pages → Source = GitHub Actions* once in the repo UI. URL pattern:
`https://georgeandtonic.github.io/austin-house-site/`. (All internal links use
`import.meta.env.BASE_URL`, so both targets work without code changes.)
