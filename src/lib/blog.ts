import 'server-only';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogPost, BlogPostMeta } from './blog-types';

export type { BlogPost, BlogPostMeta, BlogCategoryId } from './blog-types';
export { BLOG_CATEGORIES, getCategoryName, extractHeadings } from './blog-types';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

function parsePost(filename: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8');
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug: data.slug as string,
    title: data.title as string,
    description: data.description as string,
    keywords: (data.keywords as string[]) ?? [],
    category: data.category as string,
    date: data.date as string,
    lastModified: (data.lastModified as string) ?? (data.date as string),
    author: data.author as string,
    image: data.image as string,
    imageAlt: data.imageAlt as string,
    readingTime: data.readingTime ?? `${Math.ceil(stats.minutes)} min`,
    featured: Boolean(data.featured),
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map(parsePost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllPostMeta(): BlogPostMeta[] {
  return getAllPosts().map(({ content: _content, ...meta }) => meta);
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
