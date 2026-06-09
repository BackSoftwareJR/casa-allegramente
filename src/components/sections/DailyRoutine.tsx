import { motion, useReducedMotion } from 'framer-motion';
import { Coffee, Moon, Palette, Sun, UtensilsCrossed } from 'lucide-react';
import { dailyRoutineStory } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ThemedGridCard } from '@/components/ui/ThemedGridCard';
import { staggerContainer } from '@/lib/animations';

type MomentId = (typeof dailyRoutineStory.moments)[number]['id'];

const momentStyles: Record<MomentId, { card: string; border: string }> = {
  risveglio: { card: 'bg-[#F6E08A]/88', border: 'border-honey' },
  mattino: { card: 'bg-sage-mist/95', border: 'border-sage-dark' },
  pranzo: { card: 'bg-[#F0D4C4]/88', border: 'border-terracotta' },
  pomeriggio: { card: 'bg-[#EDE4D0]/90', border: 'border-honey' },
  sera: { card: 'bg-[#D4DCE8]/88', border: 'border-cedar-light' },
};

function MomentDecoration({ id }: { id: MomentId }) {
  const iconClass = 'absolute right-4 top-4 opacity-70';

  switch (id) {
    case 'risveglio':
      return <Sun className={`${iconClass} h-10 w-10 text-honey`} strokeWidth={1.5} aria-hidden />;
    case 'mattino':
      return <Coffee className={`${iconClass} h-9 w-9 text-sage-dark`} strokeWidth={1.5} aria-hidden />;
    case 'pranzo':
      return <UtensilsCrossed className={`${iconClass} h-9 w-9 text-terracotta`} strokeWidth={1.5} aria-hidden />;
    case 'pomeriggio':
      return <Palette className={`${iconClass} h-9 w-9 text-honey`} strokeWidth={1.5} aria-hidden />;
    case 'sera':
      return <Moon className={`${iconClass} h-9 w-9 text-cedar-light`} strokeWidth={1.5} aria-hidden />;
  }
}

export function DailyRoutine() {
  const reduced = useReducedMotion() === true;
  const { eyebrow, title, subtitle, moments } = dailyRoutineStory;

  return (
    <section className="section-bg-cream section-spacing" aria-labelledby="daily-routine">
      <div className="container-site">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" />

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 sm:mt-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {moments.map((moment, i) => {
            const styles = momentStyles[moment.id];
            const isLast = i === moments.length - 1 && moments.length % 2 !== 0;

            return (
              <ThemedGridCard
                key={moment.id}
                borderClass={styles.border}
                bgClass={styles.card}
                label={moment.time}
                title={moment.title}
                description={moment.description}
                decoration={<MomentDecoration id={moment.id} />}
                reduced={reduced}
                className={isLast ? 'sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-xl' : undefined}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
