'use client';

import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { brand } from '@/lib/brand-colors';
import { cn } from '@/lib/utils';

const BRAND_FILLS = [
  brand.orange.vivid,
  brand.green.vivid,
  brand.yellow.accent,
  brand.terracotta.vivid,
  brand.orange.accent,
  brand.green.accent,
  brand.brown.accent,
] as const;

function randomColor(prev?: string): string {
  const pool = BRAND_FILLS.filter((c) => c !== prev);
  return pool[Math.floor(Math.random() * pool.length)];
}

type PolymorphicProps<C extends React.ElementType> = {
  as?: C;
  children?: React.ReactNode;
  className?: string;
  color?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'children' | 'className'>;

export function FlowButton<C extends React.ElementType = 'button'>({
  as,
  children,
  className,
  color: colorProp,
  icon,
  iconPosition = 'right',
  ...props
}: PolymorphicProps<C>) {
  const [fillColor] = React.useState<string>(() => colorProp ?? randomColor());
  const Comp = (as ?? 'button') as React.ElementType;

  const isLink = Comp === 'a' || (props as Record<string, unknown>).href !== undefined;

  return (
    <Comp
      {...props}
      className={cn(
        'group relative inline-flex cursor-pointer items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-black/20 bg-transparent px-7 py-3 font-sans text-sm font-semibold text-ink transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]',
        'hover:rounded-[14px] hover:border-transparent hover:text-white active:scale-[0.96]',
        isLink && 'no-underline',
        className,
      )}
    >
      {/* Left arrow — enters from left on hover */}
      <ArrowRight
        size={15}
        className="absolute left-[-20%] z-10 stroke-ink transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-4 group-hover:stroke-white"
        aria-hidden="true"
      />

      {/* Optional custom icon (replaces right arrow) */}
      {icon && iconPosition === 'left' && (
        <span className="relative z-10 mr-0.5 transition-all duration-[800ms] ease-out group-hover:translate-x-3 group-hover:opacity-0">
          {icon}
        </span>
      )}

      {/* Text — slides right on hover */}
      <span className="relative z-10 -translate-x-2.5 transition-all duration-[800ms] ease-out group-hover:translate-x-3">
        {children}
      </span>

      {icon && iconPosition === 'right' && (
        <span className="relative z-10 ml-0.5 transition-all duration-[800ms] ease-out group-hover:translate-x-3 group-hover:opacity-0">
          {icon}
        </span>
      )}

      {/* Expanding color circle */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-[240px] group-hover:w-[240px] group-hover:opacity-100"
        style={{ backgroundColor: fillColor }}
      />

      {/* Right arrow — exits right on hover */}
      <ArrowRight
        size={15}
        className="absolute right-4 z-10 stroke-ink transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-20%] group-hover:stroke-white"
        aria-hidden="true"
      />
    </Comp>
  );
}
