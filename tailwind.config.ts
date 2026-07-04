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
        "fixxer-orange": "#FF6B35",
        "fixxer-orange-hover": "#E55A25",
        "fixxer-charcoal": "#1A1A1A",
        "fixxer-surface": "#242424",
        "fixxer-surface-light": "#F8F7F4",
        "fixxer-text-primary": "#1A1A1A",
        "fixxer-text-muted": "#6B7280",
        "fixxer-text-on-dark": "#F5F5F0",
        "fixxer-border": "#E8E6E1",
        "whatsapp-green": "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        btn: "10px",
        input: "8px",
        pill: "24px",
      },
      boxShadow: {
        card: "0 2px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.10)",
        whatsapp: "0 4px 20px rgba(37, 211, 102, 0.35)",
        "whatsapp-hover": "0 6px 28px rgba(37, 211, 102, 0.45)",
      },
      letterSpacing: {
        caps: "0.08em",
      },
    },
  },
  plugins: [],
};
export default config;
