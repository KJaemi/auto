"use client";

import ParticleField from "@/components/ParticleField";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <ParticleField />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black" />
    </div>
  );
}
