import { motion, useReducedMotion } from 'framer-motion';
import { weeklyActivities } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StoryImageCard } from '@/components/ui/StoryImageCard';
import { staggerContainer } from '@/lib/animations';

export function WeeklyActivitiesSection() {
  const reduced = useReducedMotion() === true;

  return (
    <section className="section-bg-linen relative overflow-hidden section-spacing" aria-labelledby="weekly-activities">
      <div
        className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-honey/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-24 h-56 w-56 rounded-full bg-sage/10 blur-3xl"
        aria-hidden
      />

      <div className="container-site relative">
        <SectionHeading
          eyebrow="I laboratori"
          title="Attività e animazione"
          subtitle="Ginnastica dolce, cucina in compagnia, feste conviviali e gite sul suggestivo territorio canavesano."
          align="center"
        />

        <motion.div
          className="mt-12 flex flex-col gap-5 sm:mt-14 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          role="list"
        >
          {weeklyActivities.map((activity, i) => (
            <div key={activity.id} role="listitem">
              <StoryImageCard
                image={activity.image}
                title={activity.title}
                description={activity.description}
                index={i}
                reduced={reduced}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
