// One-off: fetch 2-3 signature project images per architect firm for the
// /architects detail pages. Several sourcing modes, all using publicly
// embeddable assets:
//   - og:image / twitter:image meta tags (firm sites, Dwell, designboom, etc.)
//   - ArchDaily gallery thumbs upscaled to large_jpg, with the per-image
//     "© photographer" credit ArchDaily embeds in each thumb's title attr
//   - Squarespace/WordPress inline gallery images (hero shot), with the
//     photographer credit parsed from the filename where present ("Photo by X")
//   - direct image URLs (named residential photos off a portfolio grid)
// Images are resized to max 1200px wide and written as JPEG q85 to
// public/images/architects/<slug>/<n>.jpg.
//
// Run: node scripts/fetch-architect-images.mjs
// Emits scripts/_image-fetch-report.json to drive metadata curation.
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUT_DIR = path.join(ROOT, 'public/images/architects');
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Per-firm source list. Each firm yields up to 3 distinct images.
// mode: 'og' (default) | 'archdaily' | 'inline' | 'direct'
// For 'archdaily', `count` images are pulled from the single article.
const FIRMS = {
  'nick-deaver': [
    { page: 'https://www.archdaily.com/967565/raveon-nick-deaver-architect', mode: 'archdaily', count: 3, via: 'ArchDaily', project: 'RaveOn', year: 2018 },
  ],
  'matt-fajkus': [
    { page: 'https://www.mfarchitecture.com/work-split-house', mode: 'inline', via: 'firm', project: 'Split House', year: 2019 },
    { page: 'https://www.mfarchitecture.com/work-reopen-house', mode: 'inline', via: 'firm', project: 'Re-Open House', year: 2017 },
    { page: 'https://www.mfarchitecture.com/work-inverse-house', mode: 'inline', via: 'firm', project: 'Inverse House' },
  ],
  'webber-studio': [
    { img: 'https://webberstudio.com/wp-content/uploads/2021/05/fairfield-house7-1.jpg', mode: 'direct', via: 'firm', project: 'Fairfield House' },
    { img: 'https://webberstudio.com/wp-content/uploads/2021/05/angelwylde-residence15-1.jpg', mode: 'direct', via: 'firm', project: 'Angelwylde Residence' },
    { img: 'https://webberstudio.com/wp-content/uploads/2021/05/Woodland-Residences-7-1.jpg', mode: 'direct', via: 'firm', project: 'Woodland Residence' },
  ],
  'a-parallel': [
    { page: 'https://www.aparallel.com/three-courts-residence', via: 'firm', project: 'Three Courts Residence' },
    { page: 'https://www.aparallel.com/terrace-mountain-residence', via: 'firm', project: 'Terrace Mountain Residence' },
    { page: 'https://www.aparallel.com/rollingwood-residence', via: 'firm', project: 'Rollingwood Residence' },
  ],
  pollen: [
    { page: 'https://www.archdaily.com/805995/balcones-house-pollen-architecture-and-design', mode: 'archdaily', count: 3, via: 'ArchDaily', project: 'Balcones House', year: 2011 },
  ],
  'clayton-korte': [
    { page: 'https://claytonkorte.com/project/hill-country-wine-cave/', via: 'firm', project: 'Hill Country Wine Cave', year: 2021 },
    { page: 'https://claytonkorte.com/project/balcones-residence/', via: 'firm', project: 'Balcones Residence' },
    { page: 'https://claytonkorte.com/project/ridgecrest-residence/', via: 'firm', project: 'Ridgecrest Residence' },
  ],
  'jay-corder': [
    { page: 'https://www.jaycorder.com/projects/pemberton-residence/', mode: 'inline', via: 'firm', project: 'Pemberton Residence' },
    { page: 'https://www.jaycorder.com/projects/silver-ridge-residence/', mode: 'inline', via: 'firm', project: 'Silver Ridge Residence' },
    { page: 'https://www.jaycorder.com/projects/shoal-creek-residence/', mode: 'inline', via: 'firm', project: 'Shoal Creek Residence' },
  ],
  'specht-novak': [
    { page: 'https://spechtnovak.com/work/stealth-house/', via: 'firm', project: 'Stealth House', year: 2024 },
    { page: 'https://spechtnovak.com/work/zilker-park-house/', via: 'firm', project: 'Zilker Park House' },
    { page: 'https://spechtnovak.com/work/treetops-house/', via: 'firm', project: 'Treetops House' },
  ],
  'jay-hargrave': [
    { page: 'https://www.dezeen.com/2010/01/05/atelier-wong-by-cottam-hargrave/', via: 'Dezeen', project: 'Atelier Wong', year: 2010 },
  ],
  'cuppett-kilpatrick': [
    { page: 'https://www.dezeen.com/2017/03/22/tim-cuppett-architects-one-hillside-austin-home-modern-rustic-slurried-stone-charred-wood/', via: 'Dezeen', project: '1 Hillside' },
    { page: 'https://www.dwell.com/home/belmont-park-1798d35c', via: 'Dwell', project: 'Belmont Park', year: 2019 },
  ],
  'chioco-design': [
    { page: 'https://www.chiocodesign.com/projects/basin-ledge-residence/', via: 'firm', project: 'Basin Ledge Residence' },
    { page: 'https://www.chiocodesign.com/projects/airole-residence/', via: 'firm', project: 'Airole Residence' },
    { page: 'https://homeworlddesign.com/custom-home-designed-chioco-design/', via: 'HomeWorldDesign', project: 'Rollingwood custom home' },
  ],
  alterstudio: [
    { page: 'https://alterstudio.net/work/barton-hills-residence', via: 'firm', project: 'Barton Hills Residence' },
    { page: 'https://alterstudio.net/work/westview-residence', via: 'firm', project: 'Westview Residence' },
    { page: 'https://alterstudio.net/work/tarrytown-residence', via: 'firm', project: 'Tarrytown Residence' },
  ],
  'furman-keil': [
    { page: 'https://www.fkarchitects.net/dogrun-ranch', mode: 'inline', via: 'firm', project: 'Dog Run Ranch' },
    { page: 'https://www.archdaily.com/1032369/roost-platform-furman-plus-keil-architects', mode: 'archdaily', count: 1, via: 'ArchDaily', project: 'Roost', year: 2025 },
    { page: 'https://www.fkarchitects.net/rammed-earth-ranch', mode: 'inline', via: 'firm', project: 'Rammed Earth Ranch' },
  ],
  larue: [
    { page: 'https://www.dezeen.com/2022/12/01/larue-architects-austin-lake-house-cliffside/', via: 'Dezeen', project: 'Cliffside Lake House', year: 2021 },
    { page: 'https://www.dezeen.com/2023/07/18/larue-architects-kelle-contine-austin-house/', via: 'Dezeen', project: 'Hilltop renovation', year: 2023 },
  ],
  'lake-flato': [
    { page: 'https://www.lakeflato.com/ranches/story-pool-house', via: 'firm', project: 'Story Pool House' },
    { page: 'https://www.lakeflato.com/project/lake-austin-house/', via: 'firm', project: 'Lake Austin House' },
    { page: 'https://www.designboom.com/architecture/lake-flato-hillside-house-austin-texas-07-01-2016/', via: 'designboom', project: 'Hillside House', year: 2016 },
  ],
  'andersson-wise': [
    { page: 'https://www.anderssonwise.com/projects/lake-house', via: 'firm', project: 'Lake House' },
    { page: 'https://www.anderssonwise.com/projects/house-above-lake-austin', via: 'firm', project: 'House Above Lake Austin' },
  ],
  'bercy-chen': [
    { page: 'https://www.archdaily.com/331677/edgeland-house-bercy-chen-studio', mode: 'archdaily', count: 2, via: 'ArchDaily', project: 'Edgeland House', year: 2012 },
    { page: 'https://www.archdaily.com/250478/annie-residence-bercy-chen-studio', mode: 'archdaily', count: 1, via: 'ArchDaily', project: 'Annie Residence' },
  ],
  'michael-hsu': [
    { page: 'https://hsuoffice.com/catalogue/greenbelt-residence/', mode: 'inline', via: 'firm', project: 'Greenbelt Residence', year: 2023 },
    { page: 'https://hsuoffice.com/catalogue/llano-retreat/', mode: 'inline', via: 'firm', project: 'Llano Retreat' },
  ],
};

function pick(html, re) {
  const m = html.match(re);
  return m ? m[1] : null;
}

function ogImage(html, baseUrl) {
  const res = [
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
    /<meta[^>]+name=["']twitter:image(?::src)?["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image(?::src)?["']/i,
    /<link[^>]+rel=["']image_src["'][^>]+href=["']([^"']+)["']/i,
  ];
  for (const re of res) {
    const u = pick(html, re);
    if (u) {
      try {
        return new URL(u.replace(/&amp;/g, '&'), baseUrl).href;
      } catch {
        /* skip */
      }
    }
  }
  return null;
}

// Parse a filename for an embedded "by <Photographer>" credit.
function creditFromName(url) {
  const name = decodeURIComponent(url.split('/').pop() || '').replace(/[+_]/g, ' ');
  const m = name.match(/\bby\s+([A-Za-z][A-Za-z.\- ]+?)(?:\s*\.\w{3,4})?$/i);
  if (!m) return null;
  const c = m[1].trim();
  // Reject false positives like "by the firm" / generic words
  if (/\b(the|a|an|studio|architect|architecture)\b/i.test(c)) return null;
  return c;
}

const SKIP = /(favicon|logo|icon|sprite|avatar|badge|plan|floor|diagram|drawing|section|sketch|elevation|\.svg)/i;

// Return an ordered list of candidate URLs for the page's hero photo.
// Real gallery photos live in `data-src` (lazy-loaded) on Squarespace and in
// `src`/`srcset` on WordPress; raw `src` is often a placeholder, so data-src
// is tried first. For each, we offer the best-resolution variant (WordPress
// -scaled / full-res original) as fallbacks. A min-size guard downstream
// rejects logos/sliver banners that slip through, falling to the next image.
function inlineImage(html, baseUrl) {
  const byAttr = (attr) => {
    const out = [];
    const re = new RegExp(`${attr}=["']([^"']+)["']`, 'gi');
    let m;
    while ((m = re.exec(html))) {
      for (const part of m[1].split(',')) {
        const u = part.trim().split(/\s+/)[0].replace(/\?.*$/, '');
        if (/\.(?:jpe?g|png|webp)$/i.test(u) && !SKIP.test(u)) out.push(u);
      }
    }
    return out;
  };
  // Priority: lazy data-src, then data-image, then srcset, then plain src.
  const ordered = [...byAttr('data-src'), ...byAttr('data-image'), ...byAttr('srcset'), ...byAttr('src')];
  const seen = new Set();
  const candidates = [];
  for (const u of ordered) {
    const bare = u.replace(/-\d+x\d+(?=\.(?:jpe?g|png|webp)$)/i, '').replace(/-scaled(?=\.(?:jpe?g|png|webp)$)/i, '');
    const scaled = bare.replace(/(\.(?:jpe?g|png|webp))$/i, '-scaled$1');
    for (const v of [bare, scaled, u]) {
      try {
        const abs = new URL(v, baseUrl).href;
        if (!seen.has(abs)) {
          seen.add(abs);
          candidates.push(abs);
        }
      } catch {
        /* skip */
      }
    }
  }
  return candidates.length ? { candidates } : null;
}

// ArchDaily: each gallery thumb is <img class='thumbs__img' data-src='...thumb_jpg/x.jpg?..' title='© Name'>.
// Upscale thumb_jpg -> large_jpg and capture the credit.
function archdailyGallery(html, count) {
  const out = [];
  const seen = new Set();
  const re = /<img[^>]*class=['"][^'"]*thumbs__img[^'"]*['"][^>]*>/gi;
  let tag;
  while ((tag = re.exec(html)) && out.length < count) {
    const t = tag[0];
    const src = pick(t, /data-src=['"]([^'"]+thumb_jpg[^'"]+)['"]/i);
    if (!src) continue;
    const large = src.replace('/thumb_jpg/', '/large_jpg/').replace(/\?.*$/, '');
    const key = large.split('/').slice(-1)[0];
    if (seen.has(key)) continue;
    seen.add(key);
    const credit = pick(t, /title=['"]\s*©\s*([^'"]+?)\s*['"]/i);
    out.push({ url: large, credit: credit ? credit.trim() : null });
  }
  return out;
}

async function withRetry(fn, tries = 3) {
  let last;
  for (let i = 0; i < tries; i++) {
    try {
      return await fn();
    } catch (e) {
      last = e;
      await sleep(700 * (i + 1));
    }
  }
  throw last;
}

async function rawHtml(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, Accept: 'text/html,*/*', 'Accept-Language': 'en-US,en;q=0.9' },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

// Wayback Machine fallback for hosts that Cloudflare-block scripted fetches
// (e.g. Dezeen). The archived HTML still carries the original og:image URL,
// which points at the publisher CDN and downloads fine.
async function waybackHtml(url) {
  const api = `http://archive.org/wayback/available?url=${encodeURIComponent(url)}`;
  // The availability API is flaky and sometimes returns an empty result for a
  // page it has in fact archived — retry before giving up.
  const snap = await withRetry(async () => {
    const res = await fetch(api, { headers: { 'User-Agent': UA } });
    const j = await res.json();
    const s = j?.archived_snapshots?.closest;
    if (!s?.available) throw new Error('no wayback snapshot');
    return s;
  }, 4);
  return rawHtml(`https://web.archive.org/web/${snap.timestamp}id_/${url}`);
}

async function fetchHtml(url) {
  try {
    return await withRetry(() => rawHtml(url), 3);
  } catch (e) {
    return waybackHtml(url); // last resort for blocked hosts
  }
}

async function download(url) {
  return withRetry(async () => {
    const res = await fetch(url, {
      headers: { 'User-Agent': UA, Accept: 'image/*,*/*', Referer: 'https://www.google.com/' },
      redirect: 'follow',
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return Buffer.from(await res.arrayBuffer());
  });
}

async function saveImage(buf, dir, slug, n) {
  const outPath = path.join(dir, `${n}.jpg`);
  const meta = await sharp(buf)
    .resize({ width: 1200, withoutEnlargement: true })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(outPath);
  return { file: `images/architects/${slug}/${n}.jpg`, width: meta.width, height: meta.height, bytes: meta.size };
}

const report = {};
await rm(OUT_DIR, { recursive: true, force: true });

for (const [slug, sources] of Object.entries(FIRMS)) {
  const dir = path.join(OUT_DIR, slug);
  await mkdir(dir, { recursive: true });
  const seen = new Set();
  const got = [];

  const add = async (urls, src, credit) => {
    const candidates = (Array.isArray(urls) ? urls : [urls]).filter(Boolean);
    if (got.length >= 3 || candidates.every((u) => seen.has(u))) return;
    let buf, imgUrl, dims;
    let lastErr;
    for (const u of candidates) {
      try {
        const b = await download(u);
        // Reject placeholders / logos / sliver banners.
        if (b.length < 25_000) { lastErr = new Error('too small (bytes)'); continue; }
        const meta = await sharp(b).metadata();
        if ((meta.width ?? 0) < 450 || (meta.height ?? 0) < 300) { lastErr = new Error('too small (dims)'); continue; }
        buf = b;
        imgUrl = u;
        dims = meta;
        break;
      } catch (e) {
        lastErr = e;
      }
    }
    if (!buf) throw lastErr ?? new Error('no candidate downloaded');
    const n = got.length + 1;
    const saved = await saveImage(buf, dir, slug, n);
    seen.add(imgUrl);
    got.push({
      n,
      ...saved,
      project: src.project ?? null,
      year: src.year ?? null,
      via: src.via,
      sourcePage: src.page ?? imgUrl,
      imageUrl: imgUrl,
      credit: credit ?? creditFromName(imgUrl),
    });
    console.log(`  [${slug}] #${n} ${src.project} ${saved.width}x${saved.height} ${(saved.bytes / 1024).toFixed(0)}KB ${credit ? '© ' + credit : ''} (${src.via})`);
  };

  for (const src of sources) {
    if (got.length >= 3) break;
    try {
      if (src.mode === 'direct') {
        await add(src.img, src, creditFromName(src.img));
      } else if (src.mode === 'archdaily') {
        const html = await fetchHtml(src.page);
        const imgs = archdailyGallery(html, src.count ?? 1);
        if (!imgs.length) { console.log(`  [${slug}] no gallery on ${src.page}`); continue; }
        for (const im of imgs) {
          if (got.length >= 3) break;
          try { await add(im.url, src, im.credit); } catch (e) { console.log(`  [${slug}] dl fail ${im.url} :: ${e.message}`); }
        }
      } else if (src.mode === 'inline') {
        const html = await fetchHtml(src.page);
        const found = inlineImage(html, src.page);
        if (!found) { console.log(`  [${slug}] no inline image on ${src.page}`); continue; }
        await add(found.candidates, src, creditFromName(found.candidates[0]));
      } else {
        const html = await fetchHtml(src.page);
        let imgUrl = ogImage(html, src.page);
        // Reject generic theme/social defaults (e.g. WordPress screenshot.png).
        if (imgUrl && /screenshot\.png|placeholder|default-?og/i.test(imgUrl)) imgUrl = null;
        let candidates = imgUrl ? [imgUrl] : null;
        let credit = null;
        if (!candidates) {
          const found = inlineImage(html, src.page);
          if (found) { candidates = found.candidates; credit = creditFromName(found.candidates[0]); }
        }
        if (!candidates) { console.log(`  [${slug}] no image on ${src.page}`); continue; }
        await add(candidates, src, credit);
      }
    } catch (err) {
      console.log(`  [${slug}] FAIL ${src.page ?? src.img} :: ${err.message}`);
    }
  }
  report[slug] = got;
}

await writeFile(path.join(ROOT, 'scripts/_image-fetch-report.json'), JSON.stringify(report, null, 2));
const total = Object.values(report).reduce((s, a) => s + a.length, 0);
const firms = Object.values(report).filter((a) => a.length).length;
console.log(`\nDone: ${total} images across ${firms} firms.`);
for (const [slug, a] of Object.entries(report)) if (a.length < 2) console.log(`  LOW: ${slug} got ${a.length}`);
