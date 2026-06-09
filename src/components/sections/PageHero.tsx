import { motion, useReducedMotion } from 'framer-motion';

import { Phone } from 'lucide-react';

import { siteConfig } from '@/data/content';

import { telHref, hasPhone } from '@/lib/utils';

import { ButtonLink } from '@/components/ui/Button';



type PageHeroProps = {

  eyebrow: string;

  title: string;

  subtitle: string;

  backgroundImage?: string;

  ctaLabel?: string;

  ctaHref?: string;

  ctaExternal?: boolean;

};



export function PageHero({

  eyebrow,

  title,

  subtitle,

  backgroundImage,

  ctaLabel,

  ctaHref,

  ctaExternal,

}: PageHeroProps) {

  const reduced = useReducedMotion();



  return (

    <section

      className="relative flex min-h-[50vh] items-end overflow-hidden bg-cedar pt-28 md:min-h-[55vh]"

      aria-labelledby="page-hero-title"

    >

      {backgroundImage && (

        <div

          className="absolute inset-0 bg-cover bg-center"

          style={{ backgroundImage: `url(${backgroundImage})` }}

          role="img"

          aria-label=""

          aria-hidden

        />

      )}

      <motion.div

        className="absolute inset-0 bg-hero-overlay"

        aria-hidden

        initial={reduced ? false : { opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ duration: 0.6 }}

      />



      <div className="container-site relative z-10 pb-16 pt-8 md:pb-20">

        <motion.p

          initial={reduced ? false : { opacity: 0, y: 12 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5 }}

          className="eyebrow mb-4 text-honey-light"

        >

          {eyebrow}

        </motion.p>

        <motion.h1

          id="page-hero-title"

          initial={reduced ? false : { opacity: 0, y: 16 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.1 }}

          className="max-w-3xl font-display text-balance text-display-lg font-semibold text-white-warm md:text-display-xl"

        >

          {title}

        </motion.h1>

        <motion.p

          initial={reduced ? false : { opacity: 0, y: 12 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.2 }}

          className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-cream/90 md:text-xl"

        >

          {subtitle}

        </motion.p>

        {ctaLabel && ctaHref && (

          <motion.div

            initial={reduced ? false : { opacity: 0, y: 12 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6, delay: 0.3 }}

            className="mt-8"

          >

            <ButtonLink

              href={ctaHref}

              variant={ctaExternal ? 'primary' : 'ghost-light'}

              external={ctaExternal}

            >

              {!ctaExternal && <Phone size={16} />}

              {ctaLabel}

            </ButtonLink>

          </motion.div>

        )}

        {!ctaHref && hasPhone(siteConfig.contact.phoneRaw) && (

          <motion.div

            initial={reduced ? false : { opacity: 0, y: 12 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6, delay: 0.3 }}

            className="mt-8"

          >

            <ButtonLink href={telHref(siteConfig.contact.phoneRaw)} variant="primary">

              <Phone size={16} />

              Chiamaci: {siteConfig.contact.phone}

            </ButtonLink>

          </motion.div>

        )}

      </div>

    </section>

  );

}

