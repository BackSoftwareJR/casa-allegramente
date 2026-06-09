import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Shield,
  Utensils,
  Sparkles,
  HeartHandshake,
  Palette,
  Home,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import { fadeUp, fadeOnly, staggerContainer } from '@/lib/animations';

const iconMap: Record<string, LucideIcon> = {
  'shield-heart': Shield,
  utensils: Utensils,
  sparkles: Sparkles,
  'heart-handshake': HeartHandshake,
  palette: Palette,
  home: Home,
};

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const current = services[active];
  const Icon = iconMap[current.icon] ?? Shield;

  return (
    <section className="section-bg-white section-spacing" aria-labelledby="services-full">
      <div className="container-site">
        <SectionHeading
          eyebrow="I nostri servizi"
          title="Servizi compresi nella retta"
          subtitle="Tutto ciò che è incluso nella carta dei servizi AllegraMente, descritto con chiarezza e trasparenza."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-2"
          >
            {services.map((service, i) => {
              const ServiceIcon = iconMap[service.icon] ?? Shield;
              const isActive = active === i;
              const hasExpandedPeer = active !== i;

              return (
                <motion.div
                  key={service.id}
                  variants={reduced ? fadeOnly : fadeUp}
                  layout
                  className={cn(
                    'transition-[opacity,transform] duration-300',
                    hasExpandedPeer && 'opacity-45 hover:opacity-80',
                    isActive && 'my-5 opacity-100',
                  )}
                >
                  {isActive ? (
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded
                      className="group relative z-10 block w-full overflow-hidden rounded-3xl border border-terracotta/25 bg-linen text-left shadow-warm-lg ring-[3px] ring-terracotta/40 transition-shadow hover:shadow-warm-lg"
                    >
                      <div className="flex flex-col gap-5 p-6 md:p-9">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-terracotta text-white-warm shadow-warm-md">
                              <ServiceIcon size={22} />
                            </div>
                            <div>
                              <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-terracotta">
                                Servizio {String(i + 1).padStart(2, '0')}
                              </p>
                              <h3 className="mt-1 font-display text-2xl font-semibold text-ink md:text-[1.65rem]">
                                {service.title}
                              </h3>
                            </div>
                          </div>
                          <ChevronDown
                            size={22}
                            className="shrink-0 rotate-180 text-warm-gray transition-transform"
                          />
                        </div>

                        <div>
                          <p className="font-sans text-base leading-relaxed text-charcoal md:text-lg">
                            {service.description}
                          </p>
                          <ul className="mt-5 flex flex-wrap gap-2">
                            {service.highlights.map((h) => (
                              <li
                                key={h}
                                className="rounded-full border border-terracotta/20 bg-white-warm px-3 py-1.5 font-sans text-sm font-medium text-charcoal"
                              >
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={false}
                      className={cn(
                        'flex w-full items-center gap-3 rounded-xl border border-parchment/90 bg-linen/40 px-4 py-3 text-left transition-all hover:border-terracotta/30 hover:bg-linen/80',
                        isActive && 'border-terracotta/30 bg-linen',
                      )}
                    >
                      <span className="font-display text-base font-medium tabular-nums text-warm-gray/90">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-parchment/80 text-muted">
                        <ServiceIcon size={16} />
                      </span>
                      <span className="flex-1 font-sans text-base font-medium text-charcoal/90">
                        {service.title}
                      </span>
                      <ChevronDown size={18} className="shrink-0 text-warm-gray" />
                    </button>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reduced ? fadeOnly : fadeUp}
            className="hidden lg:block"
          >
            <div className="sticky top-28 overflow-hidden rounded-2xl bg-gradient-to-br from-sage-mist via-linen to-honey/20 p-8 shadow-warm-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta text-white-warm">
                <Icon size={24} />
              </div>
              <p className="mt-4 font-sans text-sm uppercase tracking-wide text-muted">
                Servizio in evidenza
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{current.title}</h3>
              <p className="mt-3 font-sans leading-relaxed text-charcoal">{current.summary}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
