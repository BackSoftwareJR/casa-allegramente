import Image from 'next/image';
import Link from 'next/link';
import { getCategoryName, type BlogPostMeta } from '@/lib/blog-types';

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-warm-sm transition-shadow hover:shadow-warm-md">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-700">
          {getCategoryName(post.category)}
        </p>
        <h2 className="mt-2 font-display text-xl font-semibold text-forest">
          <Link href={`/blog/${post.slug}`} className="hover:text-forest-700">
            {post.title}
          </Link>
        </h2>
        <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-ink-light">{post.description}</p>
        <div className="mt-4 flex items-center justify-between font-sans text-xs text-ink-muted">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('it-IT', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <span>{post.readingTime} di lettura</span>
        </div>
      </div>
    </article>
  );
}
