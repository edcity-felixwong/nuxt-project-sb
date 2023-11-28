<template>
  <PMenubar :model="props.model" :pt="pt">
    <template #start>
      <img :src="logo" alt="STAR" />
    </template>
    <template #itemicon="{ item, class: className }">
      <div v-if="item.icon">
        <Icon :icon="item.icon" width="24" :class="[className, 'mr-2']" />
      </div>
    </template>
  </PMenubar>
</template>
<script setup lang="ts">
import { header } from "./header-tv";
import { usePassThrough } from "@/composables/usePassThrough";
import { Icon } from "@iconify/vue";
import PMenubar, { type MenubarPassThroughOptions, type MenubarProps } from "primevue/menubar";
import { ref, reactive } from "vue";
import logo from "@/assets/logo.png";

type MenuItem = NonNullable<MenubarProps["model"]>[number];
export interface Item extends MenuItem {}

export type Props = {
  model: Item[];
  /** @default false */
  isMobile?: boolean;
  pt?: MenubarPassThroughOptions;
};
const props = withDefaults(defineProps<Props>(), {
  /** "teacher" | "student" */
  role: "teacher",
  ...header.defaultVariants,
});
const pt = usePassThrough(header, props);
</script>
