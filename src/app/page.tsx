import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import HeroIntro from '@/components/sections/HeroIntro';
import StorySection from '@/components/sections/StorySection';
import { NursingHomeSchema, OrganizationSchema, FAQPageSchema } from '@/components/JsonLd';
import { faqs, pageMeta } from '@/data/content';
import { createPageMetadata } from '@/lib/seo';

const ManifestoSection = dynamic(() => import('@/components/sections/ManifestoSection'));
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'));
const SpacesSection = dynamic(() => import('@/components/sections/SpacesSection'));
const DailyRoutine = dynamic(() => import('@/components/sections/DailyRoutine'));
const ParallaxQuote = dynamic(() => import('@/components/sections/ParallaxQuote'));
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'));
const GalleryPreview = dynamic(() => import('@/components/sections/GalleryPreview'));
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'));
const VisitSection = dynamic(() => import('@/components/sections/VisitSection'));

export const metadata: Metadata = createPageMetadata({
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  path: '/',
  keywords: [...pageMeta.home.keywords],
});

export default function HomePage() {
  return (
    <>
      <NursingHomeSchema />
      <OrganizationSchema />
      <FAQPageSchema items={faqs} />
      <Hero />
      <HeroIntro />
      <StorySection />
      <ManifestoSection />
      <ServicesSection />
      <SpacesSection />
      <DailyRoutine />
      <ParallaxQuote />
      <TestimonialsSection />
      <GalleryPreview />
      <FAQSection />
      <VisitSection />
    </>
  );
}
