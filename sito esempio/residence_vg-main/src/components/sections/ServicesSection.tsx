'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Utensils, Sparkles, Heart, Palette, Building2, ArrowRight, type LucideIcon } from 'lucide-react';
import { services } from '@/data/content';
import { staggerContainer, fadeUp, viewportOptions } from '@/lib/animations';

/* Each service gets a real structural photo */
const serviceImages: Record<string, string> = {
  'assistenza':    '/images/foto_orizzontali/IMG_2384.webp', // cura reale: due OSS con ospita
  'vitto':         '/images/3vg.webp',                       // sala pranzo apparecchiata
  'pulizia':       '/images/8vg.webp',                       // bagno moderno e curato
  'progetto-vita': '/images/foto_orizzontali/IMG_2386.webp', // dialogo operatrice/ospite
  'attivita':      '/images/foto_orizzontali/IMG_2387.webp', // esercizi motori in sala
  'struttura':     '/images/6vg.webp',                       // terrazza panoramica
};

const iconMap: Record<string, LucideIcon> = {
  'shield-heart': Shield, 'utensils': Utensils, 'sparkles': Sparkles,
  'heart-handshake': Heart, 'palette': Palette, 'building': Building2,
};

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const activeService = services[active];
  const Icon = iconMap[activeService.icon] ?? Shield;

  return (
    <section id="servizi" className="relative section-spacing overflow-hidden" aria-label="Servizi inclusi">
      {/* Gradient background: linen → parchment — light and airy */}
      <div className="absolute inset-0 bg-gradient-to-br from-linen-100 via-linen-100 to-parchment" />

      <div className="container-site relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mb-16 max-w-xl"
        >
          <motion.p variants={fadeUp} className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-gold-700">
            Tutto incluso
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display font-semibold text-forest"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.08 }}
          >
            Ogni servizio che ti serve.<br />Senza sorprese.
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-5 gold-line" />
          <motion.p variants={fadeUp} className="mt-5 font-sans text-base leading-relaxed text-ink-light">
            Dalla colazione alla buona notte, ogni momento della tua giornata è pensato, presidiato e incluso.
          </motion.p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_420px] lg:gap-16">

          {/* Left: accordion list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, i) => {
              const ServiceIcon = iconMap[service.icon] ?? Shield;
              const isActive = i === active;

              return (
                <motion.div
                  key={service.id}
                  variants={fadeUp}
                  className="border-b border-linen-300 last:border-b-0"
                >
                  <button
                    onClick={() => setActive(i)}
                    className="group flex w-full items-start gap-5 py-6 text-left"
                    aria-expanded={isActive}
                  >
                    {/* Number */}
                    <span
                      className={`shrink-0 font-display text-lg font-semibold transition-colors duration-300 ${
                        isActive ? 'text-gold' : 'text-linen-300'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="flex-1 min-w-0">
                      {/* Row: icon + title + arrow */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                              isActive ? 'bg-forest text-white' : 'bg-linen-200 text-ink-muted group-hover:bg-forest/10 group-hover:text-forest'
                            }`}
                          >
                            <ServiceIcon size={15} />
                          </div>
                          <span
                            className={`font-sans font-semibold transition-colors duration-300 ${
                              isActive ? 'text-forest' : 'text-ink group-hover:text-forest'
                            }`}
                            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
                          >
                            {service.title}
                          </span>
                        </div>
                        <motion.span
                          animate={{ rotate: isActive ? 90 : 0 }}
                          transition={{ duration: 0.25 }}
                          className={`shrink-0 transition-colors ${isActive ? 'text-gold' : 'text-linen-300 group-hover:text-ink-muted'}`}
                        >
                          <ArrowRight size={16} />
                        </motion.span>
                      </div>

                      {/* Expanded content */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="mt-3 font-sans text-sm leading-relaxed text-ink-light">
                              {service.description}
                            </p>
                            {/* Highlights */}
                            <div className="mt-4 flex flex-wrap gap-2">
                              {service.highlights.map((h) => (
                                <span
                                  key={h}
                                  className="flex items-center gap-1.5 rounded-full border border-forest/15 bg-sage-100 px-3 py-1 font-sans text-xs font-medium text-forest"
                                >
                                  <span className="h-1 w-1 rounded-full bg-sage" />
                                  {h}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>

                  {/* Active indicator line */}
                  <motion.div
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                    className="mb-0 h-px origin-left bg-gradient-to-r from-gold/60 to-transparent"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: sticky image + detail */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              {/* Image frame */}
              <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(45,58,46,0.15)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${active}`}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[4/3]"
                  >
                    <Image
                      src={serviceImages[activeService.id] ?? '/images/foto_orizzontali/IMG_2382.webp'}
                      alt={activeService.title}
                      fill
                      className="object-cover"
                      sizes="420px"
                    />
                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Label overlaid on image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`label-${active}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute bottom-0 inset-x-0 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold">
                        <Icon size={17} className="text-forest" />
                      </div>
                      <div>
                        <p className="font-sans text-[10px] uppercase tracking-widest text-white/60">Servizio</p>
                        <p className="font-sans text-sm font-semibold text-white">{activeService.title}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dot navigation */}
              <div className="mt-5 flex justify-center gap-2">
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Servizio ${i + 1}`}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? 24 : 6,
                      background: i === active ? '#C9A84C' : '#D4CFC7',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
