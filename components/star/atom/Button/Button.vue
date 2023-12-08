<template>
  <PButton :pt="{ root: button(props) }" label="Button" v-bind="$attrs" :disabled="isDisabled" />
</template>
<script setup lang="ts">
import PButton, { type ButtonProps } from "primevue/button";
import { button } from "./button-tv";
import { usePassThrough } from "@/composables";
import { type KnbabToCamelS } from "@/utils";

// export type SafeButtonProps = KnbabToCamelS<ButtonProps>;
export type Props = {
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  radius: "none" | "sm" | "md" | "lg" | "full";
  fullWidth: boolean;
  isDisabled: boolean;
  isInGroup: boolean;
  isIconOnly: boolean;
  disableAnimation: boolean;
};
console.log(
  `🚀 // DEBUG 🍔 ~ file: Button.vue:22 ~ props ~ button.defaultVariants:`,
  button.defaultVariants
);
console.log(`🚀 // DEBUG 🍔 ~ file: Button.vue:25 ~ button(props):`, button(props));
const props = withDefaults(defineProps<Props>(), {
  ...button.defaultVariants,
});
// const pt = usePassThrough(button, props);
</script>
