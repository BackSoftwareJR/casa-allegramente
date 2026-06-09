import { motion, useReducedMotion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { heroIntro, siteConfig } from '@/data/content';
import { telHref, hasPhone } from '@/lib/utils';
import { ButtonLink, ButtonRouter } from '@/components/ui/Button';

export function HeroIntro() {
  const reduced = useReducedMotion();

  return (
    <section
      id="intro"
      className="section-bg-cream border-b border-parchment py-16 md:py-20"
      aria-labelledby="hero-intro-text"
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p
            id="hero-intro-text"
            className="font-sans text-lg leading-relaxed text-charcoal md:text-xl md:leading-relaxed"
          >
            {heroIntro.text}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {hasPhone(siteConfig.contact.phoneRaw) ? (
              <ButtonLink href={telHref(siteConfig.contact.phoneRaw)} variant="primary">
                <Phone size={16} />
                {heroIntro.ctaPrimary}
              </ButtonLink>
            ) : (
              <ButtonRouter to="/dove-siamo" variant="primary">
                {heroIntro.ctaPrimary}
              </ButtonRouter>
            )}
            <ButtonRouter to={heroIntro.ctaSecondaryHref} variant="secondary">
              {heroIntro.ctaSecondary}
            </ButtonRouter>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
