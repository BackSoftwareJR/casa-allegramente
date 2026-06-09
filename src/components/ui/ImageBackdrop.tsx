import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type OverlayStrength = 'cinematic' | 'strong' | 'medium' | 'light' | 'burgundy';

const overlayClass: Record<OverlayStrength, string> = {
  cinematic: 'from-ink/97 via-ink/92 to-ink/88',
  strong: 'from-ink/92 via-ink/78 to-ink/65',
  medium: 'from-ink/85 via-ink/70 to-ink/55',
  light: 'from-cedar/75 via-cedar/45 to-cedar/20',
  burgundy: 'from-burgundy-dark/96 via-burgundy/90 to-ink/88',
};

type ImageBackdropProps = {
  src: string;
  alt?: string;
  overlay?: OverlayStrength;
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
};

export function ImageBackdrop({
  src,
  alt = '',
  overlay = 'medium',
  className,
  imageClassName,
  children,
}: ImageBackdropProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div
        className={cn('absolute inset-0 bg-cover bg-center', imageClassName)}
        style={{ backgroundImage: `url(${src})` }}
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        aria-hidden={!alt}
      />
      <div className={cn('absolute inset-0 bg-gradient-to-br', overlayClass[overlay])} aria-hidden />
      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  );
}
