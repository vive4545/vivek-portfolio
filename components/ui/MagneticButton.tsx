"use client";

import { useRef, type ReactNode } from "react";
import {
  m,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  className?: string;
  ariaLabel?: string;
  /** Magnetic pull strength (px the content can drift). */
  strength?: number;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent-strong shadow-[0_10px_40px_-12px_rgb(var(--accent)/0.7)]",
  secondary:
    "border border-border bg-surface/50 text-foreground hover:border-accent/50 hover:bg-surface",
  ghost: "text-muted hover:text-foreground",
};

/**
 * Anchor with a subtle magnetic hover — the content drifts toward the cursor
 * and springs back on leave. Disabled entirely under prefers-reduced-motion.
 */
export function MagneticButton({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className,
  ariaLabel,
  strength = 14,
}: MagneticButtonProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 16, mass: 0.4 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);
  const transform = useMotionTemplate`translate(${sx}px, ${sy}px)`;

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength * 2);
    y.set((relY / rect.height) * strength * 2);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const external_props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <m.a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      download={download || undefined}
      style={reduced ? undefined : { transform }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 will-change-transform focus-visible:outline-none",
        variants[variant],
        className,
      )}
      {...external_props}
    >
      {children}
    </m.a>
  );
}
