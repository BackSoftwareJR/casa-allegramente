import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { siteConfig, howToArrive, territoryHighlights, pageMeta, pageHeroImages, visitCta } from '@/data/content';
import { createPageMetadata } from '@/lib/seo';
import { BreadcrumbListSchema } from '@/components/JsonLd';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const LocationMap = dynamic(() => import('@/components/ui/location-map'), {
  loading: () => <div className="h-[420px] rounded-2xl bg-linen-200" aria-hidden="true" />,
});

export const metadata: Metadata = createPageMetadata({
  title: pageMeta.doveSiamo.title,
  description: pageMeta.doveSiamo.description,
  path: '/dove-siamo',
  keywords: [...pageMeta.doveSiamo.keywords],
  ogImage: pageHeroImages.doveSiamo,
});

export default function DoveSiamoPage() {
  const { contact } = siteConfig;

  return (
    <div className="min-h-screen bg-linen-100 pb-24 pt-24">
      <BreadcrumbListSchema items={[{ name: 'Home', path: '/' }, { name: 'Dove siamo', path: '/dove-siamo' }]} />
      <div className="container-site">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Dove siamo' }]} />

        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-gold">Vieni a trovarci</p>
          <h1 className="sr-only">{pageMeta.doveSiamo.title}</h1>
          <h2 className="heading-display text-display-sm md:text-display-md">Rivarolo Canavese</h2>
          <div className="gold-divider mt-6" />
          <p className="mx-auto mt-5 max-w-xl font-sans text-base text-ink-light">
            Casa Allegramente è in Via Gria 12 — a circa 30 km da Torino, nel cuore del Canavese piemontese, ai piedi del Gran Paradiso.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <LocationMap variant="full" />

          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-6 shadow-warm-sm">
              <h2 className="mb-4 font-display text-xl font-semibold text-forest">Indirizzo</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                  <div>
                    <p className="font-sans text-sm font-semibold text-ink">{contact.address.street}</p>
                    <p className="font-sans text-sm text-ink-muted">{contact.address.cap} {contact.address.city} ({contact.address.province})</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-gold" />
                  <p className="font-sans text-sm text-ink-light">{contact.hours}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-warm-sm">
              <h2 className="mb-4 font-display text-xl font-semibold text-forest">Come arrivare</h2>
              <div className="space-y-4 font-sans text-sm text-ink-light">
                {howToArrive.map((item) => (
                  <div key={item.id}>
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-linen-200 bg-white p-6 shadow-warm-sm">
              <h2 className="mb-4 font-display text-xl font-semibold text-warm-brown">Contattaci</h2>
              <div className="space-y-3">
                <a href={contact.phoneRaw ? `tel:${contact.phoneRaw}` : '/#contatti'} className="flex items-start gap-3 text-ink-muted transition-colors hover:text-primary">
                  <Phone size={16} className="mt-0.5 text-primary/60" />
                  <span className="font-sans text-sm">
                    {contact.phone}
                    <span className="mt-0.5 block text-xs text-ink-muted/80">{contact.phoneContactNote}</span>
                  </span>
                </a>
                {contact.whatsapp && (
                  <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink-muted transition-colors hover:text-primary">
                    <MessageSquare size={16} className="text-primary/60" />
                    <span className="font-sans text-sm">{contact.whatsappDisplay}</span>
                  </a>
                )}
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-ink-muted transition-colors hover:text-primary">
                  <Mail size={16} className="text-primary/60" />
                  <span className="font-sans text-sm">{contact.email}</span>
                </a>
              </div>
              <a href="/#contatti" className="btn-primary mt-5 flex w-full items-center justify-center">
                {visitCta.label}
              </a>
            </div>
          </div>
        </div>

        <section className="mt-16" aria-label="Il territorio">
          <h2 className="font-display text-2xl font-semibold text-forest md:text-3xl">Rivarolo Canavese e dintorni</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {territoryHighlights.map((t) => (
              <article key={t.id} className="rounded-2xl border border-linen-300 bg-white p-6 shadow-warm-sm">
                <h3 className="font-display text-lg font-semibold text-forest">{t.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink-light">{t.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 overflow-hidden rounded-2xl">
          <Image
            src={pageHeroImages.doveSiamo}
            alt="Casa Allegramente — villa su piano unico a Rivarolo Canavese"
            width={1200}
            height={400}
            sizes="(max-width: 768px) 100vw, 1200px"
            loading="lazy"
            className="h-56 w-full object-cover md:h-80"
          />
        </div>
      </div>
    </div>
  );
}
