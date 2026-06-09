import PageMeta from '@/components/PageMeta';
import { PageHero } from '@/components/sections/PageHero';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ExtraServicesSection } from '@/components/sections/ExtraServicesSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { AccessRequirementsSection } from '@/components/sections/AccessRequirementsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTAStrip } from '@/components/sections/CTAStrip';
import { pageHeroImages, pageMeta, serviziContent, siteConfig } from '@/data/content';
import { telHref, hasPhone } from '@/lib/utils';
export function ServiziPage() {
  const meta = pageMeta.servizi;

  return (
    <>
      <PageMeta title={meta.title} description={meta.description} path="/servizi" />
      <PageHero
        eyebrow="Carta dei servizi"
        title={meta.h1}
        subtitle={meta.subtitle}
        backgroundImage={pageHeroImages.servizi}
        ctaLabel={hasPhone(siteConfig.contact.phoneRaw) ? `Chiedi informazioni — ${siteConfig.contact.phone}` : 'Come raggiungerci'}
        ctaHref={hasPhone(siteConfig.contact.phoneRaw) ? telHref(siteConfig.contact.phoneRaw) : '/dove-siamo'}
        ctaExternal={hasPhone(siteConfig.contact.phoneRaw)}
      />
      <ServicesSection />
      <ExtraServicesSection />
      <PricingSection />
      <AccessRequirementsSection />
      <FAQSection page="servizi" title="FAQ sui servizi" showPhoneCta={false} tone="dark" />
      <CTAStrip title={serviziContent.cta.title} text={serviziContent.cta.text} />
    </>
  );
}
