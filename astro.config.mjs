import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://jordyaaldering.github.io/',
  integrations: [mdx()],
	i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
	},
});
