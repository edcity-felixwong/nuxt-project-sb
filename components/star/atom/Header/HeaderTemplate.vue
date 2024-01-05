<template>
  <PMenubar role="navigation" aria-label="Main navigation" :model="props.model" :pt="pt">
    <template #start>
      <img :src="logo" alt="STAR" aria-label="STAR logo" title="STAR" />
    </template>
    <template #itemicon="{ item, class: className }">
      <div v-if="item.icon">
        <Icon :icon="item.icon" width="20" :class="[className, 'mr-2', pt.icon]" />
      </div>
    </template>
  </PMenubar>
</template>
<script setup lang="ts">
import { usePassThrough } from "@/composables";
import { Icon } from "@iconify/vue";
import PMenubar, { type MenubarPassThroughOptions, type MenubarProps } from "primevue/menubar";
import logo from "@/assets/logo.png";

import { header } from "./header-tv";

type MenuItem = NonNullable<MenubarProps["model"]>[number];
export interface StarHeaderItem extends MenuItem {}

export type StarHeaderProps = {
  model: StarHeaderItem[];
  /** @default false */
  isMobile?: boolean;
  pt?: MenubarPassThroughOptions;
};
const props = withDefaults(defineProps<StarHeaderProps>(), {
  ...header.defaultVariants,
});
const pt = usePassThrough(header, props);
</script>
