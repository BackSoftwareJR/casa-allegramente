import { BLOG_POSTS } from './blog-data.generated';
import type { BlogPost, BlogPostMeta } from './blog-types';

export type { BlogPost, BlogPostMeta, BlogCategoryId } from './blog-types';
export { BLOG_CATEGORIES, getCategoryName, extractHeadings } from './blog-types';

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getAllPostMeta(): BlogPostMeta[] {
  return getAllPosts().map(({ content: _content, html: _html, ...meta }) => meta);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  if (category === 'all') return getAllPostMeta();
  return getAllPostMeta().filter((p) => p.category === category);
}

export function getFeaturedPosts(limit = 3): BlogPostMeta[] {
  return getAllPostMeta()
    .filter((p) => p.featured)
    .slice(0, limit);
}

export function getRelatedPosts(current: BlogPostMeta, limit = 3): BlogPostMeta[] {
  const others = getAllPostMeta().filter((p) => p.slug !== current.slug);
  const sameCategory = others.filter((p) => p.category === current.category);
  const sameKeywords = others.filter(
    (p) =>
      p.category !== current.category &&
      p.keywords.some((k) => current.keywords.includes(k)),
  );
  const rest = others.filter(
    (p) =>
      !sameCategory.some((c) => c.slug === p.slug) &&
      !sameKeywords.some((k) => k.slug === p.slug),
  );
  return [...sameCategory, ...sameKeywords, ...rest].slice(0, limit);
}
