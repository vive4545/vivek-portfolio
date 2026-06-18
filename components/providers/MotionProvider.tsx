"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the `domAnimation` feature set (animations, variants, exit,
 * hover/tap/focus gestures, whileInView) instead of the full `motion` bundle —
 * meaningfully smaller JS. Every animated component uses the lightweight `m.*`
 * primitives; `strict` enforces that (using `motion.*` throws).
 *
 * Note: `domAnimation` excludes shared-layout (`layoutId`) and drag.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
