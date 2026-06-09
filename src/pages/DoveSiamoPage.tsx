import PageMeta from '@/components/PageMeta';
import { PageHero } from '@/components/sections/PageHero';
import {
  AddressBlock,
  MapEmbed,
  HowToArriveSection,
  TerritorySection,
  DoveSiamoContactSection,
} from '@/components/sections/DoveSiamoSections';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTAStrip } from '@/components/sections/CTAStrip';
import { doveSiamoContent, pageHeroImages, pageMeta, siteConfig } from '@/data/content';

export function DoveSiamoPage() {
  const meta = pageMeta.doveSiamo;

  return (
    <>
      <PageMeta title={meta.title} description={meta.description} path="/dove-siamo" />
      <PageHero
        eyebrow="Dove siamo"
        title={meta.h1}
        subtitle={meta.subtitle}
        backgroundImage={pageHeroImages.doveSiamo}
        ctaLabel="Apri in Google Maps"
        ctaHref={siteConfig.contact.maps.google}
        ctaExternal
      />
      <section className="section-bg-cream section-spacing pt-8">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-12">
          <AddressBlock />
          <MapEmbed />
        </div>
      </section>
      <HowToArriveSection />
      <TerritorySection />
      <DoveSiamoContactSection />
      <FAQSection page="dove-siamo" title="Domande su visite e raggiungimento" showPhoneCta={false} />
      <CTAStrip title={doveSiamoContent.cta.title} text={doveSiamoContent.cta.text} />
    </>
  );
}
