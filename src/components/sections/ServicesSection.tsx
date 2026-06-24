'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Utensils, Sparkles, Heart, Palette, Building2, ArrowRight, type LucideIcon } from 'lucide-react';
import { services } from '@/data/content';
import SectionPastelBg from '@/components/ui/SectionPastelBg';
import { ImageAutoSlider } from '@/components/ui/image-auto-slider';
import { staggerContainer, fadeUp, viewportOptions } from '@/lib/animations';

const iconMap: Record<string, LucideIcon> = {
  'shield-heart': Shield, 'utensils': Utensils, 'sparkles': Sparkles,
  'heart-handshake': Heart, 'palette': Palette, 'building': Building2,
};

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="servizi" className="relative bg-transparent" aria-label="Servizi inclusi">
      <SectionPastelBg hue="green" className="section-spacing">
      <div className="container-site relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mb-16 max-w-xl"
        >
          <motion.p variants={fadeUp} className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary-700">
            Tutto incluso
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display font-bold text-warm-brown"
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
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(480px,46%)] lg:gap-12 xl:gap-16">

          {/* Left: accordion list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-2"
          >
            {services.map((service, i) => {
              const ServiceIcon = iconMap[service.icon] ?? Shield;
              const isActive = i === active;

              return (
                <motion.div
                  key={service.id}
                  variants={fadeUp}
                  className={`rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-white/55 shadow-warm-sm backdrop-blur-sm'
                      : 'hover:bg-white/30'
                  }`}
                >
                  <button
                    onClick={() => setActive(i)}
                    className="group flex w-full items-start gap-5 px-4 py-5 text-left sm:px-5 sm:py-6"
                    aria-expanded={isActive}
                  >
                    {/* Number */}
                    <span
                      className={`shrink-0 font-sans text-lg font-semibold transition-colors duration-300 ${
                        isActive ? 'text-primary' : 'text-linen-400'
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
                              isActive ? 'bg-primary text-white' : 'bg-linen-200 text-ink-muted group-hover:bg-primary/10 group-hover:text-primary'
                            }`}
                          >
                            <ServiceIcon size={15} />
                          </div>
                          <span
                            className={`font-sans font-semibold transition-colors duration-300 ${
                              isActive ? 'text-warm-brown' : 'text-ink group-hover:text-warm-brown'
                            }`}
                            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
                          >
                            {service.title}
                          </span>
                        </div>
                        <motion.span
                          animate={{ rotate: isActive ? 90 : 0 }}
                          transition={{ duration: 0.25 }}
                          className={`shrink-0 transition-colors ${isActive ? 'text-primary' : 'text-linen-400 group-hover:text-ink-muted'}`}
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
                                  className="flex items-center gap-1.5 rounded-full border border-secondary/20 bg-secondary-50 px-3 py-1 font-sans text-xs font-medium text-secondary-700"
                                >
                                  <span className="h-1 w-1 rounded-full bg-secondary" />
                                  {h}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: auto-sliding image gallery */}
          <div className="hidden lg:flex lg:items-start">
            <div className="sticky top-24 w-full xl:top-28">
              <ImageAutoSlider />
            </div>
          </div>
        </div>
      </div>
      </SectionPastelBg>
    </section>
  );
}
