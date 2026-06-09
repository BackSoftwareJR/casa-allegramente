import PageMeta from '@/components/PageMeta';
import { PageHero } from '@/components/sections/PageHero';
import { StorySection } from '@/components/sections/StorySection';
import { ValuesSection } from '@/components/sections/ValuesSection';
import { SpacesSection } from '@/components/sections/SpacesSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { CTAStrip } from '@/components/sections/CTAStrip';
import { chiSiamoContent, pageHeroImages, pageMeta, siteConfig } from '@/data/content';
import { telHref, hasPhone } from '@/lib/utils';
export function ChiSiamoPage() {
  const meta = pageMeta.chiSiamo;

  return (
    <>
      <PageMeta title={meta.title} description={meta.description} path="/chi-siamo" />
      <PageHero
        eyebrow="Chi siamo"
        title={meta.h1}
        subtitle={meta.subtitle}
        backgroundImage={pageHeroImages.chiSiamo}
        ctaLabel={hasPhone(siteConfig.contact.phoneRaw) ? `Venite a conoscerci — ${siteConfig.contact.phone}` : 'Come raggiungerci'}
        ctaHref={hasPhone(siteConfig.contact.phoneRaw) ? telHref(siteConfig.contact.phoneRaw) : '/dove-siamo'}
        ctaExternal={hasPhone(siteConfig.contact.phoneRaw)}
      />
      <StorySection />
      <ValuesSection />
      <SpacesSection />
      <TeamSection />
      <GalleryPreview />
      <CTAStrip title={chiSiamoContent.cta.title} text={chiSiamoContent.cta.text} />
    </>
  );
}
