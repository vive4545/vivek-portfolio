import type { Variants } from "framer-motion";

/** Premium easing — a gentle "out-expo" curve used across the site. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Default viewport config so reveals fire once, slightly before fully in view. */
export const viewportOnce = { once: true, amount: 0.25, margin: "0px 0px -10% 0px" };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut } },
};

/** Parent container that staggers its children's reveal. */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};
