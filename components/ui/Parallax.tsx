"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { getGsap } from "@/lib/gsap";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Vertical drift as a fraction of the element height across the scroll. */
  speed?: number;
}

/**
 * GSAP ScrollTrigger parallax — drifts its child as the section scrolls past.
 * GSAP is lazy-loaded on first mount to defer ~30KB of unused JS.
 */
export function Parallax({ children, className, speed = 0.18 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    let mounted = true;

    getGsap().then(({ gsap }) => {
      if (!mounted || !el) return;

      const ctx = gsap.context(() => {
        gsap.to(el, {
          yPercent: speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement ?? el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, el);

      return () => ctx.revert();
    });

    return () => {
      mounted = false;
    };
  }, [speed, reduced]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
