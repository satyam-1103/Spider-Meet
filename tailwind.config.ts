import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: {
          1: "#1c1f2e",
          2: "#161925",
          3: "#252a41",
          4: "#1e2757",
        },
        blue: {
          1: "#0E78F9",
        },
        sky: {
          1: "#c9ddff",
          2: "#ecf0ff",
          3: "#f5fcff",
        },
        orange: {
          1: "#f77f00",
        },
        purple: {
          1: "#c77dff",
        },
        green: {
          1: "#83c5be",
        },
      },

      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
