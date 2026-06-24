import type { Metadata } from 'next';
import { getAllPostMeta } from '@/lib/blog';
import { createPageMetadata } from '@/lib/seo';
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogCTA from '@/components/blog/BlogCTA';
import { BreadcrumbListSchema } from '@/components/JsonLd';

export const metadata: Metadata = createPageMetadata({
  title: 'Blog — Guide e Consigli per Anziani e Famiglie | Casa Allegramente',
  description:
    'Il blog di Casa Allegramente: guide pratiche per scegliere una casa famiglia, affrontare le scelte con i genitori anziani e scoprire la vita quotidiana a Rivarolo Canavese.',
  path: '/blog',
  keywords: [
    'blog anziani Rivarolo Canavese',
    'guide casa famiglia anziani Canavese',
    'consigli famiglia terza età',
    'residenza anziani Piemonte',
  ],
  noIndex: true,
});

export default function BlogIndexPage() {
  const posts = getAllPostMeta();

  return (
    <div className="min-h-screen bg-linen-100 pb-24 pt-24">
      <BreadcrumbListSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]}
      />
      <div className="container-site">
        <BlogBreadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog' },
          ]}
        />

        <BlogHero />
        <BlogGrid posts={posts} />

        <div className="mt-16">
          <BlogCTA
            title="Vuoi conoscere Casa Allegramente?"
            description="Siamo in Via Gria 12, Rivarolo Canavese (TO). Prenota una visita gratuita: ti mostriamo gli spazi e rispondiamo a ogni domanda, senza impegno."
            variant="whatsapp"
          />
        </div>
      </div>
    </div>
  );
}
