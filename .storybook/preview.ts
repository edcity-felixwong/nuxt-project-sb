import type { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Preview, setup } from "@storybook/vue3";

import { i18n } from "@/i18n";
import { pt } from "@/theme";
import type { PrimeVueConfiguration } from "primevue/config";
import PrimeVue from "primevue/config";
import Badge from "primevue/badge";
import Tooltip from "primevue/tooltip";
import StyleClass from "primevue/styleclass";
import FocusTrap from "primevue/focustrap";
import Ripple from "primevue/ripple";
import { useI18n } from "vue-i18n";

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
  globalTypes: {
    locale: {
      description: "Internationalization locale",
      defaultValue: "en",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", right: "en", title: "English" },
          { value: "zh", right: "zh", title: "中文" },
        ],
      },
    },
  },
  decorators: [
    (story, context) => ({
      name: "StorybookPreviewDecorator",
      components: { StarThemeProvider, story },
      setup(props, ctx) {
        const sbLocale = context.globals.locale || "en";
        const { t, locale } = useI18n();
        locale.value = sbLocale;
        i18n.global.locale.value = sbLocale;
        // provide(
        //   I18nInjectionKey,
        //   createI18n({
        //     locale: "zh",
        //     // legacy: false,
        //     fallbackLocale: "en",
        //     // globalInjection
        //     messages,
        //   })
        // );
        return { locale, sbLocale };
      },
      template: `<StarThemeProvider :key="sbLocale"><story /></StarThemeProvider>`,
    }),
  ],
};

export default preview;

setup((app) => {
  app.use(PrimeVue, {
    prefix: "P",
    pt,
    ptOptions: {
      mergeProps: true,
      mergeSections: true,
    },
  } as PrimeVueConfiguration);
  app.directive("tooltip", Tooltip);
  app.directive("styleclass", StyleClass);
  app.directive("focustrap", FocusTrap);
  app.directive("ripple", Ripple);
  app.use(i18n);
});
