<template>
  <PButton v-ripple="{}" :pt="pt" :label="props.label" v-bind="$attrs" :disabled="isDisabled">
    <template #icon>
      <slot name="icon">
        <Icon v-if="props.icon" :icon="props.icon" :class="pt.icon" />
      </slot>
    </template>
    <template #default>
      <slot />
    </template>
  </PButton>
</template>
<script lang="ts">
export default {
  name: "StarButton",
};
</script>
<script setup lang="ts">
import PButton, { type ButtonProps, type ButtonPassThroughOptions } from "primevue/button";
import { button } from "./button-tv";
import { usePassThrough } from "@/composables";
import { Icon } from "@iconify/vue";

export type Props = {
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  fullWidth?: boolean;
  isDisabled?: boolean;
  isInGroup?: boolean;
  isIconOnly?: boolean;
  disableAnimation?: boolean;
} & {
  label?: string;
  icon?: string;
  iconPos?: "left" | "top" | "bottom" | "right";
  iconClass?: string;
  badge?: string;
  badgeClass?: string;
  badgeColor?: string;
  loading?: boolean;
  loadingIcon?: string;
  link?: boolean;
  pt?: ButtonProps["pt"];
  ptOptions?: ButtonProps["ptOptions"];
  unstyled?: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  ...button.defaultVariants,
});
const pt = usePassThrough(button, props);
</script>
