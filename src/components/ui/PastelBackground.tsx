'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { brand } from '@/lib/brand-colors';

const SHAPES = [
  { fill: `${brand.orange.soft}80`, left: '5%', top: '10%', w: 420, h: 340, delay: 0, duration: 16 },
  { fill: `${brand.green.soft}75`, left: '78%', top: '6%', w: 380, h: 310, delay: 1, duration: 18 },
  { fill: `${brand.yellow.soft}70`, left: '68%', top: '65%', w: 460, h: 380, delay: 0.5, duration: 20 },
  { fill: `${brand.terracotta.soft}65`, left: '12%', top: '72%', w: 360, h: 290, delay: 2, duration: 17 },
  { fill: `${brand.green.soft}60`, left: '42%', top: '40%', w: 300, h: 240, delay: 1.5, duration: 22 },
  { fill: `${brand.orange.soft}55`, left: '52%', top: '25%', w: 240, h: 200, delay: 2.5, duration: 19 },
] as const;

export default function PastelBackground() {
  const prefersReduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-linen-100"
      aria-hidden="true"
    >
      {SHAPES.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[56px]"
          style={{
            left: shape.left,
            top: shape.top,
            width: shape.w,
            height: shape.h,
            backgroundColor: shape.fill,
          }}
          initial={false}
          animate={
            prefersReduced
              ? undefined
              : {
                  x: [0, 28, -14, 0],
                  y: [0, -22, 16, 0],
                  scale: [1, 1.08, 0.96, 1],
                }
          }
          transition={
            prefersReduced
              ? undefined
              : {
                  duration: shape.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: shape.delay,
                }
          }
        />
      ))}
    </div>
  );
}
