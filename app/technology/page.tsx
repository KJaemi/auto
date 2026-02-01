import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import MediaFrame from "@/components/MediaFrame";

const pillars = [
  {
    title: "어안 카메라 기반 인지",
    body: "고정식 어안 카메라로 넓은 영역을 커버하고, 왜곡 보정/리사이즈 후 추론 파이프라인에 투입합니다.",
  },
  {
    title: "실시간 객체 탐지/추적",
    body: "YOLO 기반 탐지 결과를 시간 축으로 결합해 다중 객체의 위치/상태를 안정적으로 추정합니다.",
  },
  {
    title: "픽셀 → 실제 좌표 변환",
    body: "Homography(평면 가정) 등 기하 변환을 통해 픽셀 좌표를 mm 단위 좌표로 변환하여 제어/분석에 사용합니다.",
  },
  {
    title: "추상 행동 정보 생성",
    body: "외부 자율주행 플랫폼이 이해하기 쉬운 형태(웨이포인트, 경로 제약, 위험 구역 등)로 정보를 제공해 의사결정을 지원합니다.",
  },
  {
    title: "저지연 스트리밍/연동",
    body: "Socket.IO, ROS2 등 메시지 기반 인터페이스로 실시간 데이터 전송 및 시스템 통합을 단순화합니다.",
  },
];

export default function TechnologyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Technology"
        title="Vision → Decision: 인지 데이터를 의사결정 정보로"
        desc="카메라 기반 비전 데이터를 단순 인식에 그치지 않고, 좌표/상태/제약 정보로 변환해 외부 시스템의 행동 결정을 돕는 것이 핵심입니다."
      />

      <section className="container-max py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card p-7">
              <p className="text-sm text-white/60">Pipeline</p>
              <h2 className="mt-2 text-3xl font-extrabold">끝까지 끊기지 않는 처리 흐름</h2>
              <ol className="mt-6 space-y-3 text-sm text-white/70">
                {[
                  "영상 수집 (Edge) – 어안 카메라 스트림",
                  "전처리 – 왜곡 보정/리사이즈",
                  "탐지 – YOLO 추론 (GPU/Docker)",
                  "기하 변환 – Homography로 좌표화",
                  "상태 추론 – 점유/경로/위험 구역",
                  "전송 – Socket.IO/ROS2로 외부 시스템 연동",
                  "시각화 – 웹 대시보드 모니터링/리포트",
                ].map((s, i) => (
                  <li key={s} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-bold text-white/75">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="grid gap-6">
              <div className="card p-7">
                <p className="text-sm text-white/60">Why it matters</p>
                <h3 className="mt-2 text-xl font-bold">GPS 음영 구역에서의 운영 안정성</h3>
                <p className="mt-3 text-white/70">
                  선박 내부/항만 구역은 GNSS가 불안정합니다. 고정 카메라 기반 측위는 인프라가 단순하면서도 안정적인 운영 데이터를 제공합니다.
                </p>
              </div>
              <div className="card p-7">
                <p className="text-sm text-white/60">Integration</p>
                <h3 className="mt-2 text-xl font-bold">외부 시스템과의 자연스러운 연결</h3>
                <p className="mt-3 text-white/70">
                  관제 웹은 운영자가 확인하는 UI이고, 실제 제어는 외부 자율주행 플랫폼/물류 시스템이 담당합니다.
                  우리는 필요한 정보를 ‘추상화’해 전달합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-max pb-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm text-white/60">Evidence</p>
              <h2 className="mt-2 text-3xl font-extrabold">보유 인프라/실증 기반</h2>
              <p className="mt-3 text-white/70">
                연구실 특허 보유 현황과 모형차/실차 검증 자료를 기반으로 제품을 고도화합니다.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <MediaFrame src="/images/page_11.png" alt="특허 보유 현황 및 모형차/실차 검증" aspect="16/9" />
          </Reveal>
          <Reveal delay={0.06}>
            <MediaFrame src="/images/pitch_12.png" alt="사업/기술 요약 (IR 일부)" aspect="16/9" />
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.05}>
              <div className="card card-hover p-6">
                <p className="text-sm text-white/60">Core</p>
                <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-white/70">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
