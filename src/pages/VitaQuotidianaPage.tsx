import { Link } from 'react-router-dom';
import PageMeta from '@/components/PageMeta';
import { PageHero } from '@/components/sections/PageHero';
import { DailyRoutine } from '@/components/sections/DailyRoutine';
import { WeeklyActivitiesSection } from '@/components/sections/WeeklyActivitiesSection';
import { ConvivialitySection, SeasonsSection } from '@/components/sections/ConvivialitySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTAStrip } from '@/components/sections/CTAStrip';
import { pageHeroImages, pageMeta, siteConfig, vitaInCasaContent } from '@/data/content';
import { telHref, hasPhone } from '@/lib/utils';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function VitaQuotidianaPage() {
  const meta = pageMeta.vitaInCasa;

  return (
    <>
      <PageMeta title={meta.title} description={meta.description} path="/la-vita-in-casa" />
      <PageHero
        eyebrow="La vita quotidiana"
        title={meta.h1}
        subtitle={meta.subtitle}
        backgroundImage={pageHeroImages.vitaInCasa}
        ctaLabel={hasPhone(siteConfig.contact.phoneRaw) ? `Venite a viverlo di persona — ${siteConfig.contact.phone}` : 'Come raggiungerci'}
        ctaHref={hasPhone(siteConfig.contact.phoneRaw) ? telHref(siteConfig.contact.phoneRaw) : '/dove-siamo'}
        ctaExternal={hasPhone(siteConfig.contact.phoneRaw)}
      />
      <section className="section-bg-cream relative section-spacing overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{ backgroundImage: `url(${vitaInCasaContent.intro.image})` }}
          aria-hidden
        />
        <div className="container-site relative z-10 max-w-prose">
          <SectionHeading title={vitaInCasaContent.intro.title} align="center" />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-lg leading-relaxed text-charcoal"
          >
            {vitaInCasaContent.intro.text}
          </motion.p>
        </div>
      </section>
      <DailyRoutine />
      <WeeklyActivitiesSection />
      <ConvivialitySection />
      <SeasonsSection />
      <TestimonialsSection
        context="daily"
        title="La vita quotidiana, raccontata da chi ci conosce"
        subtitle="Parole calde di familiari che hanno scoperto la nostra routine accogliente"
      />
      <CTAStrip
        title={vitaInCasaContent.cta.title}
        text={vitaInCasaContent.cta.text}
      />
      <div className="pb-8 text-center">
        <Link to="/dove-siamo" className="font-sans font-semibold text-terracotta hover:underline">
          Come raggiungerci →
        </Link>
      </div>
    </>
  );
}
