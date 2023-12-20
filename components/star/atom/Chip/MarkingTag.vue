<template>
  <StarChip
    v-bind="{ ...props, ...propMap[props.status] }"
    :label="props.label ?? label"
    variant="flat"
  />
</template>
<script setup lang="ts">
import StarChip from "./Chip.vue";
import type { StarChipProps } from "./Chip.vue";
import { useI18n } from "vue-i18n";
import { computedWithReactive } from "@/composables";

const { t, locale } = useI18n();

export type MarkingTagProps = Omit<StarChipProps, "label"> & {
  status:
    | "manualMarking"
    | "automatedMarking"
    | "marked"
    | "submission"
    | "none"
    | "required"
    | "pending";
  /** Use global locale if no locale specified */
  locale?: "zh" | "en";
  label?: string;
};
const props = withDefaults(defineProps<MarkingTagProps>(), {
  size: "xs",
});
const label = computedWithReactive([props, locale], () => {
  const localeFallback = props.locale ?? locale.value;
  return t(`paper.marking.${props.status}`, null, { locale: localeFallback });
});
/**
 * For historical reason,
 * pending=manualMarking, required=marked, none=automatedMarking */
const propMap: Record<MarkingTagProps["status"], Partial<StarChipProps>> = {
  manualMarking: { color: "primary", icon: "material-symbols:exclamation-rounded" },
  pending: { color: "primary", icon: "material-symbols:exclamation-rounded" },
  automatedMarking: { color: "help", icon: "material-symbols:verified-user-outline-rounded" },
  none: { color: "help", icon: "material-symbols:verified-user-outline-rounded" },
  marked: { color: "success", icon: "material-symbols:done-all-rounded" },
  required: { color: "success", icon: "material-symbols:done-all-rounded" },
  submission: { color: "default", icon: "material-symbols:task-outline-rounded" },
};
</script>
