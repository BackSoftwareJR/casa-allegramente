'use client';

import { motion } from 'framer-motion';
import { ExternalLink, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/content';
import { cn } from '@/lib/utils';

type LocationMapVariant = 'full' | 'compact';

interface LocationMapProps {
  variant?: LocationMapVariant;
  className?: string;
  showFooter?: boolean;
}

const { contact } = siteConfig;
const { lat, lng } = contact.geo;

const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&hl=it&z=16&output=embed`;

function MapMarker({ compact }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2',
        compact ? '-translate-y-[calc(100%+4px)]' : '-translate-y-[calc(100%+8px)]',
      )}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center">
        {!compact && (
          <div className="mb-1.5 whitespace-nowrap rounded-full bg-forest px-3 py-1 shadow-warm-md ring-1 ring-gold/30">
            <span className="font-sans text-[11px] font-semibold tracking-wide text-gold">
              Residence V.G
            </span>
          </div>
        )}
        <div className="relative">
          <span
            className={cn(
              'absolute left-1/2 top-full -translate-x-1/2 rounded-full bg-forest/30 blur-md',
              compact ? 'h-2 w-6' : 'h-3 w-8',
            )}
          />
          <MapPin
            size={compact ? 28 : 44}
            strokeWidth={1.5}
            className="relative text-gold drop-shadow-[0_4px_12px_rgba(201,168,76,0.45)]"
            fill="#2D3A2E"
          />
        </div>
      </div>
    </div>
  );
}

export default function LocationMap({
  variant = 'full',
  className,
  showFooter = variant === 'full',
}: LocationMapProps) {
  const compact = variant === 'compact';
  const height = compact ? 120 : 420;

  return (
    <motion.div
      initial={compact ? false : { opacity: 0, y: 16 }}
      whileInView={compact ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        'group relative overflow-hidden bg-linen-200',
        compact ? 'rounded-xl ring-1 ring-white/10' : 'rounded-2xl shadow-warm-md ring-1 ring-forest/10',
        className,
      )}
    >
      {!compact && (
        <>
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-8 -top-8 z-10 h-24 w-24 rounded-full bg-gold/10 blur-2xl"
            aria-hidden="true"
          />
        </>
      )}

      <div className="relative overflow-hidden">
        <iframe
          title="Mappa Residence V.G — Cabiate (CO)"
          src={embedSrc}
          width="100%"
          height={height}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={cn(
            'block w-full border-0 transition-[filter] duration-500',
            compact
              ? 'opacity-70 saturate-[0.85] sepia-[0.12] group-hover:opacity-90'
              : 'map-warm-tone saturate-[0.9] sepia-[0.08]',
          )}
        />

        <div
          className={cn(
            'pointer-events-none absolute inset-0',
            compact
              ? 'bg-gradient-to-t from-forest/50 via-forest/10 to-transparent'
              : 'bg-gradient-to-t from-forest/25 via-transparent to-forest/5',
          )}
          aria-hidden="true"
        />

        <MapMarker compact={compact} />
      </div>

      {showFooter && (
        <div className="flex items-center justify-between gap-4 border-t border-linen-300/80 bg-white px-5 py-3.5">
          <div className="min-w-0">
            <p className="truncate font-sans text-xs font-semibold uppercase tracking-wider text-forest/60">
              Cabiate · Brianza
            </p>
            <p className="truncate font-sans text-sm text-ink-light">
              {contact.address.street}
            </p>
          </div>
          <a
            href={contact.maps.googlemaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-forest/5 px-4 py-2 font-sans text-sm font-medium text-forest transition-colors hover:bg-gold/15 hover:text-gold"
          >
            Indicazioni
            <ExternalLink size={14} className="opacity-70" />
          </a>
        </div>
      )}
    </motion.div>
  );
}
