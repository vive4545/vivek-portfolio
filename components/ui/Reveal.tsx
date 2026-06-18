"use client";

import { type ReactNode } from "react";
import { m, useReducedMotion, type Variants } from "framer-motion";
import { easeOut, viewportOnce } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
}

/**
 * Fade + slide a block into view on scroll. Fully static when the user
 * prefers reduced motion (renders content immediately, no transform).
 */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const reduced = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: easeOut, delay },
    },
  };

  return (
    <m.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </m.div>
  );
}
