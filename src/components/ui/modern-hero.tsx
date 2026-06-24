'use client';

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useRef, type ReactNode } from 'react';

const SECTION_HEIGHT = 1500;

export interface ParallaxImageConfig {
  src: string;
  alt: string;
  start: number;
  end: number;
  className?: string;
}

export interface ModernHeroScheduleItem {
  title: string;
  date: string;
  location: string;
}

export interface SmoothScrollHeroProps {
  /** Full-bleed background image for the sticky reveal */
  heroImage: { src: string; alt: string };
  /** Eyebrow label shown above the title */
  eyebrow?: string;
  /** Main headline rendered above the hero image */
  title: ReactNode;
  /** Secondary line rendered below the opening image */
  subtitle?: ReactNode;
  /** Floating images that parallax during scroll */
  parallaxImages?: ParallaxImageConfig[];
  /** Content revealed after the scroll animation (manifesto lines, etc.) */
  children?: ReactNode;
  /** Optional id for scroll anchor */
  sectionId?: string;
  /** Background tone — warm matches AllegraMente brand */
  tone?: 'warm' | 'dark';
}

export function SmoothScrollHero({
  heroImage,
  eyebrow,
  title,
  subtitle,
  parallaxImages = [],
  children,
  sectionId,
  tone = 'warm',
}: SmoothScrollHeroProps) {
  const isWarm = tone === 'warm';

  return (
    <section
      id={sectionId}
      className={isWarm ? 'bg-linen-50' : 'bg-zinc-950'}
      aria-label={typeof eyebrow === 'string' ? eyebrow : undefined}
    >
      {/* Opening block: title above, image, subtitle below */}
      <div className="container-site relative z-10 px-4 pb-8 pt-16 md:pb-12 md:pt-20">
        {eyebrow && (
          <p className="mb-4 text-center font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
            {eyebrow}
          </p>
        )}
        <div
          className={`mx-auto max-w-4xl text-center font-display font-bold leading-[1.05] ${
            isWarm ? 'text-warm-brown' : 'text-zinc-50'
          }`}
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', letterSpacing: '-0.03em' }}
        >
          {title}
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-4">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-warm-lg">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        </div>
        {subtitle && (
          <p
            className={`mx-auto mt-6 max-w-2xl text-center font-sans text-lg italic leading-relaxed md:text-xl ${
              isWarm ? 'text-ink-muted' : 'text-zinc-400'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Scroll-driven parallax zone */}
      <HeroScrollZone
        heroImage={heroImage}
        parallaxImages={parallaxImages}
        tone={tone}
      />

      {/* Reveal content */}
      {children && (
        <div
          className={`mx-auto max-w-5xl px-4 pb-24 pt-12 md:pb-32 ${
            isWarm ? 'text-warm-brown' : 'text-white'
          }`}
        >
          {children}
        </div>
      )}
    </section>
  );
}

interface HeroScrollZoneProps {
  heroImage: { src: string; alt: string };
  parallaxImages: ParallaxImageConfig[];
  tone: 'warm' | 'dark';
}

function HeroScrollZone({ heroImage, parallaxImages, tone }: HeroScrollZoneProps) {
  const isWarm = tone === 'warm';
  const fadeColor = isWarm ? '#fdf8f4' : '#09090b';

  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage heroImage={heroImage} tone={tone} />
      {parallaxImages.length > 0 && <ParallaxImages images={parallaxImages} />}
      <div
        className="absolute bottom-0 left-0 right-0 h-96"
        style={{
          background: `linear-gradient(to bottom, transparent, ${fadeColor})`,
        }}
      />
    </div>
  );
}

function CenterImage({
  heroImage,
  tone,
}: {
  heroImage: { src: string; alt: string };
  tone: 'warm' | 'dark';
}) {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ['170%', '100%'],
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0],
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden"
      style={{ clipPath, opacity }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundSize,
          backgroundImage: `url(${heroImage.src})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className={`absolute inset-0 ${
          tone === 'warm'
            ? 'bg-gradient-to-b from-linen-50/20 via-transparent to-linen-50/40'
            : 'bg-gradient-to-b from-zinc-950/20 via-transparent to-zinc-950/60'
        }`}
      />
    </motion.div>
  );
}

function ParallaxImages({ images }: { images: ParallaxImageConfig[] }) {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      {images.map((img) => (
        <ParallaxImg key={img.src} {...img} />
      ))}
    </div>
  );
}

interface ParallaxImgProps extends ParallaxImageConfig {}

function ParallaxImg({ className, alt, src, start, end }: ParallaxImgProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl shadow-warm-md ${className ?? 'w-1/3'}`}
      style={{ transform, opacity }}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image src={src} alt={alt} fill className="object-cover" sizes="33vw" />
      </div>
    </motion.div>
  );
}

/** Animated list rows — reusable for manifesto pillars */
export function ModernHeroList({
  items,
  tone = 'warm',
}: {
  items: ModernHeroScheduleItem[];
  tone?: 'warm' | 'dark';
}) {
  const isWarm = tone === 'warm';

  return (
    <div>
      {items.map((item) => (
        <ModernHeroListItem key={`${item.title}-${item.date}`} item={item} isWarm={isWarm} />
      ))}
    </div>
  );
}

function ModernHeroListItem({
  item,
  isWarm,
}: {
  item: ModernHeroScheduleItem;
  isWarm: boolean;
}) {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      viewport={{ once: true, amount: 0.4 }}
      className={`mb-9 flex items-center justify-between border-b px-3 pb-9 ${
        isWarm ? 'border-linen-200' : 'border-zinc-800'
      }`}
    >
      <div>
        <p className={`mb-1.5 text-xl ${isWarm ? 'text-warm-brown' : 'text-zinc-50'}`}>
          {item.title}
        </p>
        <p className={`text-sm uppercase ${isWarm ? 'text-ink-muted' : 'text-zinc-500'}`}>
          {item.date}
        </p>
      </div>
      <div
        className={`flex items-center gap-1.5 text-end text-sm uppercase ${
          isWarm ? 'text-ink-muted' : 'text-zinc-500'
        }`}
      >
        <p>{item.location}</p>
        <MapPin size={14} aria-hidden="true" />
      </div>
    </motion.div>
  );
}

export function ModernHeroRevealTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      viewport={{ once: true, amount: 0.5 }}
      className={className}
    >
      {children}
    </motion.h2>
  );
}

export function ScrollHint({
  targetId,
  label,
  tone = 'warm',
}: {
  targetId: string;
  label: string;
  tone?: 'warm' | 'dark';
}) {
  return (
    <button
      type="button"
      onClick={() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }}
      className={`flex items-center gap-1 text-xs ${
        tone === 'warm' ? 'text-ink-muted' : 'text-zinc-400'
      }`}
    >
      {label} <ArrowRight size={12} aria-hidden="true" />
    </button>
  );
}
