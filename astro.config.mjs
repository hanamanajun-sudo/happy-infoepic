import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
  site: 'https://happy.infoepic.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // 숫자ID 전용 리다이렉트 스텁(/127/ 등, [id].astro)은 실콘텐츠 없이
      // /entry/{slug}/로 meta-refresh만 하므로 사이트맵에서 제외
      filter: (page) => !/^https:\/\/happy\.infoepic\.com\/\d+\/$/.test(page),
    }),
  ],
  output: 'static',
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
});
