'use client';

import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/content';
import { FlowButton } from '@/components/ui/flow-button';

interface BlogCTAProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'whatsapp';
}

const WHATSAPP_BLOG = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Buongiorno, ho letto il vostro blog e vorrei informazioni su ${siteConfig.name}`)}`;

export default function BlogCTA({
  title = 'Hai domande sulla nostra struttura?',
  description = 'Siamo a TODO_CITTA (TODO), residenza per anziani autosufficienti con massimo 10 ospiti. Prenota una visita gratuita e senza impegno.',
  variant = 'default',
}: BlogCTAProps) {
  return (
    <aside className="my-10 rounded-2xl border border-linen-200 bg-white p-6 text-ink shadow-warm-sm md:p-8 not-prose">
      <h3 className="font-display text-xl font-semibold text-warm-brown">{title}</h3>
      <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">{description}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <div>
          <FlowButton as="a" href={`tel:${siteConfig.contact.phoneRaw}`} icon={<Phone size={14} />} iconPosition="left">
            {siteConfig.contact.phone}
          </FlowButton>
          <p className="mt-1.5 font-sans text-xs text-ink-muted">{siteConfig.contact.phoneContactNote}</p>
        </div>
        {variant === 'whatsapp' ? (
          <FlowButton as="a" href={WHATSAPP_BLOG} target="_blank" rel="noopener noreferrer" icon={<MessageCircle size={14} />} iconPosition="left">
            Scrivici su WhatsApp
          </FlowButton>
        ) : (
          <FlowButton as={Link} href="/#contatti">
            Prenota una visita
          </FlowButton>
        )}
      </div>
    </aside>
  );
}
