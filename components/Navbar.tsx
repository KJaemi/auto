"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

const NAV = [
  { href: "/solutions", label: "Solutions" },
  { href: "/technology", label: "Technology" },
  { href: "/company", label: "Company" },
  { href: "/ir", label: "IR" },
  { href: "/community", label: "Community" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur">
      <div className="container-max flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <span className="h-3.5 w-3.5 rounded-md bg-gradient-to-br from-sky-400 to-indigo-500" />
          </span>
          <span className="text-sm sm:text-base">{site.companyName}</span>
          <span className="hidden text-sm text-white/55 sm:inline">{site.koName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/10 transition",
                isActive(item.href) && "bg-white/12 text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/community" className="ml-2 btn-primary">
            문의
          </Link>
        </nav>

        <button
          className="md:hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          {open ? "닫기" : "메뉴"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/55 backdrop-blur">
          <div className="container-max py-3 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/10 transition",
                  isActive(item.href) && "bg-white/12 text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/community" className="mt-2 btn-primary">
              문의하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
