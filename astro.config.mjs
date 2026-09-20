import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://mayanorigin.com',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()],
  trailingSlash: 'always',
});
