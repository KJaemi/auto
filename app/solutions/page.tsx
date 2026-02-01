import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import MediaFrame from "@/components/MediaFrame";
import Link from "next/link";

export default function SolutionsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Solutions"
        title="내리다(Nae‑Ri‑Da) – 무인 선적·하역 관제 플랫폼"
        desc="항만·선박 내부처럼 GPS가 닿지 않는 환경에서도, 고정식 카메라 기반 비전 데이터로 차량의 위치·상태를 추론하고 외부 시스템이 최적 의사결정을 내리도록 돕습니다."
        ctaHref="/community"
        ctaLabel="데모/제휴 문의"
      />

      <section className="container-max py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="card card-hover p-6">
              <p className="text-sm text-white/60">01</p>
              <h3 className="mt-2 text-xl font-bold">차량 추적 (VTS)</h3>
              <p className="mt-3 text-white/70">
                실시간 위치 추정과 이동 경로 모니터링으로 다수 차량의 상태를 한 화면에서 파악합니다.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="card card-hover p-6">
              <p className="text-sm text-white/60">02</p>
              <h3 className="mt-2 text-xl font-bold">주차 관리 (PMS)</h3>
              <p className="mt-3 text-white/70">
                공간 점유/빈자리 상태를 추론해 구역 운영을 자동화하고, 회전율을 개선합니다.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="card card-hover p-6">
              <p className="text-sm text-white/60">03</p>
              <h3 className="mt-2 text-xl font-bold">무인 주차/발렛 (AVP)</h3>
              <p className="mt-3 text-white/70">
                웨이포인트/경로 제약 정보를 제공하여 외부 자율주행 플랫폼이 안전하게 주차를 완료하도록 지원합니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-max pb-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <p className="text-sm text-white/60">System Architecture</p>
              <h2 className="mt-2 text-3xl font-extrabold">엣지–서버–웹 관제 3계층</h2>
              <p className="mt-4 text-white/70">
                엣지 디바이스에서 영상 수집 → 중앙 GPU 서버에서 추론/집계 → 웹 대시보드 및 외부 시스템으로 실시간 데이터 제공.
              </p>

              <div className="mt-6 space-y-3 text-sm text-white/70">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white/80">엣지 디바이스</p>
                  <p className="mt-1">Raspberry Pi + 어안 카메라로 MJPEG 스트림 수집</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white/80">중앙 연산 서버</p>
                  <p className="mt-1">Docker 기반 GPU 서버에서 YOLO 추론/후처리/데이터 집계</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white/80">웹 관제 + 외부 시스템</p>
                  <p className="mt-1">React 대시보드로 모니터링, Socket.IO/ROS2 등으로 연동</p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/technology" className="btn-primary">기술 보기</Link>
                <Link href="/ir" className="btn-ghost">IR 보기</Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <MediaFrame src="/images/company_5.png" alt="내리다 시스템 아키텍처" aspect="16/9" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
