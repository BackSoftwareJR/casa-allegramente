import { motion, useReducedMotion } from 'framer-motion';

import { chiSiamoContent, sectionQuotes, structureInfo } from '@/data/content';

import { SectionHeading } from '@/components/ui/SectionHeading';

import { SectionQuote } from '@/components/ui/SectionQuote';

import { FadeImageCarousel } from '@/components/ui/FadeImageCarousel';

import { fadeUp, fadeOnly, staggerContainer } from '@/lib/animations';



export function StorySection() {

  const reduced = useReducedMotion();



  return (

    <section className="section-bg-cream section-spacing" aria-labelledby="story-section">

      <div className="container-site">

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: '-60px' }}

          >

            <SectionHeading

              eyebrow="Chi siamo"

              title={chiSiamoContent.whyName.title}

              align="left"

              className="mb-6"

            />

            {chiSiamoContent.whyName.paragraphs.map((p) => (

              <motion.p key={p.slice(0, 40)} variants={reduced ? fadeOnly : fadeUp} className="mb-4 font-sans leading-relaxed text-charcoal">

                {p}

              </motion.p>

            ))}

            <motion.div variants={reduced ? fadeOnly : fadeUp} className="mt-8">

              <SectionQuote quoteId={sectionQuotes.story} />

            </motion.div>

          </motion.div>



          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: '-60px' }}

            className="space-y-6"
          >
            <div className="rounded-2xl bg-linen p-8 md:p-10">
              <SectionHeading title={chiSiamoContent.story.title} align="left" className="mb-5" />

              <FadeImageCarousel
                slides={chiSiamoContent.story.slides}
                interval={3000}
                className="mb-6 aspect-[21/8] min-h-[9rem] md:min-h-[11rem] lg:min-h-[12.5rem]"
              />

              {chiSiamoContent.story.paragraphs.map((p) => (

                <motion.p key={p.slice(0, 40)} variants={reduced ? fadeOnly : fadeUp} className="mb-4 font-sans leading-relaxed text-charcoal">

                  {p}

                </motion.p>

              ))}

              <motion.div

                variants={reduced ? fadeOnly : fadeUp}

                className="mt-8 grid grid-cols-2 gap-4 border-t border-warm-gray/40 pt-6"

              >

                <div>

                  <p className="font-display text-3xl font-bold text-terracotta">{structureInfo.ospiti}</p>

                  <p className="font-sans text-sm text-muted">Ospiti massimi</p>

                </div>

                <div>

                  <p className="font-display text-3xl font-bold text-honey">H24</p>

                  <p className="font-sans text-sm text-muted">Assistenza continua</p>

                </div>

                <div>

                  <p className="font-display text-3xl font-bold text-sage">{structureInfo.camereDoppie}</p>

                  <p className="font-sans text-sm text-muted">Camere doppie</p>

                </div>

                <div>

                  <p className="font-display text-3xl font-bold text-cedar">100%</p>

                  <p className="font-sans text-sm text-muted">Progetto individuale</p>

                </div>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );

}

