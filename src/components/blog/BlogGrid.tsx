'use client';

import { useState } from 'react';
import { BLOG_CATEGORIES, type BlogPostMeta } from '@/lib/blog-types';
import BlogCard from './BlogCard';

interface BlogGridProps {
  posts: BlogPostMeta[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all' ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filtra per categoria">
        {BLOG_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-forest text-white shadow-warm-sm'
                  : 'border border-linen-300 bg-white text-ink-light hover:border-gold/40 hover:text-forest'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="font-sans text-ink-muted">Nessun articolo in questa categoria.</p>
      ) : (
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <li key={post.slug}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
