import { VueQueryPlugin } from "vue-query";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(VueQueryPlugin);
});
