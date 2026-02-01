import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import MediaFrame from "@/components/MediaFrame";
import { site } from "@/lib/site";

const timeline = [
  { year: "2024", body: "비전 기반 실내 측위/추적 파이프라인 구축 및 프로토타입 개발" },
  { year: "2025", body: "모형차/실차 테스트베드 검증, 웹 관제/연동 기능 확장" },
  { year: "2026", body: "항만/선박 환경 적용 및 PoC 확대(계획)" },
];

const awards = [
  "정부/지자체 창업·R&D 프로그램 지원(해당 시 교체)",
  "산학 협력 및 테스트베드 연계(해당 시 교체)",
  "특허·출원 진행(페이지 참고)",
];

export default function CompanyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Company"
        title="오토노머스 PCC – AI 관제 플랫폼 전문 기업"
        desc="실증 기반으로 빠르게 검증하고, 운영 데이터로 제품을 고도화합니다. ‘비전 → 의사결정’의 연결을 가장 현실적인 형태로 구현합니다."
      />

      <section className="container-max py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="card p-6">
              <p className="text-sm text-white/60">Mission</p>
              <h3 className="mt-2 text-xl font-bold">현장에 바로 적용 가능한 관제</h3>
              <p className="mt-3 text-white/70">
                대규모 인프라 변경 없이, 고정 카메라로 운영 환경을 계측하고 의사결정 정보를 제공합니다.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="card p-6">
              <p className="text-sm text-white/60">Focus</p>
              <h3 className="mt-2 text-xl font-bold">선박/항만 · 대형 주차장</h3>
              <p className="mt-3 text-white/70">
                GPS 음영 구역, 복잡한 동선, 다수 객체가 공존하는 환경을 타깃으로 합니다.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card p-6">
              <p className="text-sm text-white/60">Strength</p>
              <h3 className="mt-2 text-xl font-bold">연동 중심 설계</h3>
              <p className="mt-3 text-white/70">
                웹 UI뿐 아니라 ROS2/Socket 기반 외부 시스템 연동을 전제로 설계되어 통합 비용을 낮춥니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-max pb-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="card p-7">
              <p className="text-sm text-white/60">History</p>
              <h2 className="mt-2 text-3xl font-extrabold">연혁</h2>
              <div className="mt-6 space-y-3">
                {timeline.map((t) => (
                  <div key={t.year} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-sm font-semibold text-white/80">{t.year}</p>
                    <p className="mt-1 text-sm text-white/70">{t.body}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-white/55">
                * 위 연혁/수상은 PDF 기반 초안이며, 실제 공개 전 확정 정보로 업데이트하는 것을 권장합니다.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="card p-7">
              <p className="text-sm text-white/60">Awards & Recognition</p>
              <h2 className="mt-2 text-3xl font-extrabold">수상/선정</h2>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {awards.map((a) => (
                  <li key={a} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <MediaFrame src="/images/page_10.png" alt="실차용 HW/SW 자산 보유현황" aspect="16/9" />
          </Reveal>
          <Reveal delay={0.06}>
            <MediaFrame src="/images/page_13.png" alt="팀원 소개 (VTS/PMS/AVP)" aspect="16/9" />
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="card p-6">
              <p className="text-sm text-white/60">Locations</p>
              <h3 className="mt-2 text-xl font-bold">오피스/연구소</h3>
              <div className="mt-4 space-y-2 text-sm text-white/70">
                {site.locations.map((l) => (
                  <div key={l.name} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="font-semibold text-white/80">{l.name}</p>
                    <p className="text-white/70">{l.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="card p-6 lg:col-span-2">
              <p className="text-sm text-white/60">Contact</p>
              <h3 className="mt-2 text-xl font-bold">협업/도입 문의</h3>
              <p className="mt-3 text-white/70">
                현장 환경(면적, 카메라 설치 가능 위치, 차량 종류)과 원하는 운영 시나리오를 알려주시면 빠르게 도입 범위를 제안드립니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${site.contact.phone.replaceAll(".", "")}`} className="btn-ghost">
                  {site.contact.phone}
                </a>
                <a href={`mailto:${site.contact.email}`} className="btn-primary">
                  {site.contact.email}
                </a>
              </div>
              <p className="mt-4 text-xs text-white/55">
                * 이메일/전화는 PDF의 정보로 설정되어 있습니다. 공개 전 최신 정보로 확인해주세요.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
