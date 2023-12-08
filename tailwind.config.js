/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./composables/**/*.{vue,js,ts,jsx,tsx}",
    "./plugins/**/*.{vue,js,ts,jsx,tsx}",
    "./utils/**/*.{vue,js,ts,jsx,tsx}",
    "./app.{vue,js,ts,jsx,tsx}",
    "./error.{vue,js,ts,jsx,tsx}",
    "./app.config.{vue,js,ts,jsx,tsx}",
    "./stories/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{vue,js,ts,jsx,tsx,mdx}",
    /** Some global style may be injected in plugin config */
    "./nuxt.config.{ts,js}",
    "./config/**/*.{js,ts,mjs,cjs,mts,cts}",
  ],
  theme: {
    /** referring js object will break intellisense 🙏 */
    screens: { tablet: "768px", laptop: "1024px", desktop: "1200px" },
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--sui-color-primary-tw-600) / <alpha-value>)",
          50: "hsl(var(--sui-color-primary-tw-50) / <alpha-value>)",
          100: "hsl(var(--sui-color-primary-tw-100) / <alpha-value>)",
          200: "hsl(var(--sui-color-primary-tw-200) / <alpha-value>)",
          300: "hsl(var(--sui-color-primary-tw-300) / <alpha-value>)",
          400: "hsl(var(--sui-color-primary-tw-400) / <alpha-value>)",
          500: "hsl(var(--sui-color-primary-tw-500) / <alpha-value>)",
          600: "hsl(var(--sui-color-primary-tw-600) / <alpha-value>)",
          700: "hsl(var(--sui-color-primary-tw-700) / <alpha-value>)",
          800: "hsl(var(--sui-color-primary-tw-800) / <alpha-value>)",
          900: "hsl(var(--sui-color-primary-tw-900) / <alpha-value>)",
        },
        default: {
          DEFAULT: "hsl(var(--sui-color-default-tw-200) / <alpha-value>)",
          50: "hsl(var(--sui-color-default-tw-50) / <alpha-value>)",
          100: "hsl(var(--sui-color-default-tw-100) / <alpha-value>)",
          200: "hsl(var(--sui-color-default-tw-200) / <alpha-value>)",
          300: "hsl(var(--sui-color-default-tw-300) / <alpha-value>)",
          400: "hsl(var(--sui-color-default-tw-400) / <alpha-value>)",
          500: "hsl(var(--sui-color-default-tw-500) / <alpha-value>)",
          600: "hsl(var(--sui-color-default-tw-600) / <alpha-value>)",
          700: "hsl(var(--sui-color-default-tw-700) / <alpha-value>)",
          800: "hsl(var(--sui-color-default-tw-800) / <alpha-value>)",
          900: "hsl(var(--sui-color-default-tw-900) / <alpha-value>)",
        },
        text: {
          DEFAULT: "var(--sui-color-text-800)",
          300: "var(--sui-color-text-300)",
          350: "var(--sui-color-text-350)",
          400: "var(--sui-color-text-400)",
          450: "var(--sui-color-text-450)",
          500: "var(--sui-color-text-500)",
          550: "var(--sui-color-text-550)",
          600: "var(--sui-color-text-600)",
          650: "var(--sui-color-text-650)",
          700: "var(--sui-color-text-700)",
          750: "var(--sui-color-text-750)",
          800: "var(--sui-color-text-800)",
          850: "var(--sui-color-text-850)",
          900: "var(--sui-color-text-900)",
          950: "var(--sui-color-text-950)",
          1000: "var(--sui-color-text-1000)",
          1050: "var(--sui-color-text-1050)",
          1100: "var(--sui-color-text-1100)",
          1150: "var(--sui-color-text-1150)",
          1200: "var(--sui-color-text-1200)",
          1250: "var(--sui-color-text-1250)",
          1300: "var(--sui-color-text-1300)",
          1350: "var(--sui-color-text-1350)",
          1400: "var(--sui-color-text-1400)",
        },
        success: {
          DEFAULT: "hsl(var(--sui-color-success-tw-500) / <alpha-value>)",
          50: "hsl(var(--sui-color-success-tw-50) / <alpha-value>)",
          100: "hsl(var(--sui-color-success-tw-100) / <alpha-value>)",
          200: "hsl(var(--sui-color-success-tw-200) / <alpha-value>)",
          300: "hsl(var(--sui-color-success-tw-300) / <alpha-value>)",
          400: "hsl(var(--sui-color-success-tw-400) / <alpha-value>)",
          500: "hsl(var(--sui-color-success-tw-500) / <alpha-value>)",
          600: "hsl(var(--sui-color-success-tw-600) / <alpha-value>)",
          700: "hsl(var(--sui-color-success-tw-700) / <alpha-value>)",
          800: "hsl(var(--sui-color-success-tw-800) / <alpha-value>)",
          900: "hsl(var(--sui-color-success-tw-900) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsl(var(--sui-color-warning-tw-500) / <alpha-value>)",
          50: "hsl(var(--sui-color-warning-tw-50) / <alpha-value>)",
          100: "hsl(var(--sui-color-warning-tw-100) / <alpha-value>)",
          200: "hsl(var(--sui-color-warning-tw-200) / <alpha-value>)",
          300: "hsl(var(--sui-color-warning-tw-300) / <alpha-value>)",
          400: "hsl(var(--sui-color-warning-tw-400) / <alpha-value>)",
          500: "hsl(var(--sui-color-warning-tw-500) / <alpha-value>)",
          600: "hsl(var(--sui-color-warning-tw-600) / <alpha-value>)",
          700: "hsl(var(--sui-color-warning-tw-700) / <alpha-value>)",
          800: "hsl(var(--sui-color-warning-tw-800) / <alpha-value>)",
          900: "hsl(var(--sui-color-warning-tw-900) / <alpha-value>)",
        },
        danger: {
          DEFAULT: "hsl(var(--sui-color-danger-tw-500) / <alpha-value>)",
          50: "hsl(var(--sui-color-danger-tw-50) / <alpha-value>)",
          100: "hsl(var(--sui-color-danger-tw-100) / <alpha-value>)",
          200: "hsl(var(--sui-color-danger-tw-200) / <alpha-value>)",
          300: "hsl(var(--sui-color-danger-tw-300) / <alpha-value>)",
          400: "hsl(var(--sui-color-danger-tw-400) / <alpha-value>)",
          500: "hsl(var(--sui-color-danger-tw-500) / <alpha-value>)",
          600: "hsl(var(--sui-color-danger-tw-600) / <alpha-value>)",
          700: "hsl(var(--sui-color-danger-tw-700) / <alpha-value>)",
          800: "hsl(var(--sui-color-danger-tw-800) / <alpha-value>)",
          900: "hsl(var(--sui-color-danger-tw-900) / <alpha-value>)",
        },
      },
      borderWidth: {
        DEFAULT: "var(--sui-border-width-small)",
        small: "var(--sui-border-width-small)",
        medium: "var(--sui-border-width-medium)",
        large: "var(--sui-border-width-large)",
      },
      opacity: {
        disabled: "var(--sui-opacity-disabled)",
      },
      borderRadius: {
        small: "var(--sui-radius-small)",
        medium: "var(--sui-radius-medium)",
        large: "var(--sui-radius-large)",
      },
    },
  },
  plugins: [],
};
