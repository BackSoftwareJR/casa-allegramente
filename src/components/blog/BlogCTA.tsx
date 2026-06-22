import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/content';

interface BlogCTAProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'whatsapp';
}

const WHATSAPP_BLOG =
  'https://wa.me/393519581235?text=Buongiorno%2C%20ho%20letto%20il%20vostro%20blog%20e%20vorrei%20informazioni%20su%20Residence%20V.G';

export default function BlogCTA({
  title = 'Hai domande sulla nostra struttura?',
  description = 'Siamo a Cabiate (CO), residenza per anziani autosufficienti con massimo 10 ospiti. Prenota una visita gratuita e senza impegno.',
  variant = 'default',
}: BlogCTAProps) {
  return (
    <aside className="my-10 rounded-2xl bg-forest p-6 text-white md:p-8 not-prose">
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">{description}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={`tel:${siteConfig.contact.phoneRaw}`} className="btn-primary">
          <Phone size={14} />
          {siteConfig.contact.phone}
        </a>
        {variant === 'whatsapp' ? (
          <a
            href={WHATSAPP_BLOG}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-white"
          >
            <MessageCircle size={14} />
            Scrivici su WhatsApp
          </a>
        ) : (
          <Link href="/#contatti" className="btn-ghost-white">
            Prenota una visita
          </Link>
        )}
      </div>
    </aside>
  );
}
