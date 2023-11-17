<template>
  <Item v-bind="props" :classNames="slotClass.classNames">
    <template v-for="(slot, index) of Object.keys($slots)" :key="index" #[slot]>
      <slot :name="slot" />
    </template>
  </Item>
</template>
<script setup lang="ts">
import Item, { dropdownItem, type SlotClassProps, type Props as ItemProps } from "./Item.vue";
import { sideNavItem } from "./side-nav-item-tv";
import { defineProps, withDefaults, computed } from "vue";

type Props = ItemProps & {
  size?: "small" | "medium" | "large";
  isIconOnly?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  size: "large",
  isIconOnly: true,
});

const { base, description, selectedIcon, shortcut, title, wrapper } = sideNavItem(props);

// const slotClass = useSlotClass(props, sideNavItem());
const slotClass: SlotClassProps = computed(() => ({
  classNames: {
    base: base(),
    description: description(),
    selectedIcon: selectedIcon(),
    shortcut: shortcut(),
    title: title(),
    wrapper: wrapper(),
  },
}));
</script>
