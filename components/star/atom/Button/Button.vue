<template>
  <PButton :pt="pt" :label="props.label" v-bind="$attrs" :disabled="isDisabled">
    <template #icon>
      <slot name="icon">
        <Icon v-if="props.icon" :icon="props.icon" :class="pt.icon" />
      </slot>
    </template>
  </PButton>
</template>
<script setup lang="ts">
import PButton, { type ButtonProps, type ButtonPassThroughOptions } from "primevue/button";
import { button } from "./button-tv";
import { usePassThrough } from "@/composables";
import { Icon } from "@iconify/vue";
// import { type KnbabToCamelS } from "@/utils";
// import { AriaAttributes } from "react";

type t12312 = AriaAttributes;
type t12 = t12312["aria-atomic"];
// export type SafeButtonProps = KnbabToCamelS<ButtonProps>;
// export type SafeButtonProps = Omit<ButtonProps, keyof AriaAttributes>;
export type SafeButtonProps = Pick<ButtonProps, "iconPos">;

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
  unstyled: boolean;
};
type qrw12 = Props["ic"];
console.log(
  `🚀 // DEBUG 🍔 ~ file: Button.vue:22 ~ props ~ button.defaultVariants:`,
  button.defaultVariants
);
console.log(`🚀 // DEBUG 🍔 ~ file: Button.vue:25 ~ button(props):`, button(props));
const props = withDefaults(defineProps<Props>(), {
  ...button.defaultVariants,
});
const pt = usePassThrough(button, props);
</script>
