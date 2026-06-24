import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { pageMeta, pageHeroImages } from '@/data/content';
import { BreadcrumbListSchema } from '@/components/JsonLd';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import ContattiClient from './ContattiClient';

export const metadata: Metadata = createPageMetadata({
  title: pageMeta.contatti.title,
  description: pageMeta.contatti.description,
  path: '/contatti',
  keywords: [...pageMeta.contatti.keywords],
  ogImage: pageHeroImages.doveSiamo,
});

export default function ContattiPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contatti', path: '/contatti' },
        ]}
      />
      <div className="bg-linen-100 pt-24">
        <div className="container-site pb-2">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Contatti' },
            ]}
          />
        </div>
      </div>
      <ContattiClient />
    </>
  );
}
