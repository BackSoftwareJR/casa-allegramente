import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import DailyRoutine from '@/components/sections/DailyRoutine';
import SeasonsSection from '@/components/sections/SeasonsSection';
import { BreadcrumbListSchema } from '@/components/JsonLd';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import { pageMeta, vitaInCasaContent, weeklyActivities, visitCta } from '@/data/content';
import { brandAccentCycle, brandPastelCycle } from '@/lib/brand-colors';

export const metadata: Metadata = createPageMetadata({
  title: pageMeta.vitaInCasa.title,
  description: pageMeta.vitaInCasa.description,
  path: '/la-vita-in-casa',
  keywords: [...pageMeta.vitaInCasa.keywords],
});

export default function VitaInCasaPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'La vita in casa', path: '/la-vita-in-casa' },
        ]}
      />
      <div className="bg-transparent pt-24">
        <div className="container-site pb-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'La vita in casa' }]} />
          <h1 className="sr-only">{pageMeta.vitaInCasa.title}</h1>
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-ink-light">{vitaInCasaContent.intro.text}</p>
        </div>
      </div>

      <DailyRoutine />

      {/* Attività settimanali */}
      <section className="section-spacing bg-transparent" aria-label="Attività settimanali">
        <div className="container-site">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary-700">
            Ogni settimana
          </p>
          <h2
            className="mt-3 font-display font-bold text-warm-brown"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Attività e momenti condivisi
          </h2>
          <div className="gold-line mt-5" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {weeklyActivities.map((a, i) => {
              const color = brandAccentCycle[i % brandAccentCycle.length];
              const pastel = brandPastelCycle[i % brandPastelCycle.length];
              return (
                <article
                  key={a.id}
                  className="relative overflow-hidden rounded-3xl border border-white/70 p-6 shadow-warm-sm backdrop-blur-sm transition-all hover:shadow-warm-md hover:-translate-y-0.5"
                  style={{ backgroundColor: `${pastel}CC` }}
                >
                  <div
                    className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-10"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  <div
                    className="mb-4 h-1 w-8 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <h3
                    className="font-display font-bold text-warm-brown"
                    style={{ fontSize: '1.15rem', letterSpacing: '-0.01em' }}
                  >
                    {a.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-ink-light">{a.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Convivialità */}
      <section className="section-spacing bg-transparent" aria-label="Convivialità">
        <div className="container-site max-w-3xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary-700">
            A tavola insieme
          </p>
          <h2
            className="mt-3 font-display font-bold text-warm-brown"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
          >
            {vitaInCasaContent.conviviality.title}
          </h2>
          <div className="gold-line mt-5" />
          <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink-light">
            {vitaInCasaContent.conviviality.paragraphs.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <SeasonsSection />

      {/* CTA */}
      <section className="section-spacing bg-transparent">
        <div className="container-site">
          <div className="rounded-3xl border border-linen-200/80 bg-white px-8 py-14 text-center shadow-warm-md md:px-12 md:py-16">
            <h2
              className="font-display font-bold text-warm-brown"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
            >
              {vitaInCasaContent.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-sans text-base text-ink-muted">{vitaInCasaContent.cta.text}</p>
            <a href="/#contatti" className="btn-primary mt-8 inline-flex">{visitCta.label}</a>
          </div>
        </div>
      </section>
    </>
  );
}
