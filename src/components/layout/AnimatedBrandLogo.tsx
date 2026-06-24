'use client';

import Image from 'next/image';

type AnimatedBrandLogoProps = {
  variant?: 'light' | 'dark';
  className?: string;
};

export default function AnimatedBrandLogo({ variant = 'dark', className = '' }: AnimatedBrandLogoProps) {
  const isDark = variant === 'dark';

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {/* Sun logo icon */}
      <Image
        src="/images/logo-allegramente.png"
        alt="Casa AllegraMente logo"
        width={34}
        height={34}
        className={`shrink-0 rounded-full object-contain transition-opacity duration-300 ${
          isDark ? 'opacity-100' : 'opacity-90'
        }`}
        priority
      />

      {/* Wordmark: "Casa" piccolo sopra, "Allegramente" bold sotto */}
      <span className="flex flex-col leading-none">
        <span
          className="font-sans font-semibold uppercase tracking-[0.15em]"
          style={{
            fontSize: '9px',
            color: isDark ? '#9a7b6a' : 'rgba(255,255,255,0.7)',
            marginBottom: '2px',
          }}
        >
          Casa
        </span>
        <span
          className="font-display font-extrabold tracking-tight"
          style={{
            fontSize: '17px',
            letterSpacing: '-0.01em',
            lineHeight: 1,
            color: isDark ? '#2d1f14' : '#ffffff',
          }}
        >
          Allegramente
        </span>
      </span>
    </span>
  );
}
