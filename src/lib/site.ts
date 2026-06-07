export const site = {
  title: 'The Austin House',
  tagline: 'A mid-century-modern home in the Austin metro',
  owners: 'George & Taylor',
  budget: '$1–2M all-in',
  timeline: '12–24 month move-in',
  updated: 'June 7, 2026',
  description:
    'A working monograph for George & Taylor — mid-century-modern architecture in Texas, an Austin architect shortlist, and a live Hill Country land search.',
};

export const nav = [
  { href: 'mcm', label: 'MCM in Texas' },
  { href: 'architects', label: 'Architects' },
  { href: 'land', label: 'Land' },
  { href: 'feed', label: 'New Plots' },
];

/** Build an internal href that respects the deploy base path. */
export function link(path = ''): string {
  const base = import.meta.env.BASE_URL; // '/' or '/austin-house-site/'
  return (base + path).replace(/([^:]\/)\/+/g, '$1');
}
