import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import ManifestoSection from '@/components/sections/ManifestoSection';
import StorySection from '@/components/sections/StorySection';
import ServicesSection from '@/components/sections/ServicesSection';
import SpacesSection from '@/components/sections/SpacesSection';
import DailyRoutine from '@/components/sections/DailyRoutine';
import ParallaxQuote from '@/components/sections/ParallaxQuote';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import GalleryPreview from '@/components/sections/GalleryPreview';
import FAQSection from '@/components/sections/FAQSection';
import VisitSection from '@/components/sections/VisitSection';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/data/content';

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <StatsBar />
      <ManifestoSection />
      <StorySection />
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
