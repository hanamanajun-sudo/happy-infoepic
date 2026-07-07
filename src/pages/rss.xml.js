import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  const sorted = posts
    .filter(p => p.data.description && p.data.description.length > 5)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: '해피로그',
    description: '오늘의 해피를 기록하다 — 라이프스타일, 문화연예, 꿀팁, 맛집까지 큐레이션하는 해피로그',
    site: context.site,
    items: sorted.slice(0, 50).map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.date),
      link: `/entry/${post.data.slug}/`,
      categories: post.data.tags || [],
    })),
    stylesheet: '/rss-style.xsl',
    customData: `<language>ko-kr</language>`,
  });
}
