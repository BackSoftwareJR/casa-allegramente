import { motion, useReducedMotion } from 'framer-motion';
import { teamMembers } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { fadeUp, fadeOnly, staggerContainer } from '@/lib/animations';

export function TeamSection() {
  const reduced = useReducedMotion();

  return (
    <section className="section-bg-linen section-spacing" aria-labelledby="team-section">
      <div className="container-site">
        <SectionHeading
          title="Le persone di Casa Allegramente"
          subtitle="Dietro ogni pasto, ogni sorriso, ogni notte tranquilla c’è un team di persone dedicate, con empatia e professionalità."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={reduced ? fadeOnly : fadeUp}>
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-sage-mist font-display text-xl font-semibold text-cedar">
                  {member.initials}
                </div>
                <p className="font-sans text-sm font-semibold uppercase tracking-wide text-honey">{member.role}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{member.name}</h3>
                <p className="mt-3 font-sans leading-relaxed text-charcoal">{member.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center font-sans text-[15px] italic text-muted">
          Foto e nomi completi verranno inseriti con consenso scritto.
        </p>
      </div>
    </section>
  );
}
