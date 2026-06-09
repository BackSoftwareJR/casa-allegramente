import { motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  CalendarCheck,
  Car,
  Scissors,
  Shirt,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react';
import { extraServices, extraServicesNote } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, fadeOnly, staggerContainer } from '@/lib/animations';

const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  stethoscope: Stethoscope,
  scissors: Scissors,
  car: Car,
  'calendar-check': CalendarCheck,
  shirt: Shirt,
};

export function ExtraServicesSection() {
  const reduced = useReducedMotion();

  return (
    <section className="section-bg-burgundy section-spacing" aria-labelledby="extra-services">
      <div className="container-site max-w-3xl">
        <SectionHeading
          title="I nostri servizi extra"
          subtitle="Prestazioni aggiuntive su richiesta, oltre a quanto compreso nella retta mensile — attivate con flessibilità e in accordo con l’ospite."
          light
          align="center"
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-3 sm:grid-cols-2"
        >
          {extraServices.map((item) => {
            const Icon = iconMap[item.icon] ?? Activity;

            return (
              <motion.li
                key={item.id}
                variants={reduced ? fadeOnly : fadeUp}
                className="relative rounded-xl border border-white/15 bg-white/5 px-4 py-3 pr-12 font-sans text-cream/95 backdrop-blur-sm"
              >
                <span
                  className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-cream/75"
                  aria-hidden
                >
                  <Icon size={15} strokeWidth={1.75} />
                </span>
                {item.label}
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reduced ? fadeOnly : fadeUp}
          className="mt-8 text-center font-sans text-sm leading-relaxed text-cream/85"
        >
          {extraServicesNote}
        </motion.p>
      </div>
    </section>
  );
}
