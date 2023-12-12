import { defineNuxtPlugin } from "#app";
import { i18n } from "@/i18n/i18n-instance";

export { i18n };

// export i18n ;
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n);
  // return {
  //   provide: {
  //     t: i18n.global.t,
  //     dt: i18n.global.d,
  //     nt: i18n.global.n,
  //   },
  // };
});
