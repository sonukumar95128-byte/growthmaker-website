import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#009B57",
          bright: "#63DE92",
        },
        teal: {
          deep: "#0E6B61",
        },
        navy: {
          DEFAULT: "#213B73",
        },
        bg: {
          dark: "#071420",
          deepest: "#030F1B",
          soft: "#F5FAF8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "growth-gradient": "linear-gradient(135deg, #009B57 0%, #213B73 100%)",
        "growth-gradient-soft": "linear-gradient(135deg, #63DE92 0%, #0E6B61 100%)",
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(0,155,87,0.25), transparent 60%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.25)",
        glow: "0 0 40px rgba(99,222,146,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
