import type { Metadata } from 'next';
import { getAllPostMeta } from '@/lib/blog';
import { createPageMetadata } from '@/lib/seo';
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogCTA from '@/components/blog/BlogCTA';
import { BreadcrumbListSchema } from '@/components/JsonLd';

export const metadata: Metadata = createPageMetadata({
  title: 'Blog — Guide e Consigli per Anziani e Famiglie | Residence V.G',
  description:
    'Il blog di Residence V.G: guide pratiche per scegliere una residenza, affrontare le scelte con i genitori anziani e scoprire la vita quotidiana a Cabiate, in provincia di Como.',
  path: '/blog',
  keywords: [
    'blog anziani Cabiate',
    'guide residenza anziani Como',
    'consigli famiglia terza età',
    'casa famiglia Brianza',
  ],
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
            title="Vuoi conoscere Residence V.G?"
            description="Siamo a Via Francesco Petrarca 14, Cabiate (CO). Prenota una visita gratuita: ti mostriamo gli spazi e rispondiamo a ogni domanda, senza impegno."
            variant="whatsapp"
          />
        </div>
      </div>
    </div>
  );
}
