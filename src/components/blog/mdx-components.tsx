import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import BlogCTA from './BlogCTA';
import BlogImage from './BlogImage';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const mdxComponents: MDXComponents = {
  BlogCTA,
  BlogImage,
  h2: ({ children }) => {
    const text = typeof children === 'string' ? children : String(children);
    const id = slugify(text);
    return (
      <h2 id={id} className="scroll-mt-28 mt-10 font-display text-2xl font-semibold text-forest first:mt-0">
        {children}
      </h2>
    );
  },
  h3: ({ children }) => (
    <h3 className="mt-6 font-display text-xl font-semibold text-forest">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="font-sans text-base leading-[1.8] text-ink-light">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-4 list-disc space-y-2 pl-5 font-sans text-base leading-[1.8] text-ink-light">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 list-decimal space-y-2 pl-5 font-sans text-base leading-[1.8] text-ink-light">{children}</ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
  a: ({ href, children }) => {
    const isInternal = href?.startsWith('/');
    if (isInternal && href) {
      return (
        <Link href={href} className="text-forest underline underline-offset-2 hover:text-gold-700">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-forest underline underline-offset-2 hover:text-gold-700"
      >
        {children}
      </a>
    );
  },
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-gold/60 pl-5 font-sans text-lg italic text-ink-light">
      {children}
    </blockquote>
  ),
};
