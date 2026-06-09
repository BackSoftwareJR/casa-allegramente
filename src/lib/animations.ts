import type { Transition, Variants } from 'framer-motion';

export const easing = {
  smooth: [0.4, 0, 0.2, 1] as const,
  gentle: [0.25, 0.1, 0.25, 1] as const,
};

export const duration = {
  fast: 0.25,
  normal: 0.5,
  slow: 0.7,
  reveal: 0.8,
};

const transitionReveal: Transition = {
  duration: duration.reveal,
  ease: easing.gentle,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionReveal,
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionReveal,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.slow, ease: easing.smooth },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export const staggerVerticalReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.35, delayChildren: 0.15 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.normal, ease: easing.smooth },
  },
};

export const viewportOptions = {
  once: true,
  amount: 0.2,
  margin: '-80px',
} as const;

/** Variants senza translate per prefers-reduced-motion */
export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: easing.smooth },
  },
};

export function motionVariants(reduced: boolean | null): Variants {
  return reduced ? fadeOnly : fadeUp;
}
