"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Lightbox from "@/components/Lightbox";
import { cn } from "@/lib/cn";

export default function MediaFrame({
  src,
  alt,
  aspect = "16/9",
  contain = true,
  className,
}: {
  src: string;
  alt: string;
  aspect?: string; // e.g. "16/9" or "4/3"
  contain?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  const padding = useMemo(() => (contain ? "p-4 sm:p-5" : ""), [contain]);

  return (
    <>
      <button
        type="button"
        className={cn("card card-hover group relative w-full overflow-hidden text-left", className)}
        onClick={() => setOpen(true)}
        aria-label={`${alt} 확대 보기`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-white/0 opacity-80" />
        <div className="absolute inset-0 noise opacity-20" />
        <div className="relative w-full" style={{ aspectRatio: aspect }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={cn(contain ? "object-contain" : "object-cover", padding)}
            priority={false}
          />
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
          <p className="truncate text-sm font-semibold text-white/80">{alt}</p>
          <span className="text-xs text-white/55 group-hover:text-white/75 transition">클릭하여 확대</span>
        </div>
      </button>

      <Lightbox open={open} onClose={() => setOpen(false)} src={src} alt={alt} />
    </>
  );
}
