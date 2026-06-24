import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import GalleriaClient from './GalleriaClient';
import { pageMeta } from '@/data/content';
import { BreadcrumbListSchema } from '@/components/JsonLd';

export const metadata: Metadata = createPageMetadata({
  title: pageMeta.galleria.title,
  description: pageMeta.galleria.description,
  path: '/galleria',
  keywords: [...pageMeta.galleria.keywords],
});

export default function GalleriaPage() {
  return (
    <>
      <BreadcrumbListSchema items={[{ name: 'Home', path: '/' }, { name: 'Galleria', path: '/galleria' }]} />
      <h1 className="sr-only">{pageMeta.galleria.title}</h1>
      <GalleriaClient />
    </>
  );
}
