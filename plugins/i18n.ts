import { defineNuxtPlugin } from "#app";
import { createI18n } from "vue-i18n";
import type { I18n, I18nOptions } from "vue-i18n";
import { messages } from "@/i18n";
export default defineNuxtPlugin((nuxtApp) => {
  const options = {
    locale: "en",
    legacy: false,
    // globalInjection: true,
    messages,
  } as const satisfies I18nOptions;
  const i18n: I18n<
    typeof options.messages,
    {},
    {},
    keyof typeof options.messages,
    typeof options.legacy
  > = createI18n(options);
  nuxtApp.vueApp.use(i18n);
  // return {
  //   provide: {
  //     t: i18n.global.t,
  //     dt: i18n.global.d,
  //     nt: i18n.global.n,
  //   },
  // };
});
