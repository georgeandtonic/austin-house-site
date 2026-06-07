import { Marked } from 'marked';

/** Slug that matches the heading ids the renderer emits. */
export function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function tokenText(tokens: any[]): string {
  return tokens
    .map((t) => (t.tokens ? tokenText(t.tokens) : (t.text ?? '')))
    .join('');
}

function build(): Marked {
  const m = new Marked({ gfm: true, breaks: false });
  m.use({
    renderer: {
      heading(this: any, token: any) {
        const inner = this.parser.parseInline(token.tokens);
        const id = slugify(tokenText(token.tokens));
        return `<h${token.depth} id="${id}">${inner}</h${token.depth}>\n`;
      },
      image(this: any, token: any) {
        const title = token.title ? ` title="${token.title}"` : '';
        return `<img src="${token.href}" alt="${token.text ?? ''}"${title} loading="lazy" decoding="async" />`;
      },
    },
  });
  return m;
}

const marked = build();

export function renderMarkdown(src: string): string {
  return marked.parse(src) as string;
}

export interface Heading {
  depth: number;
  text: string;
  slug: string;
}

const HEADING_RE = /^(#{1,6})\s+(.*?)\s*#*$/;

/** Clean inline markdown out of a heading line for display + slugging. */
function cleanHeading(raw: string): string {
  return raw
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/`/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .trim();
}

/** Extract a flat list of headings (default H2+H3) for tables of contents. */
export function extractHeadings(src: string, depths: number[] = [2, 3]): Heading[] {
  const out: Heading[] = [];
  let inFence = false;
  for (const line of src.split('\n')) {
    if (/^```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = HEADING_RE.exec(line);
    if (!m) continue;
    const depth = m[1].length;
    if (!depths.includes(depth)) continue;
    const text = cleanHeading(m[2]);
    out.push({ depth, text, slug: slugify(text) });
  }
  return out;
}

/**
 * Return the markdown under a given heading (matched by slug), including any
 * nested deeper headings, stopping at the next heading of equal-or-higher level.
 * The heading line itself is omitted.
 */
export function extractBlock(src: string, slug: string): string {
  const lines = src.split('\n');
  let collecting = false;
  let depth = 0;
  let inFence = false;
  const out: string[] = [];
  for (const line of lines) {
    if (/^```/.test(line)) inFence = !inFence;
    const m = !inFence && HEADING_RE.exec(line);
    if (m) {
      const d = m[1].length;
      const s = slugify(cleanHeading(m[2]));
      if (collecting && d <= depth) break;
      if (!collecting && s === slug) {
        collecting = true;
        depth = d;
        continue;
      }
    }
    if (collecting) out.push(line);
  }
  return out.join('\n').trim();
}

/** Drop the first H1 (the document title) so layouts can supply their own hero. */
export function stripFirstH1(src: string): string {
  const lines = src.split('\n');
  const idx = lines.findIndex((l) => /^#\s+/.test(l));
  if (idx === -1) return src;
  return [...lines.slice(0, idx), ...lines.slice(idx + 1)].join('\n');
}

/** Drop a leading YAML frontmatter block if present. */
export function stripFrontmatter(src: string): string {
  if (!src.startsWith('---')) return src;
  const end = src.indexOf('\n---', 3);
  if (end === -1) return src;
  return src.slice(end + 4).replace(/^\s*\n/, '');
}
