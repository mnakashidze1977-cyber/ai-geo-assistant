import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#eef2f9",
          100: "#d5dff0",
          200: "#aabfe1",
          300: "#7a99cc",
          400: "#5077b5",
          500: "#2f5899",
          600: "#1e3d72",
          700: "#162e55",
          800: "#0f1f3a",
          900: "#08101e",
          950: "#040810",
        },
        slate: {
          750: "#2a3447",
          850: "#1a2233",
        },
        forest: {
          400: "#4a9e6e",
          500: "#2d7a52",
          600: "#1f5a3b",
        },
        gold: {
          400: "#d4af6a",
          500: "#b8932a",
          600: "#9a7a1e",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(ellipse at 20% 50%, rgba(30,61,114,0.4) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(29,78,82,0.3) 0%, transparent 50%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        shimmer: "shimmer 2.5s infinite",
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
