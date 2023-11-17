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
  ],
  theme: {
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
