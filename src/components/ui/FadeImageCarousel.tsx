import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Slide = {
  src: string;
  alt: string;
};

type FadeImageCarouselProps = {
  slides: readonly Slide[];
  interval?: number;
  className?: string;
};

export function FadeImageCarousel({
  slides,
  interval = 3000,
  className,
}: FadeImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const reduced = useReducedMotion();

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (reduced || slides.length <= 1) return;
    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [advance, interval, reduced, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div
      className={cn('relative w-full overflow-hidden rounded-xl', className)}
      aria-roledescription="carousel"
      aria-label="Galleria fotografica"
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.15 : 1.1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].src}
            alt={slides[current].alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent"
        aria-hidden
      />

      <div className="absolute bottom-3 right-3 z-10 flex gap-1.5" aria-hidden>
        {slides.map((_, i) => (
          <span
            key={i}
            className={cn(
              'h-1 rounded-full transition-all duration-300',
              i === current ? 'w-5 bg-honey' : 'w-1.5 bg-white/50',
            )}
          />
        ))}
      </div>
    </div>
  );
}
