import { motion, useReducedMotion } from 'framer-motion';

import { Leaf, Snowflake, Sun } from 'lucide-react';

import { sectionQuotes, seasons, vitaInCasaContent } from '@/data/content';

import { SectionHeading } from '@/components/ui/SectionHeading';

import { SectionQuote } from '@/components/ui/SectionQuote';

import { ImageBackdrop } from '@/components/ui/ImageBackdrop';

import { ThemedGridCard } from '@/components/ui/ThemedGridCard';

import { fadeUp, fadeOnly, staggerContainer } from '@/lib/animations';

type SeasonId = (typeof seasons)[number]['id'];

const seasonStyles: Record<
  SeasonId,
  { card: string; border: string; decoration: string }
> = {
  estate: {
    card: 'bg-[#F6E08A]/88',
    border: 'border-honey',
    decoration: 'text-honey',
  },
  autunno: {
    card: 'bg-[#C9A57A]/88',
    border: 'border-[#8B5E34]',
    decoration: 'text-[#7A4A1E]',
  },
  inverno: {
    card: 'bg-[#B8D9EE]/88',
    border: 'border-[#6BA3C4]',
    decoration: 'text-[#5A9BBF]',
  },
  primavera: {
    card: 'bg-[#B8D9B0]/88',
    border: 'border-sage-dark',
    decoration: 'text-sage-dark',
  },
};

function TulipIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M24 8C20 8 17 12 17 16.5C17 20 19 23 24 28C29 23 31 20 31 16.5C31 12 28 8 24 8Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M24 28C21 24 14 22 11 26C9 28 10 32 14 33C17 34 21 32 24 28Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M24 28C27 24 34 22 37 26C39 28 38 32 34 33C31 34 27 32 24 28Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path d="M22 28V48H26V28H22Z" fill="#5D7A61" />
      <path d="M24 48C20 50 18 52 17 54H31C30 52 28 50 24 48Z" fill="#5D7A61" />
    </svg>
  );
}

function SeasonDecoration({ id, reduced }: { id: SeasonId; reduced: boolean }) {
  if (id === 'estate') {
    return (
      <Sun
        className="absolute right-4 top-4 h-10 w-10 text-honey opacity-70"
        strokeWidth={1.5}
        aria-hidden
      />
    );
  }

  if (id === 'autunno') {
    const leaves = [
      { left: '12%', delay: 0, rotate: -18 },
      { left: '38%', delay: 0.6, rotate: 12 },
      { left: '62%', delay: 1.1, rotate: -8 },
      { left: '82%', delay: 0.3, rotate: 22 },
    ];

    return (
      <>
        {leaves.map((leaf, i) => (
          <motion.span
            key={i}
            className="absolute top-2 text-[#8B5E34]/55"
            style={{ left: leaf.left }}
            animate={
              reduced
                ? { y: 28, rotate: leaf.rotate, opacity: 0.55 }
                : { y: [0, 36, 72], rotate: [leaf.rotate, leaf.rotate + 24, leaf.rotate + 48], opacity: [0.2, 0.65, 0] }
            }
            transition={
              reduced
                ? undefined
                : { duration: 4.5, repeat: Infinity, delay: leaf.delay, ease: 'easeIn' }
            }
            aria-hidden
          >
            <Leaf className="h-5 w-5" strokeWidth={1.5} />
          </motion.span>
        ))}
      </>
    );
  }

  if (id === 'inverno') {
    return (
      <>
        <Snowflake
          className="absolute right-5 top-4 h-9 w-9 text-[#5A9BBF]/70"
          strokeWidth={1.5}
          aria-hidden
        />
        <Snowflake
          className="absolute right-16 top-10 h-5 w-5 text-[#5A9BBF]/40"
          strokeWidth={1.5}
          aria-hidden
        />
        <Snowflake
          className="absolute bottom-6 right-8 h-4 w-4 text-[#5A9BBF]/35"
          strokeWidth={1.5}
          aria-hidden
        />
      </>
    );
  }

  return (
    <TulipIcon className="absolute right-4 top-3 h-14 w-14 text-[#C74B7A] opacity-80" />
  );
}



export function ConvivialitySection() {

  const reduced = useReducedMotion();



  return (

    <section className="section-bg-burgundy relative section-spacing" aria-labelledby="conviviality">

      <ImageBackdrop

        src={vitaInCasaContent.conviviality.image}

        alt=""

        overlay="medium"

        className="absolute inset-0"

        imageClassName="scale-105"

      />

      <div className="container-site relative z-10 max-w-prose">

        <SectionHeading title={vitaInCasaContent.conviviality.title} align="center" light className="[&_h2]:text-white-warm" />

        {vitaInCasaContent.conviviality.paragraphs.map((p) => (

          <motion.p

            key={p.slice(0, 40)}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true }}

            variants={reduced ? fadeOnly : fadeUp}

            className="mb-4 font-sans text-lg leading-relaxed text-cream/95"

          >

            {p}

          </motion.p>

        ))}

        <motion.div

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true }}

          variants={reduced ? fadeOnly : fadeUp}

          className="mt-8 border-l-terracotta-light"

        >

          <SectionQuote quoteId={sectionQuotes.conviviality} light className="border-l-terracotta-light" />

        </motion.div>

      </div>

    </section>

  );

}



export function SeasonsSection() {

  const reduced = useReducedMotion() === true;



  return (

    <section className="section-bg-cream section-spacing" aria-labelledby="seasons">

      <div className="container-site">

        <SectionHeading title="Le stagioni in casa" align="center" />

        <motion.div

          variants={staggerContainer}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true, margin: '-60px' }}

          className="grid gap-4 sm:grid-cols-2"

        >

          {seasons.map((season) => {
            const styles = seasonStyles[season.id];

            return (
              <ThemedGridCard
                key={season.id}
                borderClass={styles.border}
                bgClass={styles.card}
                title={season.name}
                description={season.description}
                decoration={<SeasonDecoration id={season.id} reduced={reduced} />}
                reduced={reduced}
              />
            );
          })}

        </motion.div>

      </div>

    </section>

  );

}

