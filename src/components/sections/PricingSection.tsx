import { motion, useReducedMotion } from 'framer-motion';
import { pricing, privacyNote } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, fadeOnly, staggerContainer } from '@/lib/animations';

export function PricingSection() {
  const reduced = useReducedMotion();

  return (
    <section className="section-bg-white section-spacing" aria-labelledby="pricing-section">
      <div className="container-site max-w-3xl">
        <SectionHeading title={pricing.title} align="center" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {pricing.items.map((item) => (
            <motion.article
              key={item.id}
              variants={reduced ? fadeOnly : fadeUp}
              className="rounded-2xl border border-burgundy/10 bg-white-warm p-8 shadow-warm-sm"
            >
              <h3 className="font-display text-xl font-semibold text-ink">{item.label}</h3>
              <p className="mt-3 font-display text-4xl font-bold text-terracotta">{item.amount}</p>
              <p className="font-sans text-sm font-semibold uppercase tracking-wide text-muted">{item.period}</p>
              <p className="mt-4 font-sans leading-relaxed text-charcoal">{item.note}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reduced ? fadeOnly : fadeUp}
          className="mt-8 text-center font-sans text-charcoal"
        >
          {pricing.disclaimer}
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reduced ? fadeOnly : fadeUp}
          className="mt-6 text-center font-sans text-sm leading-relaxed text-muted"
        >
          {privacyNote}
        </motion.p>
      </div>
    </section>
  );
}
