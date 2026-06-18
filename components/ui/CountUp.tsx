"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { getGsap } from "@/lib/gsap";

/**
 * Counts a stat up from zero when it scrolls into view (GSAP ScrollTrigger).
 * GSAP is lazy-loaded on first mount to defer ~30KB of unused JS.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([\d.,]+)(.*)$/);
    if (!match || reduced) {
      el.textContent = value;
      return;
    }

    const numStr = match[1];
    const suffix = match[2];
    const target = parseFloat(numStr.replace(/,/g, ""));
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const grouped = numStr.includes(",");

    const format = (n: number) => {
      if (grouped) {
        return n.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
      }
      return n.toFixed(decimals);
    };

    let mounted = true;

    getGsap().then(({ gsap }) => {
      if (!mounted || !el) return;

      const counter = { n: 0 };
      el.textContent = format(0) + suffix;

      const tween = gsap.to(counter, {
        n: target,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = format(counter.n) + suffix;
        },
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => {
      mounted = false;
    };
  }, [value, reduced]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
