import type { StorybookConfig } from "@storybook/vue3-vite";
import { paths, nuxtPaths,resolveRoot } from "./parse-tsconfig";
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  previewHead: (head) => `
  ${head}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;400;600&family=Karla&display=swap" rel="stylesheet"> 
  <script src="https://cdn.tailwindcss.com" defer></script>
  `,
  viteFinal: async (config) => {
    config.resolve ??= {}
    config.resolve.alias ??= {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '#storybook': resolveRoot('.storybook'),
      '#stories': resolveRoot('.stories'),
      ...nuxtPaths,
      ...paths
    }
    console.log("🚀 ~ file: main.ts:38 ~ viteFinal: ~ config:", config)
    return config;
  },
};
export default config;
