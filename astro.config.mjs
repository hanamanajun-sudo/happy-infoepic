import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
  site: 'https://happy.infoepic.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  output: 'static',
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
});
