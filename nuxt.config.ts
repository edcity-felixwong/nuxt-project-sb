// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    buildAssetsDir: "assets/",
  },
  devtools: { enabled: true },
  alias: {
    "#storybook": "../.storybook",
    "#storybook/*": "../.storybook/*",
    "#stories": "../stories",
  },
  modules: ['@nuxtjs/tailwindcss'],
  components: [{ path: "./components/star/atom", prefix: "Star" }],
  tailwindcss: {
    cssPath: './styles/global.css',
  }
});
