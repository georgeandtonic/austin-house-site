// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// BASE_PATH is set by the GitHub Pages workflow (e.g. "/austin-house-site").
// On Vercel (and locally) it defaults to "/". All internal links use
// import.meta.env.BASE_URL so both deploy targets work unchanged.
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://austin-house-site.vercel.app';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
