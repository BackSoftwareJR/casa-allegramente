export const BLOG_CATEGORIES = [
  { id: 'all', name: 'Tutte' },
  { id: 'scegliere-struttura', name: 'Scegliere la struttura' },
  { id: 'vita-quotidiana', name: 'Vita quotidiana' },
  { id: 'per-famiglie', name: 'Per le famiglie' },
  { id: 'salute-benessere', name: 'Salute & Benessere' },
  { id: 'guide-pratiche', name: 'Guide pratiche' },
] as const;

export type BlogCategoryId = (typeof BLOG_CATEGORIES)[number]['id'];

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
  date: string;
  lastModified: string;
  author: string;
  image: string;
  imageAlt: string;
  readingTime: string;
  featured: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export function getCategoryName(id: string): string {
  return BLOG_CATEGORIES.find((c) => c.id === id)?.name ?? id;
}

export function extractHeadings(content: string): { id: string; text: string }[] {
  const headings: { id: string; text: string }[] = [];
  const regex = /^## (.+)$/gm;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(content)) !== null) {
    const text = match[1].trim();
    const id = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    headings.push({ id, text });
  }

  return headings;
}
