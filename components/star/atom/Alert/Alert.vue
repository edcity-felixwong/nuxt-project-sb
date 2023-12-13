<template>
  <PMessage
    :severity="props.severity"
    :autoplayInterval="props.autoplayInterval"
    :pt="{
      wrapper: 'flex-col-reverse flex px-3',
      root: 'm-0 border-0 [&_a]:font-semibold hover:[&_a]:underline',
      /** This has specificity problem...,
       * p-icon is not in layer `primevue`,
       * so it overwrites tailwind-utilities */
      icon: '!hidden',
      text: 'w-full',
    }"
  >
    <template #messageicon />
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
        <div v-html="data.html" />
      </template>
    </PCarousel>
  </PMessage>
</template>
<script setup lang="ts">
import PCarousel, { type CarouselProps } from "primevue/carousel";
import PMessage, { type MessageProps } from "primevue/message";

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
});
</script>
