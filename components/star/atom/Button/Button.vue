<template>
  <PButton :pt="{ root: button(props) }" label="Button" />
</template>
<script setup lang="ts">
import PButton from "primevue/button";
import { button } from "./button-tv";
import { usePassThrough } from "@/composables";

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
const props = withDefaults(defineProps<Props>(), {
  ...button.defaultVariants,
});
// const pt = usePassThrough(button, props);
</script>
