import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "flag-scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "flag-scroll-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "arena-thunder": {
          "0%, 17%, 20%, 54%, 57%, 81%, 84%, 100%": { opacity: "var(--flash-base)" },
          "18%": { opacity: "var(--flash-mid)" },
          "18.5%": { opacity: "var(--flash-peak)" },
          "19%": { opacity: "var(--flash-mid)" },
          "55%": { opacity: "var(--flash-mid)" },
          "55.5%": { opacity: "var(--flash-peak)" },
          "56%": { opacity: "var(--flash-mid)" },
          "82%": { opacity: "var(--flash-mid)" },
          "82.5%": { opacity: "var(--flash-peak)" },
          "83%": { opacity: "var(--flash-mid)" },
        },
        "lightning-flash": {
          "0%, 17.5%, 20%, 54.5%, 57%, 81.5%, 84%, 100%": { opacity: "0" },
          "18.5%": { opacity: "0.2" },
          "55.5%": { opacity: "0.18" },
          "82.5%": { opacity: "0.22" },
        },
        "lightning-bolt": {
          "0%, 17.8%, 19.5%, 54.8%, 56.5%, 81.8%, 83.5%, 100%": { opacity: "0" },
          "18.3%": { opacity: "1" },
          "55.3%": { opacity: "1" },
          "82.3%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "flag-scroll-left": "flag-scroll-left 60s linear infinite",
        "flag-scroll-right": "flag-scroll-right 60s linear infinite",
        "arena-thunder": "arena-thunder 15s ease-in-out infinite",
        "lightning-flash": "lightning-flash 15s ease-in-out infinite",
        "lightning-bolt": "lightning-bolt 15s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
