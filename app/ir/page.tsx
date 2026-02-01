import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import MediaFrame from "@/components/MediaFrame";
import Link from "next/link";

const highlights = [
  {
    title: "문제의 크기",
    body: "선박 1대 기준 최소 3.5억 수준의 인건비/관리비/사고 리스크가 존재합니다.",
  },
  {
    title: "핵심 솔루션",
    body: "고정 카메라 기반 관제 + 데이터 분석 리포트 + 차량 연동 제어/V2X 프로토콜 적용을 통해 자동 하역을 지원합니다.",
  },
  {
    title: "시장 기회",
    body: "PCC 시장은 글로벌 해상 차량 수송을 기반으로 TAM/SAM/SOM으로 단계적 확장이 가능합니다.",
  },
];

export default function IRPage() {
  return (
    <div>
      <PageHeader
        eyebrow="IR"
        title="투자/재무/자료(요약)"
        desc="홈페이지 공개용으로 정리한 IR 요약 섹션입니다. 상세 재무/지표/계약 정보는 비공개 자료로 별도 제공하는 형태가 일반적입니다."
        ctaHref="/community"
        ctaLabel="IR 자료 요청"
      />

      <section className="container-max py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.06}>
              <div className="card card-hover p-6">
                <p className="text-sm text-white/60">Key</p>
                <h3 className="mt-2 text-xl font-bold">{h.title}</h3>
                <p className="mt-3 text-white/70">{h.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-max pb-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm text-white/60">IR Slides</p>
              <h2 className="mt-2 text-3xl font-extrabold">핵심 슬라이드(이미지)</h2>
              <p className="mt-3 text-white/70">
                원본 슬라이드/표/재무자료는 <Link href="/community" className="underline decoration-white/20 underline-offset-4">온라인 문의</Link>로 요청해주세요.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <MediaFrame src="/images/pitch_15.png" alt="핵심 솔루션 – 내리다(Nae‑Ri‑Da) 구성" aspect="16/9" />
          </Reveal>
          <Reveal delay={0.06}>
            <MediaFrame src="/images/pitch_3.png" alt="문제 인식 – 선박 1대 기준 비용/사고" aspect="16/9" />
          </Reveal>
          <Reveal>
            <MediaFrame src="/images/pitch_13.png" alt="시장 규모 – TAM/SAM/SOM" aspect="16/9" />
          </Reveal>
          <Reveal delay={0.06}>
            <MediaFrame src="/images/pitch_12.png" alt="고객 사례 및 주요 레퍼런스" aspect="16/9" />
          </Reveal>
          <Reveal>
            <MediaFrame src="/images/pitch_14.png" alt="사용 방법 및 특징" aspect="16/9" />
          </Reveal>
          <Reveal delay={0.06}>
            <MediaFrame src="/images/pitch_2.png" alt="창업 배경 및 동기 – 문제 인식" aspect="16/9" />
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 card p-7">
            <p className="text-sm text-white/60">Disclosure</p>
            <h3 className="mt-2 text-xl font-bold">공개 범위 안내</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc pl-5">
              <li>정확한 재무(매출/손익/현금흐름), 계약/파이프라인은 NDA 하에 제공하는 것을 권장합니다.</li>
              <li>홈페이지는 ‘문제–해결–시장–검증’의 흐름만 담고, 민감 정보는 커뮤니티 문의로 유도합니다.</li>
              <li>현재 페이지는 PDF를 기반으로 만든 초안입니다. 공개 전에 최신 수치/근거를 업데이트해주세요.</li>
            </ul>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
