import { type DefineNuxtConfig } from "nuxt/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import type { PrimeVueConfiguration, PrimeVuePTOptions } from "primevue/config";

type NuxtConfig = Parameters<DefineNuxtConfig>[0];
/* Lift this config up to distribute to other config like vite, storybook, vitest, etc */
export const config: NuxtConfig = {
  ssr: false,
  app: {
    baseURL: process.env.NODE_ENV === "development" ? "/" : "/home/papers/",
    buildAssetsDir: "/assets/",
    head: {
      title: "STAR",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "" },
      ],
      meta: [
        { content: "STAR", name: "description" },
        { property: "og:url", content: "" },
        { property: "og:title", content: "STAR" },
        { property: "og:description", content: "STAR" },
        { name: "google", content: "notranslate" },
      ],
    },
  },
  devtools: { enabled: true },
  alias: {
    "#storybook": "../.storybook",
    "#storybook/*": "../.storybook/*",
    "#stories": "../stories",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-primevue",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  components: [{ path: "./components/star/atom", prefix: "Star" }],
  primevue: {
    options: {
      ripple: true,
      // unstyled: true,
      pt: {
        // menu: { menu: "p-2", action: "py-2.5 px-2" },
        // button: { root: "" },
        // menubar: {
        //   submenu: "",
        // },
      },
      ptOptions: {
        /** Merge the custom class with pre-set style */
        mergeProps: true,
        /** Merge with primevue default if the section is missed
         * @see https://primevue.org/passthrough/#usepassthrough
         */
        mergeSections: true,
      },
    } as PrimeVueConfiguration,
    components: {
      prefix: "P",
      include: [
        "InputText",
        "Button",
        "Checkbox",
        "Dropdown",
        "InputSwitch",
        "Message",
        "Sidebar",
        "Menu",
        "OverlayPanel",
        "Menubar",
        "Toast",
        "Breadcrumb",
        "Divider",
        "Carousel",
        "MultiSelect",
      ],
      // exclude: ["editor", "chart"],
    },
  },
  tailwindcss: {
    cssPath: "./styles/global.css",
  },
  vite: {
    plugins: [vanillaExtractPlugin()],
    build: {
      rollupOptions: {
        output: {
          sourcemap: true,
        },
      },
    },
  },
  piniaPersistedstate: {
    storage: "localStorage",
  },
};
