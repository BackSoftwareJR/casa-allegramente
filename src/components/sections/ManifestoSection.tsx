import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { manifestoSection } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ManifestoFlourish } from '@/components/ui/ManifestoFlourish';
import { easing, duration } from '@/lib/animations';

const pillarTransition = {
  duration: duration.reveal,
  ease: easing.gentle,
};

export function ManifestoSection() {
  const reduced = useReducedMotion();

  return (
    <section
      className="manifesto-section py-10 md:py-14"
      aria-labelledby="manifesto-title"
    >
      <div className="container-site">
        <SectionHeading
          title={manifestoSection.title}
          subtitle={manifestoSection.subtitle}
          light
          align="left"
          className="mb-6 max-w-3xl md:mb-8 [&_.gold-divider]:via-honey/40 [&_h2]:text-cream/90 [&_p]:text-honey"
        />

        <ManifestoFlourish
          variant="divider"
          className="mb-6 h-3 w-40 text-honey md:mb-8 md:w-52"
        />

        <div className="grid gap-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-honey/25">
          {manifestoSection.pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                ...pillarTransition,
                delay: index * 0.12,
              }}
              className="border-t border-honey/20 pt-5 text-center md:border-t-0 md:px-5 lg:px-6"
            >
              <span
                aria-hidden
                className="font-display text-2xl font-bold leading-none text-honey md:text-3xl"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="mt-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-cream/80 md:text-[13px]">
                {pillar.title}
              </h3>

              <p className="mt-2 font-sans text-xs leading-relaxed text-cream/45 md:text-sm md:leading-snug">
                {pillar.text}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...pillarTransition, delay: 0.35 }}
          className="mt-8 flex flex-col gap-4 md:mt-10 md:flex-row md:items-end md:justify-between md:gap-8"
        >
          <blockquote className="relative max-w-2xl flex-1 md:pl-10">
            <ManifestoFlourish
              variant="quote"
              className="absolute left-0 top-0 h-8 w-8 text-honey/60 md:h-9 md:w-9"
            />
            <p className="border-l border-honey/30 pl-4 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-cream/80 md:text-[13px]">
              &ldquo;{manifestoSection.quote}&rdquo;
            </p>
          </blockquote>

          <Link
            to={manifestoSection.linkHref}
            className="inline-flex shrink-0 items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wide text-honey transition-colors hover:text-honey-light"
          >
            {manifestoSection.linkLabel}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
