import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';
import ValuesSection from '@/components/sections/ValuesSection';
import SeasonsSection from '@/components/sections/SeasonsSection';
import ChiSiamoHero from '@/components/sections/ChiSiamoHero';
import FilosofiaSection from '@/components/sections/FilosofiaSection';
import ChiSiamoNarrativeSection from '@/components/sections/ChiSiamoNarrativeSection';
import StorySection from '@/components/sections/StorySection';
import { BreadcrumbListSchema } from '@/components/JsonLd';
import { chiSiamoContent, pageMeta, visitCta, siteConfig } from '@/data/content';
import { FlowButton } from '@/components/ui/flow-button';

export const metadata: Metadata = createPageMetadata({
  title: pageMeta.chiSiamo.title,
  description: pageMeta.chiSiamo.description,
  path: '/chi-siamo',
  keywords: [...pageMeta.chiSiamo.keywords],
});

export default function ChiSiamoPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Chi siamo', path: '/chi-siamo' },
        ]}
      />
      <h1 className="sr-only">{pageMeta.chiSiamo.title}</h1>

      {/* 1 — Hero intro */}
      <ChiSiamoHero />

      {/* 2 — Filosofia: titolo + immagine + parallax scroll */}
      <FilosofiaSection />

      {/* 3 — Perché siamo diversi (editorial band) */}
      <ChiSiamoNarrativeSection
        index={0}
        eyebrow="Perché siamo diversi"
        title="Una casa famiglia pensata per gli over 65"
        description={
          <div className="space-y-4">
            <p>{chiSiamoContent.whyName.paragraphs[0]}</p>
            <p>{chiSiamoContent.whyName.paragraphs[1]}</p>
          </div>
        }
        cta={
          <FlowButton as="a" href={`tel:${siteConfig.contact.phoneRaw}`}>
            {siteConfig.contact.phone}
          </FlowButton>
        }
        image1={{ src: '/images/salotto-tv-poltrona-casa-famiglia-anziani.avif', alt: 'Salotto accogliente AllegraMente' }}
        image2={{ src: '/images/porticato-tavola-apparecchiata-giardino-allegramente.avif', alt: 'Tavola apparecchiata sotto il porticato' }}
      />

      {/* 4 — La villa (panorama card) */}
      <ChiSiamoNarrativeSection
        index={1}
        eyebrow="Dove abitiamo"
        title={chiSiamoContent.story.title}
        description={
          <div className="space-y-4">
            {chiSiamoContent.story.paragraphs.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        }
        cta={
          <FlowButton as={Link} href="/dove-siamo">
            Come raggiungerci
          </FlowButton>
        }
        image1={{ src: '/images/villa-esterno-giardino-hero-allegramente.avif', alt: 'Villa AllegraMente — facciata e giardino' }}
      />

      {/* 5 — StorySection (differenziatori) */}
      <StorySection />

      {/* 6 — Valori */}
      <ValuesSection />

      {/* 7 — Stagioni */}
      <SeasonsSection />

      {/* 8 — CTA finale */}
      <section className="section-spacing bg-transparent">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-3xl border border-linen-200/80 bg-white px-8 py-14 text-center shadow-warm-md md:px-12 md:py-20">
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              aria-hidden="true"
              style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 110%, rgba(232,149,106,0.12) 0%, transparent 60%)' }}
            />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary/60">
              AllegraMente · Rivarolo Canavese
            </p>
            <h2
              className="relative mt-4 font-display font-bold text-warm-brown"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
            >
              {chiSiamoContent.cta.title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
              {chiSiamoContent.cta.text}
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <FlowButton as={Link} href="/#contatti">
                {visitCta.label}
              </FlowButton>
              <FlowButton as="a" href={`tel:${siteConfig.contact.phoneRaw}`}>
                {siteConfig.contact.phone}
              </FlowButton>
            </div>

            <div className="pointer-events-none mt-10 flex justify-center opacity-10">
              <Image src="/images/logo-allegramente.png" alt="" width={80} height={80} aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
