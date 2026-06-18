"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ACCENT = new THREE.Color("#5eead4");
const IRIS = new THREE.Color("#818cf8");

/** Soft round sprite so points read as glowing dots, not hard squares. */
function makeCircleTexture(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,0.55)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

/**
 * A rotating shell of points (fibonacci-sphere distribution) tinted across the
 * accent→iris range. Auto-rotates and drifts gently toward the cursor.
 */
export function ParticleField({ count = 2600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const texture = useMemo(makeCircleTexture, []);

  // Drive parallax from a window listener so the <Canvas> can stay
  // pointer-events:none (clicks pass through to the hero CTAs).
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();
    const golden = Math.PI * (1 + Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const phi = Math.acos(1 - 2 * t);
      const theta = golden * i;
      const radius = 3.25 + (Math.random() - 0.5) * 0.7;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      color.copy(ACCENT).lerp(IRIS, Math.random() * 0.65);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  }, [count]);

  useFrame((state, delta) => {
    const points = ref.current;
    if (!points) return;
    // Clamp delta so a backgrounded tab doesn't jump on resume.
    const dt = Math.min(delta, 0.05);
    points.rotation.y += dt * 0.05;
    points.rotation.x = THREE.MathUtils.lerp(points.rotation.x, mouse.current.y * 0.3, 0.03);
    points.rotation.z = THREE.MathUtils.lerp(points.rotation.z, mouse.current.x * 0.12, 0.03);
    points.position.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        map={texture}
        alphaMap={texture}
        vertexColors
        transparent
        opacity={0.92}
        depthWrite={false}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
