// Top-level category registry: Korean label <-> URL-safe English slug <-> sticker color.
// URL uses the English slug (not encodeURIComponent(한글)) to avoid "&" / space
// encoding edge cases in "문화&연예 트렌드", "꿀팁&정보 백과사전" etc.

export interface CategoryDef {
  label: string;
  slug: string;
  color: string; // CSS var name, e.g. 'cat-culture'
}

export const CATEGORIES: CategoryDef[] = [
  { label: '문화&연예 트렌드', slug: 'culture', color: 'cat-culture' },
  { label: '재난 백과', slug: 'safety', color: 'cat-disaster' },
  { label: '라이프 트렌드', slug: 'life', color: 'cat-life' },
  { label: '꿀팁&정보 백과사전', slug: 'tips', color: 'cat-tips' },
  { label: '여행&맛집 트렌드', slug: 'travel', color: 'cat-travel' },
  { label: '반려동물 백과', slug: 'pet', color: 'cat-pet' },
];

const ETC: CategoryDef = { label: '미분류', slug: 'etc', color: 'cat-etc' };

const BY_LABEL = new Map(CATEGORIES.map(c => [c.label, c]));
const BY_SLUG = new Map(CATEGORIES.map(c => [c.slug, c]));

export function topCategory(category?: string): string {
  return category?.split('/')[0]?.trim() || '';
}

export function categoryDef(topLabel: string): CategoryDef {
  return BY_LABEL.get(topLabel) ?? ETC;
}

export function categoryBySlug(slug: string): CategoryDef | undefined {
  if (slug === ETC.slug) return ETC;
  return BY_SLUG.get(slug);
}

export function categoryHref(category?: string): string {
  const top = topCategory(category);
  return `/category/${categoryDef(top).slug}`;
}

export const ALL_CATEGORIES = [...CATEGORIES, ETC];
