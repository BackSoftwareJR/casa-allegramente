import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials, testimonialsSection } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { staggerContainer, fadeUp, fadeOnly } from '@/lib/animations';

type TestimonialsSectionProps = {
  context?: 'general' | 'daily' | 'all';
  title?: string;
  subtitle?: string;
};

export function TestimonialsSection({
  context = 'all',
  title = testimonialsSection.title,
  subtitle = testimonialsSection.subtitle,
}: TestimonialsSectionProps) {
  const reduced = useReducedMotion();
  const itemVariants = reduced ? fadeOnly : fadeUp;
  const filtered =
    context === 'all' ? testimonials : testimonials.filter((t) => t.context === context);

  if (filtered.length === 0) return null;

  return (
    <section className="section-bg-white section-spacing" aria-labelledby="testimonials">
      <div className="container-site">
        <SectionHeading title={title} subtitle={subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 md:grid-cols-2"
        >
          {filtered.map((t) => (
            <motion.blockquote
              key={t.id}
              variants={itemVariants}
              className="rounded-2xl bg-white-warm/80 p-8 md:p-10"
            >
              <div className="mb-4 flex gap-1 text-honey" aria-hidden>
                {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="font-display text-xl italic leading-relaxed text-ink md:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 font-sans text-base">
                <cite className="not-italic font-semibold text-charcoal">{t.author}</cite>
                <span className="text-muted"> — {t.relation}</span>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
