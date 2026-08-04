import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F6F8FC",
        surface: "#FFFFFF",
        "surface-muted": "#F8FAFC",
        primary: "#155EEF",
        "primary-hover": "#004EEB",
        "primary-light": "#EAF2FF",
        accent: "#7C3AED",
        "accent-light": "#F1EAFE",
        "text-primary": "#101828",
        "text-secondary": "#475467",
        "text-muted": "#667085",
        border: "#E4E7EC",
        success: "#039855",
        warning: "#DC6803",
        error: "#D92D20"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(16, 24, 40, 0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;
