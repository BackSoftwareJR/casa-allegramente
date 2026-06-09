'use client';

import Image from 'next/image';
import { useState } from 'react';

export interface AccordionImageItem {
  id: number;
  title: string;
  subtitle?: string;
  src: string;
  alt: string;
}

interface AccordionItemProps {
  item: AccordionImageItem;
  isActive: boolean;
  accent: string;
  onActivate: () => void;
}

function AccordionItem({ item, isActive, accent, onActivate }: AccordionItemProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={item.title}
      aria-expanded={isActive}
      onMouseEnter={onActivate}
      onClick={onActivate}
      onKeyDown={(e) => e.key === 'Enter' && onActivate()}
      className="relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      style={{ width: isActive ? 370 : 62, height: 480 }}
    >
      {/* Photo */}
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-700"
        style={{ transform: isActive ? 'scale(1.02)' : 'scale(1.08)' }}
        sizes="370px"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isActive
            ? `linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.05) 100%)`
            : `linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)`,
        }}
      />

      {/* Active: gold top border */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, ${accent}, transparent)`, opacity: isActive ? 1 : 0 }}
      />

      {/* Caption */}
      <div
        className="absolute transition-all duration-500"
        style={
          isActive
            ? { bottom: 20, left: 18, right: 18 }
            : { bottom: 90, left: '50%', transform: 'translateX(-50%)' }
        }
      >
        <span
          className="block font-sans font-semibold text-white transition-all duration-500"
          style={{
            fontSize: isActive ? '0.95rem' : '0.72rem',
            whiteSpace: 'nowrap',
            transform: isActive ? 'none' : 'rotate(90deg)',
            transformOrigin: 'center center',
            letterSpacing: isActive ? '0' : '0.06em',
          }}
        >
          {item.title}
        </span>
        {isActive && item.subtitle && (
          <span className="mt-1 block font-sans text-xs leading-snug text-white/55">
            {item.subtitle}
          </span>
        )}
      </div>
    </div>
  );
}

interface ImageAccordionProps {
  items: AccordionImageItem[];
  accent?: string;
  defaultActive?: number;
}

export function ImageAccordion({ items, accent = '#C9A84C', defaultActive = 0 }: ImageAccordionProps) {
  const [active, setActive] = useState(defaultActive);

  return (
    <div className="flex items-center gap-2.5 overflow-x-auto pb-1" style={{ userSelect: 'none' }}>
      {items.map((item, i) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={i === active}
          accent={accent}
          onActivate={() => setActive(i)}
        />
      ))}
    </div>
  );
}
