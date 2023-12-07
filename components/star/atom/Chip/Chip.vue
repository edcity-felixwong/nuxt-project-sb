<template>
  <PChip v-bind="props">
    <template #icon>
      <slot name="icon">
        <Icon v-if="props.icon" :icon="props.icon" :class="pt.icon" />
      </slot>
    </template>
  </PChip>
</template>
<script setup lang="ts">
import PChip, { type ChipProps } from "primevue/chip";
import { Icon } from "@iconify/vue";
import { chip } from "./chip-tv";
import { usePassThrough } from "@/composables";

/** Hand written again as vue can't parse types */
export type Props = ChipProps & {
  icon?: string;
  /** @default false */
  disabled?: boolean;
  /** @default medium */
  radius?: "small" | "medium" | "large" | "full";
  /** @default default */
  color?: "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "danger";
  /** @default medium */
  size?: "small" | "medium" | "large";
};
const props = withDefaults(defineProps<Props>(), {
  ...chip.defaultVariants,
});
const pt = usePassThrough(chip, props);
</script>
