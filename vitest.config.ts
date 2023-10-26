/// <reference types="vitest" />
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Jsx from "@vitejs/plugin-vue-jsx";
import { nuxtPaths, paths } from "./utils/parse-tsconfig";

export default defineConfig({
  plugins: [Vue(), Jsx()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      ...nuxtPaths,
      ...paths,
    },
  },
});
