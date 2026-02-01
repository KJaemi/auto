import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  desc,
  ctaHref,
  ctaLabel,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div className="absolute inset-0 subtle-grid opacity-35" />
      <div className="absolute inset-0 noise opacity-40" />
      <div className="container-max relative pt-14 pb-10 md:pt-16">
        <Reveal>
          <p className="text-sm text-white/60">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">{desc}</p>
        </Reveal>
        {ctaHref && ctaLabel ? (
          <Reveal delay={0.18}>
            <div className="mt-6">
              <Link href={ctaHref} className="btn-primary">{ctaLabel}</Link>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
