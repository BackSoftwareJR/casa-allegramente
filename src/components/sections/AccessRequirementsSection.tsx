import { motion, useReducedMotion } from 'framer-motion';
import { accessRequirements } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, fadeOnly } from '@/lib/animations';

export function AccessRequirementsSection() {
  const reduced = useReducedMotion();

  return (
    <section className="section-bg-linen section-spacing" aria-labelledby="access-requirements">
      <div className="container-site max-w-3xl">
        <SectionHeading title={accessRequirements.title} align="center" />
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reduced ? fadeOnly : fadeUp}
          className="mb-8 font-sans text-lg leading-relaxed text-charcoal"
        >
          {accessRequirements.intro}
        </motion.p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reduced ? fadeOnly : fadeUp}
          className="space-y-3 rounded-2xl bg-linen/80 p-8 shadow-warm-sm"
        >
          {accessRequirements.documents.map((doc) => (
            <li key={doc} className="flex gap-3 font-sans text-charcoal">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden />
              {doc}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
