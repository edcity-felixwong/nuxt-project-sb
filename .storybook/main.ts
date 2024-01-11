import { transformAsync } from "@babel/core";
import type { StorybookConfig } from "@storybook/vue3-vite";
import Jsx from "@vitejs/plugin-vue-jsx";
import { nuxtPaths, paths, pathsRoot, resolveRoot } from "./../utils/parse-tsconfig";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const vueJsxOption = undefined;

const publicDir = resolveRoot("stories", "public");

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
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
  core: {
    builder: "@storybook/builder-vite",
  },
  docs: {
    autodocs: "tag",
  },
  previewHead: (head) => `
  ${head}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;400;600&family=Karla&family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet"> 
  
  `,
  viteFinal: async (config) => {
    return await Promise.resolve(config)
      .then(addPathAlias({ ...nuxtPaths, ...paths }))
      .then(addEnvPrefix("SB_"))
      .then(setPublicDir(publicDir))
      .then(setEnvDir(resolveRoot(".storybook")))
      .then(addPlugins(vanillaExtractPlugin()))
      .then(addViteJsxCompiler)
      .then(addTailwind);
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
const addViteJsxCompiler = (config: ViteConfig): ViteConfig => {
  const vueJsxLoader: NonNullable<ViteConfig["plugins"]>[0] = {
    name: "transform-vue-jsx-first",
    enforce: "pre",
    async transform(code, id) {
      if (id.match(/\/components\/.*?\.[tj]sx/)) {
        return Jsx(vueJsxOption).transform(code, id);
      } else if ([/\.[tj]sx$/].map((_) => id.match(_)).some((_) => _)) {
        return transformAsync(code, {
          filename: id,
          presets: [
            // "@babel/preset-env",
            "@babel/preset-typescript",
            "@babel/preset-react",
          ],
          sourceType: "module",
        }).then(({ code, map }) => ({ code, map }));
      }
      return null;
    },
  };

  return {
    ...config,
    esbuild: {
      ...(config?.esbuild ?? {}),
      jsx: "preserve",
    },
    plugins: [vueJsxLoader, ...(config?.plugins ?? [])],
  };
};
const addPlugins = (...p: NonNullable<ViteConfig["plugins"]>) => {
  return (config: ViteConfig): ViteConfig => ({
    ...config,
    plugins: (config?.plugins ?? []).concat(p),
  });
};
const addTailwind = (config: ViteConfig): ViteConfig => {
  return {
    ...config,
    css: {
      ...(config?.css ?? {}),
      postcss: {
        ...(config?.css?.postcss ?? {}),
        plugins: [
          ...(config?.css?.postcss?.plugins ?? []),
          require("tailwindcss"),
          require("autoprefixer"),
        ],
      },
    },
  };
};
