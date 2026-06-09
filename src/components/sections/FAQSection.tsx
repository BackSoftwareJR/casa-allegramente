import { motion, useReducedMotion } from 'framer-motion';
import { faqForPage, type FaqPage, siteConfig } from '@/data/content';
import { hasPhone, telHref, cn } from '@/lib/utils';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { fadeUp, fadeOnly } from '@/lib/animations';
import { Phone } from 'lucide-react';

type FAQSectionProps = {
  page?: FaqPage;
  title?: string;
  showPhoneCta?: boolean;
  tone?: 'light' | 'dark';
};

export function FAQSection({
  page = 'home',
  title = 'Domande frequenti',
  showPhoneCta = page === 'home',
  tone = 'light',
}: FAQSectionProps) {
  const reduced = useReducedMotion();
  const items = faqForPage(page).map(({ id, question, answer }) => ({
    id,
    question,
    answer,
  }));

  if (items.length === 0) return null;

  return (
    <section
      className={cn('section-spacing', tone === 'dark' ? 'section-bg-burgundy' : 'section-bg-cream')}
      aria-labelledby={`faq-${page}`}
    >
      <div className="container-site max-w-3xl">
        <SectionHeading title={title} align="center" light={tone === 'dark'} />
        {showPhoneCta && hasPhone(siteConfig.contact.phoneRaw) && (
          <p className={cn('-mt-6 mb-8 text-center font-sans', tone === 'dark' ? 'text-cream/85' : 'text-charcoal')}>
            Non trovi risposta?{' '}
            <a
              href={telHref(siteConfig.contact.phoneRaw)}
              className={cn(
                'font-semibold hover:underline',
                tone === 'dark' ? 'text-terracotta-light' : 'text-terracotta',
              )}
            >
              Chiamaci — rispondiamo noi direttamente.
            </a>
          </p>
        )}
        <motion.div
          variants={reduced ? fadeOnly : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <Accordion items={items} />
        </motion.div>
        {page === 'servizi' && hasPhone(siteConfig.contact.phoneRaw) && (
          <div className="mt-8 text-center">
            <a href={telHref(siteConfig.contact.phoneRaw)} className="btn-primary inline-flex">
              <Phone size={16} />
              {siteConfig.contact.phone}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
