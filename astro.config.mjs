// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: update if the final production domain differs.
  site: 'https://hamarpistolklubb.no',
  integrations: [sitemap()],
});
