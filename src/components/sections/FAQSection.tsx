'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs, siteConfig } from '@/data/content';
import SectionPastelBg from '@/components/ui/SectionPastelBg';
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { Plus, Phone } from 'lucide-react';
import { FlowButton } from '@/components/ui/flow-button';

export default function FAQSection() {
  const [open, setOpen] = useState<string | null>(faqs[0].id);

  return (
    <section aria-label="Domande frequenti" className="bg-transparent">
      <SectionPastelBg hue="terracotta" className="section-spacing">
      <div className="container-site">

        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:items-start">

          {/* ── Left sticky header ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:sticky lg:top-28"
          >
            <motion.p variants={fadeUp} className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-primary-700">
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 font-display font-bold text-warm-brown leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', letterSpacing: '-0.01em' }}
            >
              Le domande che ci fanno di più
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-4 gold-line" />
            <motion.p variants={fadeUp} className="mt-5 font-sans text-sm leading-relaxed text-ink-light">
              Non trovi risposta? Chiamaci — rispondiamo noi direttamente.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6">
              <FlowButton as="a" href={`tel:${siteConfig.contact.phoneRaw}`} icon={<Phone size={14} />} iconPosition="left">
                {siteConfig.contact.phone}
              </FlowButton>
            </motion.div>
          </motion.div>

          {/* ── Right: accordion ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-2"
          >
            {faqs.map((faq, i) => {
              const isOpen = open === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  variants={fadeUp}
                  className={`overflow-hidden rounded-2xl transition-all duration-300 ${
                    isOpen
                    ? 'bg-white shadow-warm-md ring-1 ring-primary/20'
                    : 'bg-white/70 ring-1 ring-linen-300 hover:bg-white hover:shadow-warm-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className={`font-sans text-sm font-semibold transition-colors ${isOpen ? 'text-warm-brown' : 'text-ink'}`}>
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`shrink-0 ${isOpen ? 'text-primary' : 'text-ink-muted'}`}
                    >
                      <Plus size={17} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-linen-200 px-5 pb-5 pt-4">
                          <p className="font-sans text-sm leading-relaxed text-ink-light">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      </SectionPastelBg>
    </section>
  );
}
