import { Preview, setup } from "@storybook/vue3";
import PrimeVue from "primevue/config";
import type { PrimeVueConfiguration, PrimeVuePTOptions } from "primevue/config";
import { messages } from "@/i18n";
import { i18n } from "@/plugins/i18n";

import theme from "./theme";
/* Import tailwind */
import "./../styles/global.css";
/* Import project style */
import "./../styles";

import StarThemeProvider from "@/components/star/atom/ThemeProvider/theme-provider";
import "./sb-style.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ["Welcome", "*"],
      },
    },
    docs: {
      theme,
      toc: {
        disable: false,
        headingSelector: "h2, h3, h4, h5, h6",
      },
    },
  },
  decorators: [
    (story) => ({
      components: { StarThemeProvider, story },
      template: `<StarThemeProvider><story /></StarThemeProvider>`,
    }),
  ],
};

export default preview;

setup((app) => {
  app.use(PrimeVue, {
    prefix: "P",
    // pt: { menu: { root: "bg-red-900" } },
    ptOptions: {
      mergeProps: true,
      mergeSections: true,
    },
  } as PrimeVueConfiguration);
  // app.use(i18n);
});
