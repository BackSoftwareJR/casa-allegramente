import { Link } from 'react-router-dom';
import { HeartHandshake, Utensils, Users, ClipboardList, Shield, Home, ArrowRight, type LucideIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { sectionQuotes, servicesPreview } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionQuote } from '@/components/ui/SectionQuote';
import { staggerContainer, fadeUp, fadeOnly } from '@/lib/animations';

const iconMap: Record<string, LucideIcon> = {
  'heart-handshake': HeartHandshake,
  utensils: Utensils,
  users: Users,
  'clipboard-list': ClipboardList,
  shield: Shield,
  home: Home,
};

export function ServicesPreview() {
  const reduced = useReducedMotion();
  const itemVariants = reduced ? fadeOnly : fadeUp;

  return (
    <section
      className="section-bg-white relative overflow-hidden section-spacing"
      aria-labelledby="services-preview"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(196,99,46,0.08) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="container-site relative">
        <SectionHeading
          title={servicesPreview.title}
          subtitle={servicesPreview.subtitle}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicesPreview.items.map((item) => {
            const Icon = iconMap[item.icon] ?? HeartHandshake;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group rounded-2xl border border-parchment bg-white-warm p-6 shadow-warm-sm transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/25 hover:shadow-warm-md motion-reduce:transform-none md:p-7"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal md:text-base">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mx-auto mt-12 max-w-2xl"
        >
          <SectionQuote quoteId={sectionQuotes.servicesPreview} />
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            to={servicesPreview.linkHref}
            className="inline-flex items-center gap-2 font-sans font-semibold text-terracotta transition-colors hover:text-terracotta-dark"
          >
            {servicesPreview.linkLabel}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
