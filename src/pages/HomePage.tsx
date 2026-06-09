import { Hero } from '@/components/sections/Hero';
import { HeroIntro } from '@/components/sections/HeroIntro';
import { StatsBar } from '@/components/sections/StatsBar';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { DailyRoutinePreview } from '@/components/sections/DailyRoutinePreview';
import { LaCasaSection } from '@/components/sections/LaCasaSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactStrip } from '@/components/sections/ContactStrip';

export function HomePage() {
  return (
    <>
      <Hero />
      <HeroIntro />
      <StatsBar />
      <LaCasaSection />
      <ManifestoSection />
      <ServicesPreview />
      <DailyRoutinePreview />
      <TestimonialsSection />
      <FAQSection />
      <ContactStrip />
    </>
  );
}
