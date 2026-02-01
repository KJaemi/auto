import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { notices } from "@/lib/site";

export default function CommunityPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Community"
        title="공지사항 · 온라인 문의"
        desc="제품 도입/PoC/연동/IR 등 무엇이든 문의해주세요. 현장 환경 정보를 함께 주시면 더 빠르게 제안 드릴 수 있습니다."
      />

      <section className="container-max py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card p-7">
              <p className="text-sm text-white/60">Notices</p>
              <h2 className="mt-2 text-3xl font-extrabold">공지사항</h2>
              <div className="mt-6 space-y-3">
                {notices.map((n) => (
                  <article key={n.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-bold">{n.title}</h3>
                      <time className="text-xs text-white/55">{n.date}</time>
                    </div>
                    <p className="mt-2 text-sm text-white/70">{n.body}</p>
                  </article>
                ))}
              </div>
              <p className="mt-6 text-xs text-white/55">
                * 공지사항은 현재 샘플 데이터입니다. 실제 운영 시 CMS/DB 연동으로 관리하면 편합니다.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="card p-7">
              <p className="text-sm text-white/60">Contact</p>
              <h2 className="mt-2 text-3xl font-extrabold">온라인 문의</h2>
              <p className="mt-3 text-white/70">
                문의를 남기면 서버 로그에 기록됩니다. 실제 운영에서는 이메일/슬랙/CRM 연동을 추가하세요.
              </p>
              <div className="mt-6">
                <InquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-max pb-20">
        <Reveal>
          <div className="card p-7">
            <p className="text-sm text-white/60">FAQ</p>
            <h2 className="mt-2 text-3xl font-extrabold">자주 묻는 질문</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  q: "카메라 몇 대가 필요한가요?",
                  a: "면적/가림(occlusion) 정도에 따라 다릅니다. 현장 도면과 설치 가능 위치를 공유해주시면 산정해드립니다.",
                },
                {
                  q: "외부 시스템과 연동이 가능한가요?",
                  a: "가능합니다. Socket.IO/ROS2 등 메시지 기반으로 위치/상태/제약 정보를 제공하도록 설계했습니다.",
                },
                {
                  q: "데모는 어떻게 진행되나요?",
                  a: "현장 요구사항 파악 → 카메라 배치/PoC 범위 제안 → 파일럿 적용 및 검증 → 확장 순으로 진행합니다.",
                },
                {
                  q: "IR 자료를 받을 수 있나요?",
                  a: "투자/재무 자료는 NDA 하에 제공을 권장합니다. 문의 유형에서 ‘투자/IR’를 선택해 요청해주세요.",
                },
              ].map((f) => (
                <div key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold">{f.q}</p>
                  <p className="mt-2 text-sm text-white/70">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
