import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/35 backdrop-blur">
      <div className="container-max py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-bold">{site.companyName}</p>
            <p className="mt-2 text-sm text-white/60">{site.oneLiner}</p>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Contact</p>
            <p className="mt-2 text-white/60">{site.contact.phone}</p>
            <p className="text-white/60">{site.contact.email}</p>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Quick links</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-white/70">
              <Link href="/solutions">Solutions</Link>
              <Link href="/technology">Technology</Link>
              <Link href="/company">Company</Link>
              <Link href="/ir">IR</Link>
              <Link href="/community">Community</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55">
          <p>© {new Date().getFullYear()} {site.companyName}. All rights reserved.</p>
          <p>Made with Next.js + Tailwind + Motion + Three.js</p>
        </div>
      </div>
    </footer>
  );
}
