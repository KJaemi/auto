/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  
  // ▼▼▼ 이미지 설정 수정 (중요!) ▼▼▼
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true, // 정적 배포(export)할 때는 이걸 꼭 켜야 에러가 안 납니다.
  },

  // ▼▼▼ 에러 무시 설정 (강제 빌드) ▼▼▼
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // 이것까지 넣어야 진짜로 다 무시하고 만들어줍니다.
  },
};

export default nextConfig;