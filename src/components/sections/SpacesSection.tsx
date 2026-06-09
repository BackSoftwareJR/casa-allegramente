import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { spaces } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ImageBackdrop } from '@/components/ui/ImageBackdrop';
import { cn } from '@/lib/utils';
import { fadeUp, fadeOnly, staggerContainer } from '@/lib/animations';

type SpaceItem = (typeof spaces)[number]['items'][number];

function SpaceItemsCarousel({ items }: { items: readonly SpaceItem[] }) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const current = items[index];

  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const goNext = () => setIndex((i) => (i + 1) % items.length);

  if (items.length === 0) return null;

  return (
    <div className="relative px-1">
      <div className="relative overflow-hidden rounded-xl shadow-warm-md">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0.15 : 0.45, ease: 'easeInOut' }}
          >
            <ImageBackdrop
              src={current.image}
              alt={current.alt}
              overlay="medium"
              className="min-h-[14rem] md:min-h-[20rem]"
            >
              <div className="flex min-h-[14rem] items-end p-5 md:min-h-[20rem] md:p-7">
                <div>
                  <p className="font-sans text-base font-semibold text-white-warm drop-shadow-md md:text-lg">
                    {current.label}
                  </p>
                  {items.length > 1 && (
                    <p className="mt-1 font-sans text-xs text-cream/70">
                      {index + 1} di {items.length}
                    </p>
                  )}
                </div>
              </div>
            </ImageBackdrop>
          </motion.div>
        </AnimatePresence>

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Foto precedente"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-ink/40 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-ink/60"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Foto successiva"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-ink/40 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-ink/60"
            >
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Vai alla foto ${i + 1}`}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    i === index ? 'w-6 bg-honey' : 'w-1.5 bg-white/50 hover:bg-white/80',
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function SpacesSection() {
  const [active, setActive] = useState<number | null>(0);
  const reduced = useReducedMotion();

  return (
    <section className="section-bg-cream section-spacing" aria-labelledby="spaces-section">
      <div className="container-site">
        <SectionHeading
          eyebrow="La struttura"
          title="Gli spazi della nostra casa"
          subtitle="Casa famiglia pensata per far sentire a proprio agio: ambienti luminosi, arredamento caldo e spazi comuni vissuti come in famiglia."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto max-w-3xl space-y-3"
        >
          {spaces.map((space, i) => {
            const isOpen = active === i;

            return (
              <motion.div key={space.id} variants={reduced ? fadeOnly : fadeUp}>
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={cn(
                    'flex w-full items-center justify-between rounded-xl px-5 py-4 text-left transition-all',
                    isOpen ? 'bg-sage-mist shadow-warm-sm' : 'bg-linen hover:bg-parchment',
                  )}
                >
                  <span className="font-sans text-lg font-semibold text-ink">{space.title}</span>
                  <ChevronDown
                    size={20}
                    className={cn('text-wood transition-transform', isOpen && 'rotate-180')}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduced ? 0.1 : 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4 px-2 pb-2 pt-3">
                        <p className="px-3 font-sans leading-relaxed text-charcoal">{space.description}</p>
                        <SpaceItemsCarousel items={space.items} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
