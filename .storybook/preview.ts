import { Preview } from "@storybook/vue3"
import { themes } from "@storybook/theming"
import theme from "./theme"
/* Import project style */
import "./../styles"

import "./sb-style.css"
import ThemeProvider from "@/components/star/atom/ThemeProvider/ThemeProvider"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
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
      components: { ThemeProvider, story },
      template: `<ThemeProvider><story /></ThemeProvider>`,
    }),
  ],
}

export default preview
