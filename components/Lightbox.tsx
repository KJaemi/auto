"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Lightbox({
  open,
  onClose,
  src,
  alt,
}: {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur" onClick={onClose}>
      <div className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/40" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-sm">
          <p className="truncate font-semibold text-white/80">{alt}</p>
          <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 hover:bg-white/10" onClick={onClose}>
            닫기 (Esc)
          </button>
        </div>
        <div className="relative h-[78vh] w-full">
          <Image src={src} alt={alt} fill className="object-contain p-4" sizes="100vw" priority />
        </div>
      </div>
    </div>
  );
}
