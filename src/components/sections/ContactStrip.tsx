import { motion, useReducedMotion } from 'framer-motion';
import { contactStrip } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactBlock } from '@/components/ui/ContactBlock';
import { fadeUp, fadeOnly } from '@/lib/animations';

export function ContactStrip() {
  const reduced = useReducedMotion();

  return (
    <section className="section-bg-cedar section-spacing" aria-labelledby="contact-strip">
      <div className="container-site">
        <SectionHeading
          title={contactStrip.title}
          subtitle={contactStrip.subtitle}
          light
        />
        <motion.div
          variants={reduced ? fadeOnly : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto max-w-xl"
        >
          <ContactBlock variant="card" showDirections />
        </motion.div>
      </div>
    </section>
  );
}
