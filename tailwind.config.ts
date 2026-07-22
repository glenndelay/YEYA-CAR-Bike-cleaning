import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        graphite: "#1B1B1D",
        gold: "#F6C313",
        purple: "#5B1EA6",
        red: "#E11919",
        navy: "#141022"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-poppins)", "Poppins", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 18px 54px rgba(20, 16, 34, 0.12)",
        glow: "0 0 0 1px rgba(91, 30, 166, 0.14), 0 18px 42px rgba(91, 30, 166, 0.14)"
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, transparent, rgba(246,195,19,.8), transparent)"
      }
    }
  },
  plugins: []
};

export default config;
