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
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        brand: {
          primary: "hsl(var(--brand-primary))",
          secondary: "hsl(var(--brand-secondary))",
          tertiary: "hsl(var(--brand-tertiary))",
          "gray-600": "hsl(var(--brand-gray-600))",
          "gray-700": "hsl(var(--brand-gray-700))",
          "text-primary": "hsl(var(--brand-text-primary))",
          "text-secondary": "hsl(var(--brand-text-secondary))",
          "text-tertiary": "hsl(var(--brand-text-tertiary))",
          "fill-50": "hsl(var(--brand-fill-50))",
          "fill-200": "hsl(var(--brand-fill-200))",
          "fill-400": "hsl(var(--brand-fill-400))",
          "fill-600": "hsl(var(--brand-fill-600))",
          "color-100": "hsl(var(--brand-color-100))",
          "color-200": "hsl(var(--brand-color-200))",
          "color-300": "hsl(var(--brand-color-300))",
          "color-400": "hsl(var(--brand-color-400))",
          "color-600": "hsl(var(--brand-color-600))",
          "blue-100": "hsl(var(--brand-blue-100))",
          "blue-600": "hsl(var(--brand-blue-600))",
          "teal-50": "hsl(var(--brand-teal-50))",
          "teal-600": "hsl(var(--brand-teal-600))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          gradient: {
            start: "hsl(var(--background-gradient) / 0)",
            middle: "hsl(var(--background-gradient) / 0.08)",
            end: "hsl(var(--background-gradient) / 0.2)",
          },
        },
        foreground: "hsl(var(--foreground))",
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
          foreground: "hsl(var(--card-foreground) / 0.36)",
          title: "hsl(var(--card-foreground) / 0.7)",
          content: {
            background: "hsl(var(--card-content-background))",
            border: "hsl(var(--card-content-border))",
          },
        },
        dialog: {
          background: "hsl(var(--brand-text-tertiary))",
        },
        command: {
          background: "hsl(var(--command-background))",
          bar: {
            foreground: "hsl(var(--brand-text-secondary))",
            background: "hsl(var(--command-search-background))",
          },
          keys: {
            foreground: "hsl(var(--command-keys-foreground))",
          },
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
        "custom-enter": {
          "0%": {
            width: "100%",
            top: "0",
            transform: "translateX(-50%)",
            opacity: "0",
          },
          "100%": {
            width: "75%",
            top: "10vh",
            opacity: "100%",
          },
        },
        "custom-exit": {
          "0%": {
            width: "75%",
            top: "10vh",
            opacity: "100%",
          },
          "100%": {
            width: "100%",
            top: "0",
            transform: "translateX(-50%)",
            opacity: "0",
          },
        },

        "custom-enter-mobile": {
          "0%": {
            width: "100%",
            top: "0",
            transform: "translateX(-50%)",
            opacity: "0",
          },
          "100%": {
            width: "90%",
            top: "10vh",
            opacity: "100%",
          },
        },
        "custom-exit-mobile": {
          "0%": {
            width: "90%",
            top: "10vh",
            opacity: "100%",
          },
          "100%": {
            width: "100%",
            top: "0",
            transform: "translateX(-50%)",
            opacity: "0",
          },
        },

        "custom-command-bar-exit": {
          "0%": {
            width: "100%",
            top: "0",
            opacity: "100%",
            left: "0",
            transform: "translateX(0%)",
            "border-radius": "0",
            "max-height": "90px",
          },
          "100%": {
            width: "75%",
            top: "10vh",
            transform: "translateX(-50%)",
            left: "50%",
            "border-radius": "1rem",
            "max-height": "70px",
          },
        },
        "custom-command-bar-enter": {
          "0%": {
            width: "75%",
            top: "5%",
            transform: "translateX(-50%)",
            left: "50%",
            opacity: "0",
            "border-radius": "1rem",
            "max-height": "70px",
          },
          "100%": {
            width: "100%",
            top: "0",
            opacity: "100%",
            left: "0",
            transform: "translateX(0%)",
            "border-radius": "0",
            "max-height": "90px",
          },
        },
        "custom-command-list-open": {
          "0%": { "max-height": "0" },
          "100%": { "max-height": `${532 + 72}px` },
        },
        "custom-command-list-close": {
          "0%": { "max-height": `${532 + 72}px` },
          "100%": { "max-height": "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "custom-enter":
          "custom-enter var(--animation-duration) cubic-bezier(var(--animation-curve))",
        "custom-exit":
          "custom-exit var(--animation-duration) cubic-bezier(var(--animation-curve))",
        "custom-enter-mobile":
          "custom-enter-mobile var(--animation-duration) cubic-bezier(var(--animation-curve))",
        "custom-exit-mobile":
          "custom-exit-mobile var(--animation-duration) cubic-bezier(var(--animation-curve))",
        "custom-command-bar-exit":
          "custom-command-bar-exit var(--animation-duration) cubic-bezier(var(--animation-curve))",
        "custom-command-bar-enter":
          "custom-command-bar-enter var(--animation-duration) cubic-bezier(var(--animation-curve))",
        "custom-command-list-open":
          "custom-command-list-open var(--animation-duration) cubic-bezier(var(--animation-curve))",
        "custom-command-list-close":
          "custom-command-list-close var(--animation-duration) cubic-bezier(var(--animation-curve))",
      },
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
