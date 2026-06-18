"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function generatePositions(count: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Distribute points through a spherical shell so the cloud reads as a
    // hollow sphere with depth rather than a solid ball.
    const radius = 1.15 + Math.random() * 0.7;
    const theta = Math.acos(2 * Math.random() - 1);
    const phi = Math.random() * Math.PI * 2;
    positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = radius * Math.cos(theta);
  }
  return positions;
}

function createDotTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  );
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.3, "rgba(255,255,255,0.75)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function ParticleCloud({ reduced }: { reduced: boolean }) {
  const tilt = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Group>(null);

  const count = useMemo(
    () => (typeof window !== "undefined" && window.innerWidth < 768 ? 2400 : 4200),
    [],
  );
  const positions = useMemo(() => generatePositions(count), [count]);
  const texture = useMemo(() => createDotTexture(), []);

  useEffect(() => () => texture.dispose(), [texture]);

  useFrame((state, delta) => {
    if (spin.current && !reduced) {
      spin.current.rotation.y += delta * 0.04;
    }
    if (tilt.current) {
      const targetX = reduced ? 0 : state.pointer.y * 0.25;
      const targetY = reduced ? 0 : state.pointer.x * 0.3;
      tilt.current.rotation.x += (targetX - tilt.current.rotation.x) * 0.04;
      tilt.current.rotation.y += (targetY - tilt.current.rotation.y) * 0.04;
    }
  });

  return (
    <group ref={tilt}>
      <group ref={spin}>
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[positions, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            map={texture}
            size={0.02}
            sizeAttenuation
            transparent
            opacity={0.9}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            color="#ffffff"
          />
        </points>
      </group>
    </group>
  );
}

export function ParticleField() {
  const reduced = useReducedMotion();

  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 2.6], fov: 60 }}
    >
      <ParticleCloud reduced={Boolean(reduced)} />
    </Canvas>
  );
}
