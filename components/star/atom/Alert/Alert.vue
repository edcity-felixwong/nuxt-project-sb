<template>
  <PMessage
    :severity="props.severity"
    :autoplayInterval="props.autoplayInterval"
    :pt="{
      wrapper: 'flex-col-reverse flex px-3',
      root: 'm-0 border-0',
      /** This has specificity problem...,
       * p-icon is not in layer `primevue`,
       * so it overwrites tailwind-utilities */
      icon: '!hidden',
      text: 'w-full',
    }"
  >
    <template #messageicon></template>
    <PCarousel
      :showNavigators="props.value.length > 1"
      :showIndicators="false"
      :value="props.value"
      :circular="props.value.length > 1"
      :pt="{
        container: 'gap-3',
        previousButton: 'm-0 hover:bg-white/50 text-[unset]',
        nextButton: 'm-0 hover:bg-white/50 text-[unset]',
        previousButtonIcon: 'w-4 h-4',
        nextButtonIcon: 'w-4 h-4',
      }"
    >
      <template #item="{ data }">
        <div v-html="data.html"></div>
      </template>
    </PCarousel>
  </PMessage>
</template>
<script setup lang="ts">
import PCarousel, { type CarouselProps } from "primevue/carousel";
import PMessage, { type MessageProps } from "primevue/message";
// import { usePreferredReducedMotion } from "@vueuse/core";

export type MessageItem = {
  html: string;
};
export type Props = Omit<CarouselProps, "value"> &
  MessageProps & {
    /** Color of the announcement */
    severity?: "info" | "warn" | "error" | "success";
    value: MessageItem[];
  };

const props = withDefaults(defineProps<Props>(), {
  severity: "warn",
  // autoplayInterval: () => (usePreferredReducedMotion().value === "reduce" ? 0 : 5000),
});

// const value: MessageItem[] = [
//   {
//     html: `On Tuesday November 28th from 9:00AM PT - 12PM PT (5:00PM UTC - 8PM UTC), we will be
//       performing system maintenance on support.mozilla.org. During the maintenance period, users
//       will not be able to sign in to the website, and all users signed in at the start of the
//       maintenance period will be signed out.`,
//   },
//   {
//     html: `2023 HKDSE Questions are NOW available! Please review to equip yourself and strengthen your learning.
// ※※ HKEAA is now carrying out system enhancement from 10:00am to 11:00am, 4 December 2023 (Mon). The DFS reports will be temporarily unavailable. We apologise for the inconvenience caused.`,
//   },
//   {
//     html: `lorem ipsum`,
//   },
//   {
//     html: `third message`,
//   },
// ];
</script>
