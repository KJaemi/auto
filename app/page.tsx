import Link from "next/link";
import Hero3D from "@/components/Hero3D";
import Reveal from "@/components/Reveal";
import StatCard from "@/components/StatCard";
import MediaFrame from "@/components/MediaFrame";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-mesh opacity-90" />
        <div className="absolute inset-0 subtle-grid opacity-40" />
        <div className="absolute inset-0 noise" />

        <div className="container-max relative pt-24 pb-16 md:pt-28 md:pb-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Vision 기반 무인 선적·하역 관제 플랫폼
                </p>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                  어안 카메라 한 장으로 <span className="gradient-stroke">음영 구역</span>에서도
                  <br className="hidden md:block" /> 차량을 정확히 추적합니다
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
                  {site.oneLiner}
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/solutions" className="btn-primary">
                    솔루션 보기
                  </Link>
                  <Link href="/technology" className="btn-ghost">
                    기술 보기
                  </Link>
                  <Link href="/community" className="btn-ghost">
                    문의하기
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <StatCard label="VTS" desc="차량 추적" />
                  <StatCard label="PMS" desc="주차 관리" />
                  <StatCard label="AVP" desc="무인주차" />
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <div className="card p-4 md:p-5">
                <Hero3D />
              </div>
              <p className="mt-3 text-xs text-white/55">
                * WebGL이 지원되지 않으면 자동으로 정적 배경으로 대체됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-max py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal>
            <div className="card card-hover p-6">
              <p className="text-sm text-white/60">Solutions</p>
              <h2 className="mt-2 text-2xl font-bold">내리다(Nae‑Ri‑Da)</h2>
              <p className="mt-3 text-white/70">
                GPS 음영 구역(선박/항만)에서 자율주행차량의 자동 하역을 지원하는 AI B2B/FMS 플랫폼
              </p>
              <Link href="/solutions" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                자세히 보기 <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="card card-hover p-6">
              <p className="text-sm text-white/60">Technology</p>
              <h2 className="mt-2 text-2xl font-bold">Vision‑based Localization</h2>
              <p className="mt-3 text-white/70">
                고정 카메라로 다중 객체의 위치/상태를 추론하고, 웨이포인트·경로 제약 등 행동 지시용 추상 정보를 제공합니다.
              </p>
              <Link href="/technology" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                자세히 보기 <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card card-hover p-6">
              <p className="text-sm text-white/60">Company</p>
              <h2 className="mt-2 text-2xl font-bold">관제 플랫폼 전문 기업</h2>
              <p className="mt-3 text-white/70">
                실차/모형차 실증과 디지털 트윈 기반 검증으로 빠르게 제품을 고도화합니다.
              </p>
              <Link href="/company" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                자세히 보기 <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-max pb-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm text-white/60">Highlights</p>
              <h2 className="mt-2 text-3xl font-extrabold">자료 기반으로 정리한 핵심 장면</h2>
              <p className="mt-3 max-w-2xl text-white/70">
                이미지가 잘리지 않도록 <span className="kbd">contain</span> 모드와 고정 비율 프레임을 적용했고,
                클릭 시 원본 확대가 가능합니다.
              </p>
            </div>
            <Link href="/ir" className="btn-ghost hidden sm:inline-flex">IR 보기</Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <MediaFrame src="/images/pitch_14.png" alt="시장 규모/트렌드" aspect="4/3" />
          </Reveal>
          <Reveal delay={0.06}>
            <MediaFrame src="/images/page_14.png" alt="사용 방법 및 특징" aspect="4/3" />
          </Reveal>
          <Reveal delay={0.12}>
            <MediaFrame src="/images/page_12.png" alt="고객 사례 및 레퍼런스" aspect="4/3" />
          </Reveal>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/community" className="btn-primary">데모/제휴 문의</Link>
          <Link href="/solutions" className="btn-ghost">솔루션 구성 보기</Link>
        </div>
      </section>
    </div>
  );
}
