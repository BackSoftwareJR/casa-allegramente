import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { laCasaSection } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function LaCasaSection() {
  const [current, setCurrent] = useState(0);
  const reduced = useReducedMotion();
  const slides = laCasaSection.slides;

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(advance, 6000);
    return () => clearInterval(t);
  }, [advance, reduced]);

  return (
    <section className="section-bg-white section-spacing" aria-labelledby="la-casa-title">
      <div className="container-site">
        <SectionHeading
          title={laCasaSection.title}
          subtitle={laCasaSection.subtitle}
          align="left"
        />

        <div className="relative mt-8 overflow-hidden rounded-2xl shadow-warm-lg md:mt-10">
          <div className="relative aspect-[16/10] w-full md:aspect-[21/9]">
            <AnimatePresence initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduced ? 0.2 : 1.2, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <img
                  src={slides[current].src}
                  alt={slides[current].alt}
                  className="h-full w-full object-cover"
                  loading={current === 0 ? 'eager' : 'lazy'}
                />
              </motion.div>
            </AnimatePresence>

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
              aria-hidden
            />

            <p className="absolute bottom-4 left-4 right-14 z-10 font-sans text-sm text-white-warm drop-shadow-md md:bottom-6 md:text-base">
              {slides[current].alt}
            </p>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Foto precedente"
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-ink/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-ink/50"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={advance}
            aria-label="Foto successiva"
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-ink/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-ink/50"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-4 right-4 z-20 flex gap-1.5 md:bottom-6">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Foto ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-honey' : 'w-1.5 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center md:mt-10">
          <Link
            to={laCasaSection.linkHref}
            className="inline-flex items-center gap-2 font-sans font-semibold text-terracotta transition-colors hover:text-terracotta-dark"
          >
            {laCasaSection.linkLabel}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
