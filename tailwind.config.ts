import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020c1b",
          900: "#051923",
          800: "#0a2540",
          700: "#0d3460",
          600: "#104d8a",
        },
        emergency: {
          600: "#b91c1c",
          500: "#dc2626",
          400: "#ef4444",
          300: "#fca5a5",
        },
        azure: {
          600: "#0052cc",
          500: "#0066ff",
          400: "#3385ff",
        },
        surface: {
          DEFAULT: "#f0f4f8",
          dark: "#e2e8f0",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "siren": "siren 0.8s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        "pulse-ring": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "siren": {
          "0%": { boxShadow: "0 0 20px 5px rgba(220, 38, 38, 0.6)" },
          "100%": { boxShadow: "0 0 40px 15px rgba(220, 38, 38, 0.2)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #020c1b 0%, #0a2540 50%, #0d3460 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(10, 37, 64, 0.9), rgba(5, 25, 35, 0.95))",
        "red-gradient": "linear-gradient(135deg, #b91c1c, #dc2626)",
        "cta-gradient": "linear-gradient(135deg, #020c1b 0%, #0d3460 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
