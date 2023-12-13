import { Preview, setup } from "@storybook/vue3";
import type { INITIAL_VIEWPORTS, DEFAULT_VIEWPORT } from "@storybook/addon-viewport";

import PrimeVue from "primevue/config";
import type { PrimeVueConfiguration, PrimeVuePTOptions } from "primevue/config";
import { i18n } from "@/i18n";

import theme from "./theme";
/* Import tailwind */
import "./../styles/global.css";
/* Import project style */
import "./../styles";

import StarThemeProvider from "@/components/star/atom/ThemeProvider/theme-provider";
import "./sb-style.css";

type ViewportMap = typeof INITIAL_VIEWPORTS;

const viewports: ViewportMap = {
  iphoneSE: {
    name: "iPhone SE",
    styles: {
      width: "320px",
      height: "568px",
    },
    type: "mobile",
  },
  iphone14: {
    name: "iPhone 14",
    styles: {
      width: "390px",
      height: "844px",
    },
    type: "mobile",
  },
  iphone15ProMax: {
    name: "iPhone 15 Pro Max",
    styles: {
      width: "430px",
      height: "932px",
    },
    type: "mobile",
  },
  ipadMini: {
    name: "iPad mini 8.3",
    styles: {
      width: "740px",
      height: "1133px",
    },
    type: "tablet",
  },
  ipadPro: {
    name: "iPad Pro 12.9''",
    styles: {
      width: "1024px",
      height: "1366px",
    },
    type: "tablet",
  },
  macBookAir: {
    name: "MacBook Air",
    styles: {
      width: "1280px",
      height: "832px",
    },
    type: "desktop",
  },
  macBookPro14: {
    name: "MacBook Pro 14''",
    styles: {
      width: "1280px",
      height: "832px",
    },
    type: "desktop",
  },
  macBookPro16: {
    name: "MacBook Pro 16''",
    styles: {
      width: "1728px",
      height: "1117px",
    },
    type: "desktop",
  },
};

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
    viewport: {
      viewports,
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
  app.use(i18n);
});
