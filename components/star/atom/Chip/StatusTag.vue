<template>
  <StarChip v-bind="props" :label="label" :color="color" variant="flat" />
</template>
<script setup lang="ts">
import StarChip from "./Chip.vue";
import type { StarChipProps } from "./Chip.vue";
import { useI18n } from "vue-i18n";
import { computedWithReactive } from "@/composables";
import { computedWithControl } from "@vueuse/core";

const { t, locale } = useI18n();

export type StatusTagProps = StarChipProps & {
  status:
    | "pending"
    | "ready"
    | "notAttempted"
    | "attempted"
    | "upcoming"
    | "inProgress"
    | "finished";
  /** Use global locale if no locale specified */
  locale?: "zh" | "en";
  label?: string;
};
const props = withDefaults(defineProps<StatusTagProps>(), {
  size: "small",
});
const label = computedWithReactive(
  () => props,
  () => {
    const localeFallback = props.locale ?? locale.value;
    return t(`paper.status.${props.status}`, null, { locale: localeFallback });
  }
);
const colorMap: Record<StatusTagProps["status"], StarChipProps["color"]> = {
  pending: "danger",
  ready: "success",
  notAttempted: "info",
  attempted: "secondary",
  upcoming: "info",
  inProgress: "secondary",
  finished: "default",
};
const color = computedWithReactive(props, () => colorMap[props.status]);
</script>
