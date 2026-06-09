import { motion, useReducedMotion } from 'framer-motion';
import { Clock, MapPin, ExternalLink } from 'lucide-react';
import { siteConfig, howToArrive, doveSiamoContent, territoryHighlights } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactBlock } from '@/components/ui/ContactBlock';
import { fadeUp, fadeOnly, staggerContainer } from '@/lib/animations';

export function AddressBlock() {
  const { contact } = siteConfig;
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={reduced ? fadeOnly : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-2xl bg-white-warm p-8 shadow-warm-md"
    >
      <h2 className="font-display text-2xl font-semibold text-ink">Il nostro indirizzo</h2>
      <div className="mt-6 space-y-4">
        <p className="font-display text-xl font-semibold text-cedar">Casa Allegramente</p>
        <p className="flex items-start gap-3 font-sans text-lg text-charcoal">
          <MapPin size={20} className="mt-1 shrink-0 text-terracotta" />
          <span>
            {contact.address.street}
            <br />
            {contact.address.cap} {contact.address.city} ({contact.address.province})
            <br />
            Piemonte, Italia
          </span>
        </p>
        <p className="flex items-center gap-3 font-sans text-charcoal">
          <Clock size={20} className="shrink-0 text-terracotta" />
          {contact.hours}
        </p>
      </div>
      <a
        href={contact.maps.google}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 font-sans font-semibold text-terracotta hover:text-terracotta-dark"
      >
        Indicazioni stradali
        <ExternalLink size={16} />
      </a>
    </motion.div>
  );
}

export function MapEmbed() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={reduced ? fadeOnly : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl shadow-warm-md"
    >
      <SectionHeading title="Ci trovi qui" align="left" className="mb-4 px-1" />
      <div className="relative aspect-[4/3] w-full bg-parchment md:aspect-[16/9]">
        <iframe
          title="Mappa interattiva — Casa Allegramente, Rivarolo Canavese"
          src={siteConfig.contact.maps.embed}
          className="absolute inset-0 h-full w-full border-0 grayscale-[0.06] sepia-[0.06]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}

export function HowToArriveSection() {
  const reduced = useReducedMotion();

  return (
    <section className="section-bg-white section-spacing" aria-labelledby="how-to-arrive">
      <div className="container-site">
        <SectionHeading title="Come raggiungerci" align="center" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {howToArrive.map((item) => (
            <motion.div key={item.id} variants={reduced ? fadeOnly : fadeUp} className="rounded-2xl bg-white-warm p-6 shadow-warm-sm">
              <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 font-sans leading-relaxed text-charcoal">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-8 text-center font-sans text-charcoal">{doveSiamoContent.parking}</p>
      </div>
    </section>
  );
}

export function TerritorySection() {
  const reduced = useReducedMotion() === true;

  return (
    <section className="section-bg-cream section-spacing" aria-labelledby="territory">
      <div className="container-site">
        <SectionHeading title={doveSiamoContent.territory.title} align="center" />
        {doveSiamoContent.territory.paragraphs.map((p) => (
          <motion.p
            key={p.slice(0, 40)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reduced ? fadeOnly : fadeUp}
            className="mx-auto mb-4 max-w-3xl font-sans text-lg leading-relaxed text-charcoal"
          >
            {p}
          </motion.p>
        ))}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-10 grid gap-6 sm:grid-cols-2"
        >
          {territoryHighlights.map((item) => (
            <motion.article
              key={item.id}
              variants={reduced ? fadeOnly : fadeUp}
              className="overflow-hidden rounded-2xl bg-white-warm shadow-warm-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <p className="mx-auto mt-8 max-w-3xl text-center font-sans text-xs leading-relaxed text-muted">
          Foto del territorio di Rivarolo Canavese — Wikimedia Commons (licenze Creative Commons).
        </p>
      </div>
    </section>
  );
}

export function DoveSiamoContactSection() {
  return (
    <section className="section-bg-burgundy section-spacing" aria-labelledby="dove-siamo-contact">
      <div className="container-site max-w-xl">
        <SectionHeading
          title="Contatti"
          subtitle={doveSiamoContent.visitNote}
          light
          align="center"
        />
        <ContactBlock variant="card" showDirections={false} className="bg-white-warm" />
      </div>
    </section>
  );
}
