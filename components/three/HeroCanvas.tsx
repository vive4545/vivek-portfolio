"use client";

import { Canvas } from "@react-three/fiber";
import { ParticleField } from "./ParticleField";

/**
 * R3F canvas for the hero. Default export so it can be code-split via
 * next/dynamic with `ssr: false` (WebGL has no business running on the server).
 */
export default function HeroCanvas({ count = 2600 }: { count?: number }) {
  return (
    <Canvas
      // Capped DPR keeps fill-rate (and battery) sane on retina displays.
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <ParticleField count={count} />
    </Canvas>
  );
}
