import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { dailyRoutinePreview } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ImageBackdrop } from '@/components/ui/ImageBackdrop';
import { staggerContainer, fadeUp, fadeOnly } from '@/lib/animations';

export function DailyRoutinePreview() {
  const reduced = useReducedMotion();
  const itemVariants = reduced ? fadeOnly : fadeUp;

  return (
    <section className="section-bg-cream section-spacing" aria-labelledby="routine-preview">
      <div className="container-site">
        <SectionHeading title={dailyRoutinePreview.title} subtitle={dailyRoutinePreview.subtitle} />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col gap-4 md:gap-5"
        >
          {dailyRoutinePreview.slots.map((slot, index) => (
            <motion.li key={slot.title} variants={itemVariants} className="list-none">
              <ImageBackdrop
                src={slot.image}
                alt=""
                overlay="strong"
                className="overflow-hidden rounded-2xl shadow-warm-md"
              >
                <div className="flex min-h-[8rem] items-stretch md:min-h-[9rem]">
                  <div className="flex flex-1 items-center gap-4 bg-ink/80 p-5 backdrop-blur-sm md:max-w-[58%] md:gap-5 md:p-7 lg:max-w-[52%]">
                    <span
                      aria-hidden
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-burgundy-dark/80 font-display text-lg font-bold text-honey md:h-11 md:w-11"
                    >
                      {index + 1}
                    </span>

                    <div className="min-w-0 flex-1">
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-honey">
                        {slot.phase}
                      </span>
                      <h3 className="mt-1.5 font-sans text-base font-semibold uppercase tracking-wide text-cream/90 md:text-lg">
                        {slot.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-cream/55 md:text-[0.95rem]">
                        {slot.text}
                      </p>
                    </div>
                  </div>
                </div>
              </ImageBackdrop>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-10 text-center md:mt-12">
          <Link
            to={dailyRoutinePreview.linkHref}
            className="inline-flex items-center gap-2 font-sans font-semibold text-terracotta transition-colors hover:text-terracotta-dark"
          >
            {dailyRoutinePreview.linkLabel}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
