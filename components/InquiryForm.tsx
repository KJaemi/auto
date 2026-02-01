"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function InquiryForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<null | "ok" | "fail">(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setDone(null);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setDone(res.ok ? "ok" : "fail");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setDone("fail");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs text-white/60">이름</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25"
            placeholder="홍길동"
          />
        </div>
        <div>
          <label className="text-xs text-white/60">이메일</label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25"
            placeholder="name@company.com"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs text-white/60">회사/기관</label>
          <input
            name="org"
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25"
            placeholder="(선택) 회사명/기관명"
          />
        </div>
        <div>
          <label className="text-xs text-white/60">문의 유형</label>
          <select
            name="topic"
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25"
            defaultValue="demo"
          >
            <option value="demo">데모/PoC</option>
            <option value="integration">연동/개발</option>
            <option value="investment">투자/IR</option>
            <option value="etc">기타</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs text-white/60">내용</label>
        <textarea
          name="message"
          required
          rows={6}
          className="mt-1 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25"
          placeholder="현장 환경(면적/카메라 설치 가능 위치/차량 종류)과 원하는 시나리오를 적어주세요."
        />
      </div>

      <button disabled={loading} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
        {loading ? "전송 중..." : "문의 전송"}
      </button>

      {done === "ok" ? (
        <p className="text-sm text-emerald-300">전송되었습니다. 빠르게 회신드리겠습니다.</p>
      ) : done === "fail" ? (
        <p className="text-sm text-rose-300">전송에 실패했습니다. 잠시 후 다시 시도해주세요.</p>
      ) : (
        <p className="text-xs text-white/55">
          * 현재는 예시 API로 저장만 합니다. 실제 운영에서는 이메일/CRM 연동을 추가하세요.
        </p>
      )}
    </form>
  );
}
