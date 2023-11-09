import { Preview } from "@storybook/vue3";
import theme from "./theme";
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
