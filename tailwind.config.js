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
      },
    },
  },
  plugins: [],
};
