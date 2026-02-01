/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Vercel 빌드에서 eslint로 실패하는 케이스를 방지
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
