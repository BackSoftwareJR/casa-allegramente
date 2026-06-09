import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroContent, heroSlides } from '@/data/content';

export function Hero() {
  const [current, setCurrent] = useState(0);
  const prefersReduced = useReducedMotion();

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;
    const t = setInterval(advance, 7000);
    return () => clearInterval(t);
  }, [advance, prefersReduced]);

  return (
    <section
      className="relative flex min-h-[92dvh] items-center justify-center overflow-hidden md:min-h-[95dvh]"
      aria-label="Benvenuto"
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReduced ? 0.2 : 1.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[current].src}
              alt={heroSlides[current].alt}
              className="h-full w-full object-cover"
              fetchPriority={current === 0 ? 'high' : 'low'}
              loading={current === 0 ? 'eager' : 'lazy'}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-hero-cinematic" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_42%,rgba(0,0,0,0.35)_0%,transparent_70%)]"
          aria-hidden
        />
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Immagine precedente"
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/25 bg-black/20 p-2.5 text-white/80 backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-black/35 hover:text-white md:flex"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={advance}
        aria-label="Immagine successiva"
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/25 bg-black/20 p-2.5 text-white/80 backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-black/35 hover:text-white md:flex"
      >
        <ChevronRight size={22} />
      </button>

      <div className="relative z-10 px-6 py-24 text-center md:px-12">
        <h1 className="mx-auto max-w-4xl">
          {heroContent.headline.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="block font-sans text-[clamp(1.35rem,4.5vw,2.75rem)] font-normal uppercase leading-snug tracking-[0.22em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)] md:tracking-[0.28em]"
            >
              {line}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 block font-display text-[clamp(1.75rem,5vw,3.25rem)] font-medium italic tracking-normal text-white-warm drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
          >
            {heroContent.brand}
          </motion.span>
        </h1>
      </div>

      <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-24">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-0.5 rounded-full transition-all duration-500 ${
              i === current ? 'w-8 bg-white' : 'w-2.5 bg-white/35 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-white/55 transition-colors hover:text-white"
        aria-label="Scorri verso il contenuto"
      >
        <span className="font-sans text-[11px] uppercase tracking-[0.2em]">Scopri</span>
        <ArrowDown size={18} className="animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  );
}
