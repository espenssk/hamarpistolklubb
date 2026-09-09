// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployment target is swappable via env vars at build time, so the same
// codebase works both on the custom domain (served from the root) and on
// the GitHub Pages project URL (served from a /hps-homepage sub-path),
// without touching any code. All internal links/assets in the site use
// `import.meta.env.BASE_URL` rather than hardcoded "/..." paths, so they
// pick up whichever `base` is set here.
//
// Default (no env vars set): production custom domain, served from "/".
// To build for the GitHub Pages project URL instead, run:
//   SITE_URL=https://espenssk.github.io BASE_PATH=/hps-homepage/ npm run build
const site = process.env.SITE_URL ?? 'https://hamarpistolklubb.no';
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
});
