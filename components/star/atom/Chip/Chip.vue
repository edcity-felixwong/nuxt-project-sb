<template>
  <PChip v-bind="props" :pt="pt">
    <template #icon>
      <slot name="icon">
        <Icon v-if="props.icon" :icon="props.icon" :class="pt.icon" />
        <span v-else-if="props.variant === 'dot'" :class="pt.dot" />
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
export type StarChipProps = ChipProps & {
  icon?: string;
  /** @default false */
  disabled?: boolean;
  /** @default medium */
  radius?: "small" | "medium" | "large" | "full";
  /** @default default */
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "help";
  /** @default medium */
  size?: "xs" | "small" | "medium" | "large";
  label: string;
  /** @default solid */
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "dot";
};
const props = withDefaults(defineProps<StarChipProps>(), {
  ...chip.defaultVariants,
});
const pt = usePassThrough(chip, props);
</script>
