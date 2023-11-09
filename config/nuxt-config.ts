import { type DefineNuxtConfig } from "nuxt/config";

type NuxtConfig = Parameters<DefineNuxtConfig>[0];
/* Lift this config up to distribute to other config like vite, storybook, vitest, etc */
export const config: NuxtConfig = {
  ssr: false,
  app: {
    baseURL: process.env.NODE_ENV === "development" ? "/" : "/",
    buildAssetsDir: "/assets/",
  },
  devtools: { enabled: true },
  alias: {
    "#storybook": "../.storybook",
    "#storybook/*": "../.storybook/*",
    "#stories": "../stories",
  },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-primevue"],
  components: [{ path: "./components/star/atom", prefix: "Star" }],
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      prefix: "P",
      include: [
        "InputText",
        "Button",
        "Checkbox",
        "Dropdown",
        "Calendar",
        "InputSwitch",
        "Message",
        "Sidebar",
      ],
      // exclude: ["editor", "chart"],
    },
  },
  tailwindcss: {
    cssPath: "./styles/global.css",
  },
};
