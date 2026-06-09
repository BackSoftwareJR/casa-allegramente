import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/data/content';
import { telHref, whatsappHref, hasPhone, hasWhatsapp } from '@/lib/utils';
import { ButtonLink, ButtonRouter } from '@/components/ui/Button';import { fadeUp, fadeOnly } from '@/lib/animations';

type CTAStripProps = {
  title: string;
  text: string;
  showWhatsApp?: boolean;
};

export function CTAStrip({ title, text, showWhatsApp = true }: CTAStripProps) {
  const reduced = useReducedMotion();

  return (
    <section className="section-bg-cedar section-spacing" aria-labelledby="cta-strip-title">
      <div className="container-site max-w-3xl text-center">
        <motion.div
          variants={reduced ? fadeOnly : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <h2 id="cta-strip-title" className="font-display text-display-md font-semibold text-white-warm">
            {title}
          </h2>
          <p className="mt-4 font-sans text-lg leading-relaxed text-cream/85">{text}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {hasPhone(siteConfig.contact.phoneRaw) ? (
              <ButtonLink href={telHref(siteConfig.contact.phoneRaw)} variant="primary">
                <Phone size={16} />
                Chiamaci: {siteConfig.contact.phone}
              </ButtonLink>
            ) : (
              <ButtonRouter to="/dove-siamo" variant="primary">
                Venite a trovarci
              </ButtonRouter>
            )}
            {showWhatsApp && hasWhatsapp(siteConfig.contact.whatsapp) && (              <ButtonLink
                href={whatsappHref(siteConfig.contact.whatsapp, 'Buongiorno, vorrei informazioni su Casa Allegramente')}
                variant="secondary"
                external
                className="border-cream/40 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
              >
                <MessageCircle size={16} />
                Scrivici su WhatsApp
              </ButtonLink>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
