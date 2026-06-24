import Link from 'next/link';
import { getCategoryName, type BlogPostMeta } from '@/lib/blog-types';

export default function RelatedArticles({ posts }: { posts: BlogPostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="rounded-2xl border border-linen-300 bg-white p-5 shadow-warm-sm">
      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-700">
        Articoli correlati
      </p>
      <ul className="mt-4 space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-wider text-gold-700/80">
                {getCategoryName(post.category)}
              </p>
              <p className="mt-0.5 font-sans text-base font-semibold text-warm-brown transition-colors group-hover:text-primary">
                {post.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
