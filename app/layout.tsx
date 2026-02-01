import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: "AUTONOMOUS PCC | 오토노머스 PCC",
  description:
    "카메라 기반 비전 데이터로 이동 객체의 위치/상태를 초정밀 추론하여 무인 선적·하역 등 외부 시스템 의사결정을 지원하는 AI 관제 플랫폼.",
  // 배포 후 도메인으로 바꿔주세요 (예: https://autonomouspcc.com)
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Background />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
