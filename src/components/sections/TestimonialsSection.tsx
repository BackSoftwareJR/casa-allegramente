'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { testimonials } from '@/data/content';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(1);
  const prefersReduced = useReducedMotion();

  const go = useCallback(
    (i: number) => {
      setDir(i > cur ? 1 : -1);
      setCur(i);
    },
    [cur],
  );

  const next = useCallback(() => go((cur + 1) % testimonials.length), [cur, go]);
  const prev = useCallback(() => go((cur - 1 + testimonials.length) % testimonials.length), [cur, go]);

  useEffect(() => {
    if (prefersReduced) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, prefersReduced]);

  const t = testimonials[cur];

  return (
    <section
      aria-label="Testimonianze delle famiglie"
      className="relative overflow-hidden bg-white py-14 md:section-spacing"
    >
      <div
        className="pointer-events-none absolute -top-4 left-0 select-none font-display font-bold leading-none text-forest"
        style={{ fontSize: 'clamp(18rem, 35vw, 32rem)', opacity: 0.03, lineHeight: 0.85, letterSpacing: '-0.05em' }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-linen-300 to-transparent" />

      <div className="container-site relative">
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-20">

          {/* ── Colonna sinistra: titolo + controlli (desktop) ── */}
          <div className="flex flex-col">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold-700 md:text-sm">
              Le famiglie parlano
            </p>
            <h2
              className="mt-2 font-display font-semibold leading-tight text-forest md:mt-3"
              style={{ fontSize: 'clamp(1.65rem, 5vw, 2.8rem)', letterSpacing: '-0.02em' }}
            >
              <span className="lg:hidden">La fiducia è la nostra misura</span>
              <span className="hidden lg:inline">
                La fiducia
                <br />
                è la nostra
                <br />
                misura
              </span>
            </h2>

            {/* Mobile: controlli compatti sotto il titolo */}
            <div className="mt-4 flex items-center justify-between gap-4 lg:hidden">
              <div className="flex items-end gap-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={cur}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="font-display text-3xl font-bold leading-none text-forest"
                  >
                    {String(cur + 1).padStart(2, '0')}
                  </motion.span>
                </AnimatePresence>
                <span className="mb-0.5 font-sans text-sm text-ink-muted">
                  / {String(testimonials.length).padStart(2, '0')}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Testimonianza precedente"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-linen-300 bg-white text-ink-muted transition-all active:scale-95"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Testimonianza successiva"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-linen-300 bg-white text-ink-muted transition-all active:scale-95"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="mt-4 gold-line lg:mt-5" />

            {/* Desktop: counter + frecce + stats */}
            <div className="mt-10 hidden lg:block">
              <div className="flex items-end gap-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={cur}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="font-display text-5xl font-bold leading-none text-forest"
                  >
                    {String(cur + 1).padStart(2, '0')}
                  </motion.span>
                </AnimatePresence>
                <span className="mb-2 font-sans text-sm text-ink-muted">
                  / {String(testimonials.length).padStart(2, '0')}
                </span>
              </div>

              <div className="mt-4 h-0.5 w-20 overflow-hidden rounded-full bg-linen-300">
                <motion.div
                  className="h-full rounded-full bg-gold"
                  animate={{ width: `${((cur + 1) / testimonials.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Testimonianza precedente"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-linen-300 bg-white text-ink-muted transition-all duration-200 hover:border-forest hover:bg-forest hover:text-white hover:shadow-warm-sm"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Testimonianza successiva"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-linen-300 bg-white text-ink-muted transition-all duration-200 hover:border-forest hover:bg-forest hover:text-white hover:shadow-warm-sm"
                >
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="mt-10 space-y-5">
                {[
                  { val: '5.0', label: 'Media recensioni' },
                  { val: '100%', label: 'Famiglie soddisfatte' },
                ].map(({ val, label }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="font-display text-2xl font-bold text-forest">{val}</span>
                    <span className="font-sans text-xs leading-snug text-ink-muted">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Card recensione ── */}
          <div className="relative flex min-h-0 flex-col justify-center rounded-2xl border border-linen-200 bg-linen-50/80 p-5 shadow-warm-sm sm:p-6 lg:min-h-[320px] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
            <div className="mb-4 flex gap-1 lg:mb-7">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={15} className="fill-gold text-gold" />
              ))}
            </div>

            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={cur}
                custom={dir}
                initial={{ opacity: 0, y: dir * 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: dir * -18 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-1 flex-col"
              >
                <p
                  className="font-display italic leading-[1.5] text-ink"
                  style={{ fontSize: 'clamp(1.15rem, 4.2vw, 2.3rem)', letterSpacing: '-0.01em' }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                <footer className="mt-5 flex items-center gap-3 border-t border-linen-200/80 pt-4 sm:mt-6">
                  <div className="h-9 w-px shrink-0 bg-gold/50" />
                  <div>
                    <cite className="block font-sans text-sm font-semibold not-italic text-ink">
                      {t.name}
                    </cite>
                    <span className="font-sans text-xs text-ink-muted">{t.role}</span>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            {/* Pallini — mobile in fondo alla card */}
            <div className="mt-5 flex justify-center gap-2 lg:mt-8 lg:justify-start">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Testimonianza ${i + 1}`}
                  aria-current={i === cur ? 'true' : undefined}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === cur ? 28 : 8,
                    background: i === cur ? '#C9A84C' : '#D4CFC7',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
