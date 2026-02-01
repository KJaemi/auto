import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Apple SD Gothic Neo", "Pretendard", "Segoe UI", "Roboto", "Helvetica", "Arial", "Noto Sans KR", "sans-serif"],
      },
      colors: {
        ink: "#0b0f19",
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(1200px circle at 50% 0%, rgba(59,130,246,0.22), transparent 55%)",
        "mesh": "radial-gradient(700px circle at 10% 10%, rgba(56,189,248,0.15), transparent 50%), radial-gradient(900px circle at 90% 10%, rgba(99,102,241,0.18), transparent 55%), radial-gradient(800px circle at 50% 90%, rgba(34,197,94,0.10), transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.45)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-40%)" },
          "100%": { transform: "translateX(140%)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
