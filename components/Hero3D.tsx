"use client";

import dynamic from "next/dynamic";
import { Suspense, useMemo, useRef } from "react";
import type { ReactNode } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

// Canvas는 브라우저(WebGL)에서만 렌더링
const Canvas = dynamic(() => import("@react-three/fiber").then((m) => m.Canvas), { ssr: false });

type FloatingProps = {
  children: ReactNode;
  speed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
};

function Floating({
  children,
  speed = 1.2,
  rotationIntensity = 0.6,
  floatIntensity = 0.8,
}: FloatingProps) {
  const ref = useRef<Group | null>(null);
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * speed + phase;
    // gentle bob + auto-rotate
    ref.current.position.y = Math.sin(t) * 0.12 * floatIntensity;
    ref.current.rotation.y = t * 0.35 * rotationIntensity;
    ref.current.rotation.x = Math.sin(t * 0.6) * 0.08 * rotationIntensity;
  });

  return <group ref={ref}>{children}</group>;
}

function Knot() {
  const args = useMemo(() => [0.85, 0.28, 180, 22] as const, []);
  return (
    <mesh>
      <torusKnotGeometry args={args} />
      <meshStandardMaterial
        color="#bfe8ff"
        emissive="#2256ff"
        emissiveIntensity={0.35}
        roughness={0.2}
        metalness={0.15}
      />
    </mesh>
  );
}

function Wire() {
  const args = useMemo(() => [1.35, 0.4, 100, 14] as const, []);
  return (
    <mesh>
      <torusGeometry args={args} />
      <meshStandardMaterial
        color="#ffffff"
        roughness={0.4}
        metalness={0.05}
        wireframe
        opacity={0.22}
        transparent
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[2, 3, 2]} intensity={1.2} />
      <pointLight position={[-2, -1.5, -1]} intensity={0.6} />

      <Floating speed={1.4} rotationIntensity={0.9} floatIntensity={0.9}>
        <Knot />
      </Floating>
      <Floating speed={1.0} rotationIntensity={0.35} floatIntensity={0.45}>
        <Wire />
      </Floating>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-white/0" />
      <div className="absolute inset-0 noise opacity-30" />
      <div className="absolute -inset-20 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.25),transparent_60%)]" />

      <Suspense fallback={<div className="absolute inset-0 subtle-grid opacity-60" />}>
        <Canvas camera={{ position: [0, 0, 3.8], fov: 45 }}>
          <Scene />
        </Canvas>
      </Suspense>

      <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-black/35 px-3 py-2 text-xs text-white/70 backdrop-blur">
        {"실내 측위 · 상태추론 · 경로 제약 생성 → 외부 시스템 의사결정 지원"}
      </div>
    </div>
  );
}
