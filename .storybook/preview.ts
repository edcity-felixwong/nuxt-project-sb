import { Preview } from "@storybook/vue3";
import { themes } from "@storybook/theming";
import theme from './theme'
import './../styles'

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
        disable:false,
        headingSelector: 'h2, h3, h4, h5, h6',
      }
    },
  },
  
};

export default preview;
