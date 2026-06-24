import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import ServicesSection from '@/components/sections/ServicesSection';
import ServiziHero from '@/components/sections/ServiziHero';
import { BreadcrumbListSchema } from '@/components/JsonLd';
import { includedItems, extraServices, pageMeta, accessRequirements } from '@/data/content';
import { brandAccentCycle, brandPastelCycle } from '@/lib/brand-colors';

export const metadata: Metadata = createPageMetadata({
  title: pageMeta.servizi.title,
  description: pageMeta.servizi.description,
  path: '/servizi',
  keywords: [...pageMeta.servizi.keywords],
});

export default function ServiziPage() {
  return (
    <>
      <BreadcrumbListSchema items={[{ name: 'Home', path: '/' }, { name: 'Servizi', path: '/servizi' }]} />
      <h1 className="sr-only">{pageMeta.servizi.title}</h1>

      <ServiziHero />

      <ServicesSection />

      {/* Tutto incluso nella retta */}
      <section className="section-spacing bg-transparent" aria-label="Servizi inclusi nella retta">
        <div className="container-site">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary-700">
            Zero sorprese
          </p>
          <h2
            className="mt-3 font-display font-bold text-warm-brown"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Tutto incluso nella retta
          </h2>
          <div className="gold-line mt-5" />
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item, i) => {
              const color = brandAccentCycle[i % brandAccentCycle.length];
              const pastel = brandPastelCycle[i % brandPastelCycle.length];
              return (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/70 p-4 shadow-warm-sm backdrop-blur-sm"
                  style={{ backgroundColor: `${pastel}CC` }}
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold"
                    style={{ backgroundColor: color }}
                  >
                    ✓
                  </span>
                  <span className="font-sans text-sm leading-relaxed text-ink-light">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Servizi extra */}
      <section className="section-spacing bg-transparent" aria-label="Servizi extra">
        <div className="container-site">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary-700">
            Su richiesta
          </p>
          <h2
            className="mt-3 font-display font-bold text-warm-brown"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
          >
            Servizi extra
          </h2>
          <div className="gold-line mt-5 mb-8" />
          <ul className="flex flex-wrap gap-3">
            {extraServices.map((s) => (
              <li
                key={s.id}
                className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-sans text-sm font-medium text-warm-brown"
              >
                {s.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Modalità di ingresso */}
      <section className="section-spacing bg-transparent" aria-label="Modalità di ingresso">
        <div className="container-site max-w-3xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary-700">
            Come iniziare
          </p>
          <h2
            className="mt-3 font-display font-bold text-warm-brown"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
          >
            {accessRequirements.title}
          </h2>
          <div className="gold-line mt-5" />
          <p className="mt-6 font-sans text-base leading-relaxed text-ink-light">{accessRequirements.intro}</p>
          <ul className="mt-6 space-y-3">
            {accessRequirements.documents.map((d) => (
              <li key={d} className="flex items-start gap-3 font-sans text-sm text-ink-light">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs">✓</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
