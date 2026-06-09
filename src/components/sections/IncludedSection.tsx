import { motion, useReducedMotion } from 'framer-motion';

import { Check } from 'lucide-react';

import { includedItems, includedSectionContent, quoteBackgrounds, sectionQuotes, serviziContent } from '@/data/content';

import { SectionHeading } from '@/components/ui/SectionHeading';

import { SectionQuote } from '@/components/ui/SectionQuote';

import { fadeUp, fadeOnly } from '@/lib/animations';



export function IncludedSection() {

  const reduced = useReducedMotion();



  return (

    <section className="section-bg-cream relative section-spacing overflow-hidden" aria-labelledby="included-section">

      <div

        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"

        style={{ backgroundImage: `url(${quoteBackgrounds['amore familiare']})` }}

        aria-hidden

      />

      <div className="container-site relative z-10 max-w-3xl">

        <SectionHeading
          eyebrow={includedSectionContent.eyebrow}
          title={includedSectionContent.title}
          subtitle={includedSectionContent.subtitle}
          align="center"
        />



        <motion.ul

          variants={reduced ? fadeOnly : fadeUp}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true, margin: '-60px' }}

          className="space-y-3 rounded-2xl bg-white-warm/95 p-8 shadow-warm-sm backdrop-blur-sm md:p-10"

        >

          {includedItems.map((item) => (

            <li key={item} className="flex items-start gap-3 font-sans text-lg text-charcoal">

              <Check size={20} className="mt-1 shrink-0 text-sage" aria-hidden />

              {item}

            </li>

          ))}

        </motion.ul>



        <motion.div

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true }}

          variants={reduced ? fadeOnly : fadeUp}

          className="mx-auto mt-10 max-w-xl"

        >

          <SectionQuote quoteId={sectionQuotes.included} />

        </motion.div>



        <motion.p

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true }}

          variants={reduced ? fadeOnly : fadeUp}

          className="mt-6 text-center font-sans text-charcoal"

        >

          {serviziContent.pricingNote}

        </motion.p>

      </div>

    </section>

  );

}

