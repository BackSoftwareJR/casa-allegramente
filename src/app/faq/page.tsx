import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import FAQSection from '@/components/sections/FAQSection';
import { FAQPageSchema, BreadcrumbListSchema } from '@/components/JsonLd';
import { faqs, pageMeta } from '@/data/content';
import Breadcrumbs from '@/components/blog/Breadcrumbs';

export const metadata: Metadata = createPageMetadata({
  title: pageMeta.faq.title,
  description: pageMeta.faq.description,
  path: '/faq',
  keywords: [...pageMeta.faq.keywords],
});

export default function FaqPage() {
  return (
    <>
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' },
        ]}
      />
      <div className="bg-linen-100 pt-24">
        <div className="container-site pb-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'FAQ' },
            ]}
          />
          <h1 className="sr-only">{pageMeta.faq.title}</h1>
        </div>
      </div>
      <FAQSection />
    </>
  );
}
