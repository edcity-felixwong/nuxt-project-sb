import type { StorybookConfig } from "@storybook/vue3-vite";
import {
  paths,
  nuxtPaths,
  pathsRoot,
  resolveRoot,
} from "./../utils/parse-tsconfig";
import Jsx from "@vitejs/plugin-vue-jsx";

const publicDir = resolveRoot("stories", "public");

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
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
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;400;600&family=Karla&family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet"> 
  <script src="https://cdn.tailwindcss.com" defer></script>
  `,
  viteFinal: async (config) => {
    return await Promise.resolve(config)
      .then(addPathAlias({ ...nuxtPaths, ...paths }))
      .then(addEnvPrefix("SB_"))
      .then(setPublicDir(publicDir))
      .then(setEnvDir(resolveRoot(".storybook")))
      .then(addViteJsxCompiler);
  },
  env: (config) => ({
    ...config,
    SB_PATH_ALIAS: JSON.stringify(pathsRoot),
  }),
  staticDirs: [publicDir],
  managerHead: (head) => `
  ${head}
  <link rel="icon" href="/favicon.ico" />
  `,
};
export default config;

/* Just to make pipe */
type ViteConfig = Parameters<StorybookConfig["viteFinal"]>[0];
function addPathAlias(alias: Required<ViteConfig>["resolve"]["alias"]) {
  return (config: ViteConfig): ViteConfig => {
    const originalAlias = config?.resolve?.alias ?? {};

    return {
      ...config,
      resolve: {
        ...(config?.resolve ?? {}),
        alias: {
          ...originalAlias,
          ...alias,
        },
      },
    };
  };
}
function addEnvPrefix(envPrefix: ViteConfig["envPrefix"]) {
  return (config: ViteConfig): ViteConfig => ({
    ...config,
    envPrefix,
  });
}
function setPublicDir(publicDir: ViteConfig["publicDir"]) {
  return (config: ViteConfig): ViteConfig => ({
    ...config,
    publicDir,
  });
}
function setEnvDir(envDir: ViteConfig["envDir"]) {
  return (config: ViteConfig): ViteConfig => ({
    ...config,
    envDir,
  });
}
/** @description Telling vite to compile jsx to vue,
 *  otherwise it will decode to react
 * */
const addViteJsxCompiler = (config: ViteConfig): ViteConfig => ({
  ...config,
  plugins: [...(config?.plugins ?? []), Jsx()],
});
