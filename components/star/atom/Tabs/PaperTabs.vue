<template>
  <div role="navigation">
    <div class="bg-default-100 rounded-t-medium flex justify-between px-3 py-2">
      <span class="text-sm">選取需要的項目類別</span>
      <span class="text-text-500 text-sm">查看全部</span>
    </div>
    <Tabs
      v-model="model"
      :model="tabs"
      variant="card"
      ariaLabel="Select paper category"
      :pt="{
        root: 'border-none rounded-b-medium overflow-auto p-3 pt-2 bg-default-100',
        indicator: 'rounded-medium',
      }"
    >
      <template #trigger="{ item, isSelected }">
        <PaperTabItem :model="item" :isSelected="isSelected" />
      </template>
    </Tabs>
  </div>
</template>
<script setup lang="ts">
import type { Tab } from "@/services";
import { ref, defineModel } from "vue";

import Tabs from "./Tabs.vue";
import type { StarTabsProps } from "./Tabs.vue";
import PaperTabItem from "./PaperTabItem.vue";

import type { StarOptionItemProps } from "../Option";

const tabMap: Record<Tab, StarTabsProps["model"]> = {};
type StarPaperTab = StarTabsProps["model"][number] & {
  trigger: Tab;
  default?: boolean;
};
type ExtendedTabModel = StarPaperTab & StarOptionItemProps["model"];
const tabs: Ref<ExtendedTabModel[]> = ref<ExtendedTabModel[]>([
  {
    trigger: "",
    icon: "material-symbols:crossword",
    title: "My Papers",
    default: true,
  },
  // {
  //   trigger: "Preset Papers",
  //   default: true,
  //   icon: "material-symbols:crossword",
  //   title: "Preset Papers",
  //
  // },
  {
    trigger: "shared",
    icon: "material-symbols:crossword",
    title: "Shared Papers",
  },
  // {
  //   trigger: "Student Corner",
  //   icon: "material-symbols:crossword",
  //   title: "Student Corner",
  //
  // },
  {
    trigger: "bca2022",
    icon: "material-symbols:crossword",
    title: "Assessment Material 2022",
  },
  {
    trigger: "bca2021",
    icon: "material-symbols:crossword",
    title: "Assessment Material 2021",
  },
  {
    trigger: "nsp2020",
    icon: "material-symbols:crossword",
    title: "STAR Network School Programme",
  },
]);
export type PaperTabsProps = {};
const props = withDefaults(defineProps<PaperTabsProps>(), {});
const model = defineModel<string>();
</script>
