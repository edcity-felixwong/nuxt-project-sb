import { type DefineNuxtConfig, defineNuxtConfig } from "nuxt/config"
type NuxtConfig = Parameters<DefineNuxtConfig>[0]

// https://nuxt.com/docs/api/configuration/nuxt-config
export const config = {
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
  modules: ["@nuxtjs/tailwindcss"],
  components: [{ path: "./components/star/atom", prefix: "Star" }],
  tailwindcss: {
    cssPath: "./styles/global.css",
  },
} satisfies NuxtConfig
export default defineNuxtConfig(config)
