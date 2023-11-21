<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    :class="base({ ...props, className: props.classNames.base })"
  >
    <slot name="startContent" />
    <div :class="wrapper({ ...props, className: props.classNames.wrapper })">
      <slot>
        <slot name="title">
          <span :class="title({ ...props, className: props.classNames.title })">{{
            props.title
          }}</span>
        </slot>
        <slot name="description">
          <span :class="description({ ...props, className: props.classNames.description })">{{
            props.description
          }}</span>
        </slot>
      </slot>
      <slot name="endContent" />
    </div>
  </Primitive>
</template>
<script lang="ts">
export { dropdownItem } from "./item-tv";
</script>
<script setup lang="ts">
/* eslint-disable */
import { Primitive, type PrimitiveProps } from "radix-vue";
import { dropdownItem } from "./item-tv";
/* eslint-enable */

export interface SlotClassProps {
  classNames?: Record<
    "base" | "wrapper" | "title" | "description" | "shortcut" | "selectedIcon",
    string
  >;
}

export type Props = PrimitiveProps &
  SlotClassProps & {
    variant?: "flat" | "solid" | "shadow" | "bordered" | "faded" | "light";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    disableAnimation?: boolean;
    title?: string;
    textValue?: string;
    description?: string;
    shortcut?: string;
    startContent?: any;
    endContent?: any;
    selectedIcon?: any;
    showDivider?: boolean;
    isDisabled?: boolean;
    isSelected?: boolean;
    isReadOnly?: boolean;
    hideSelectedIcon?: boolean;
    closeOnSelect?: boolean;
  };

const props = withDefaults(defineProps<Props>(), {
  variant: "solid",
  color: "default",
  disableAnimation: false,
  as: "li",
  title: "",
  textValue: "",
  description: "",
  shortcut: "",
  startContent: null,
  endContent: null,
  selectedIcon: null,
  showDivider: false,
  isDisabled: false,
  isSelected: false,
  isReadOnly: false,
  hideSelectedIcon: false,
  closeOnSelect: true,
  /** Merge with default */
  classNames: () => ({
    base: "",
    description: "",
    selectedIcon: "",
    shortcut: "",
    title: "",
    wrapper: "",
  }),
});

const { base, description, selectedIcon, shortcut, title, wrapper } = dropdownItem();
</script>
