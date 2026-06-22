import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  extractHeadings,
  getAllPostMeta,
  getCategoryName,
  getPostBySlug,
  getRelatedPosts,
} from '@/lib/blog';
import { createArticleMetadata } from '@/lib/seo';
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb';
import BlogLayout from '@/components/blog/BlogLayout';
import AuthorBox from '@/components/blog/AuthorBox';
import RelatedArticles from '@/components/blog/RelatedArticles';
import TableOfContents from '@/components/blog/TableOfContents';
import { ArticleSchema, BreadcrumbListSchema } from '@/components/JsonLd';

export const dynamic = 'force-static';
export const dynamicParams = false;

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPostMeta().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return createArticleMetadata({
    title: `${post.title} | Residence V.G`,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    ogImage: post.image,
    publishedTime: post.date,
    modifiedTime: post.lastModified,
  });
}

export default function BlogArticlePage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);
  const headings = extractHeadings(post.content);
  const categoryName = getCategoryName(post.category);

  return (
    <article className="min-h-screen bg-linen-100 pb-24 pt-24">
      <ArticleSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        datePublished={post.date}
        dateModified={post.lastModified}
        author={post.author}
        image={post.image}
      />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <div className="container-site">
        <BlogBreadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        <header className="mb-10 max-w-[700px]">
          <p className="font-sans text-sm font-semibold uppercase tracking-wider text-gold-700">{categoryName}</p>
          <h1 className="mt-3 heading-display text-display-sm md:text-display-md">{post.title}</h1>
          <div className="gold-divider mt-6" />
          <p className="mt-5 font-sans text-lg leading-relaxed text-ink-light">{post.description}</p>
        </header>

        <div className="relative mb-10 max-w-[700px] aspect-[16/9] overflow-hidden rounded-2xl shadow-warm-md">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>

        <BlogLayout
          sidebar={
            <>
              <TableOfContents headings={headings} />
              <AuthorBox
                author={post.author}
                date={post.date}
                lastModified={post.lastModified}
                readingTime={post.readingTime}
              />
              <RelatedArticles posts={related} />
            </>
          }
        >
          <div
            className="max-w-[700px] space-y-5"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </BlogLayout>

        <div className="mt-14 max-w-[700px]">
          <p className="font-sans text-sm text-ink-muted">
            <Link href="/blog" className="text-forest underline underline-offset-2 hover:text-gold-700">
              ← Torna al blog
            </Link>
            {' · '}
            <Link href="/" className="text-forest underline underline-offset-2 hover:text-gold-700">
              Torna alla home
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
