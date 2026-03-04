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
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        "border-hover": "var(--border-hover)",
        text: "var(--text)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        accent: "var(--accent)",
        hotpink: "var(--hotpink)",
        red: "var(--red)",
        green: "var(--green)",
        blue: "var(--blue)",
      },
      fontFamily: {
        display: ["var(--font-caveat)", "cursive"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      borderRadius: {
        card: "10px",
        btn: "6px",
        pill: "24px",
      },
      transitionDuration: {
        DEFAULT: "150ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
    },
  },
  plugins: [],
};

export default config;
