"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "framer-motion";

// Code-split the WebGL bundle; never render it on the server.
const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return (
      !!window.WebGLRenderingContext &&
      !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/** Run a callback when the main thread is idle (with a timed fallback). */
function onIdle(cb: () => void): () => void {
  const w = window as typeof window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    cancelIdleCallback?: (id: number) => void;
  };
  if (typeof w.requestIdleCallback === "function") {
    const id = w.requestIdleCallback(cb, { timeout: 1500 });
    return () => w.cancelIdleCallback?.(id);
  }
  const id = window.setTimeout(cb, 600);
  return () => window.clearTimeout(id);
}

/**
 * Hero backdrop. A static CSS base (dotted grid + glow) paints instantly so the
 * WebGL never blocks first render. The particle field then mounts only when:
 *   • the device is capable + motion-friendly,
 *   • the browser is idle (after hydration / LCP), and
 *   • the hero is actually in view (it unmounts once scrolled past, freeing the GPU).
 * Otherwise we fall back to lightweight animated CSS orbs.
 */
export function HeroBackground() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [capable, setCapable] = useState(false);
  const [idle, setIdle] = useState(false);
  const [inView, setInView] = useState(true);
  const [count, setCount] = useState(2200);

  // Capability gate.
  useEffect(() => {
    if (reduced) {
      setCapable(false);
      return;
    }
    // Max-performance mode: WebGL on desktop only. Mobile gets the lean CSS
    // background, sidestepping WebGL cost under Lighthouse's throttled mobile CPU.
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setCount(2200);
    setCapable(supportsWebGL() && !narrow && !coarse);
  }, [reduced]);

  // Defer mounting until the browser is idle so it doesn't compete with LCP/TBT.
  useEffect(() => {
    if (!capable) return;
    return onIdle(() => setIdle(true));
  }, [capable]);

  // Only render the canvas while the hero is on screen.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !capable) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [capable]);

  const show3d = capable && idle && inView;

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Static base — paints immediately, no JS needed. */}
      <div className="absolute inset-0 bg-grid mask-radial opacity-70" />
      <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[44rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      {show3d ? (
        <div className="absolute inset-0 mask-radial animate-fade-in">
          <HeroCanvas count={count} />
        </div>
      ) : (
        !capable && (
          <>
            <m.div
              className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px]"
              animate={reduced ? undefined : { x: [0, 40, 0], y: [0, -30, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <m.div
              className="absolute -right-16 top-40 h-80 w-80 rounded-full bg-iris/20 blur-[110px]"
              animate={reduced ? undefined : { x: [0, -30, 0], y: [0, 40, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )
      )}

      {/* Seamless fade into the page background. */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
