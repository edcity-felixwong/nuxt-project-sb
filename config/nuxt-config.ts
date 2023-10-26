import { type DefineNuxtConfig } from "nuxt/config";

type NuxtConfig = Parameters<DefineNuxtConfig>[0]
/* Lift this config up to distribute to other config like vite, storybook, vitest, etc */
export const config: NuxtConfig = {
  ssr: false,
  app: {
    baseURL: process.env.NODE_ENV === "development" ? "/" : "/testroute/",
    buildAssetsDir: "/assets/",
  },
  devtools: { enabled: true },
  alias: {
    "#storybook": "../.storybook",
    "#storybook/*": "../.storybook/*",
    "#stories": "../stories",
  },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  components: [{ path: "./components/star/atom", prefix: "Star" }],
  tailwindcss: {
    cssPath: "./styles/global.css",
  },
};
