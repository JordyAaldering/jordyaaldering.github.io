// @ts-check
import { defineConfig } from 'astro/config';
// https://docs.astro.build/en/guides/integrations-guide/mdx/
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://jordyaaldering.github.io/',
  integrations: [mdx()],
});
