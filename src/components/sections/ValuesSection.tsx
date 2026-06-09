import { motion, useReducedMotion } from 'framer-motion';

import { sectionQuotes, values } from '@/data/content';

import { SectionHeading } from '@/components/ui/SectionHeading';

import { SectionQuote } from '@/components/ui/SectionQuote';

import { Card } from '@/components/ui/Card';

import { fadeUp, fadeOnly, staggerContainer } from '@/lib/animations';



export function ValuesSection() {

  const reduced = useReducedMotion();



  return (

    <section className="section-bg-burgundy section-spacing" aria-labelledby="values-section">

      <div className="container-site">

        <SectionHeading

          eyebrow="I nostri valori"

          title="I valori che ci guidano"

          subtitle="Non sono slogan. Sono il modo concreto in cui lavoriamo ogni giorno, con attenzione e cura per ogni persona."

          light

        />



        <motion.div

          variants={staggerContainer}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true, margin: '-60px' }}

          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"

        >

          {values.map((value, i) => (

            <motion.div key={value.id} variants={reduced ? fadeOnly : fadeUp}>

              <Card className="h-full border-l-4 border-terracotta">

                <span className="font-display text-4xl font-bold text-warm-gray/40">

                  {String(i + 1).padStart(2, '0')}

                </span>

                <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{value.title}</h3>

                <p className="mt-1 font-display italic text-terracotta">{value.tagline}</p>

                <p className="mt-3 font-sans leading-relaxed text-charcoal">{value.body}</p>

              </Card>

            </motion.div>

          ))}

        </motion.div>



        <motion.div

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true }}

          variants={reduced ? fadeOnly : fadeUp}

          className="mx-auto mt-12 max-w-3xl"

        >

          <SectionQuote quoteId={sectionQuotes.values} light />

        </motion.div>

      </div>

    </section>

  );

}

