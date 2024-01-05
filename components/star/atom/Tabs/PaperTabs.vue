<template>
  <div role="navigation">
    <div class="bg-default-100 rounded-t-medium flex justify-between px-3 py-2">
      <span class="text-sm">選取需要的項目類別</span>
      <span class="text-text-500 text-sm">查看全部</span>
    </div>
    <Tabs
      v-model="data"
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
import { ref } from "vue";
import { useVModel } from "@vueuse/core";

import Tabs from "./Tabs.vue";
import type { StarTabsProps } from "./Tabs.vue";
import PaperTabItem from "./PaperTabItem.vue";

import type { StarOptionItemProps } from "../Option";

const tabMap: Record<Tab, StarTabsProps["model"]> = {};
type ExtendedTabModel = StarTabsProps["model"][number] & StarOptionItemProps["model"];
const tabs: Ref<ExtendedTabModel[]> = ref<ExtendedTabModel[]>([
  {
    trigger: "My Papers",
    icon: "material-symbols:crossword",
    title: "My Papers",
    default: true,
    // description: "lorem ipsum",
  },
  // {
  //   trigger: "Preset Papers",
  //   default: true,
  //   icon: "material-symbols:crossword",
  //   title: "Preset Papers",
  //   // description: "lorem ipsum",
  // },
  {
    trigger: "Shared Papers",
    icon: "material-symbols:crossword",
    title: "Shared Papers",
    // description: "lorem ipsum",
  },
  // {
  //   trigger: "Student Corner",
  //   icon: "material-symbols:crossword",
  //   title: "Student Corner",
  //   // description: "lorem ipsum",
  // },
  {
    trigger: "Assessment Material 2022",
    icon: "material-symbols:crossword",
    title: "Assessment Material 2022",
    // description: "lorem ipsum",
  },
  {
    trigger: "Assessment Material 2021",
    icon: "material-symbols:crossword",
    title: "Assessment Material 2021",
    // description: "lorem ipsum",
  },
  {
    trigger: "STAR Network School Programme",
    icon: "material-symbols:crossword",
    title: "STAR Network School Programme",
    // description: "lorem ipsum",
  },
]);
export type PaperTabsProps = {
  modelValue?: StarTabsProps["modelValue"];
};
const props = withDefaults(defineProps<PaperTabsProps>(), {});
// export type PaperTabsProps = Pick<StarTabsProps, >;
// const props = withDefaults(defineProps<PaperTabsProps>(), {});
// const { data: tab } = usePaperTabs();
// watch(tab, () => {
//   console.log(`🚀 // DEBUG 🍔 ~ file: PaperTabs.vue:40 ~ tab.value:`, tab.value);
// });
const test = ref();
const emit = defineEmits(["update:modelValue"]);
const data = useVModel(props, "modelValue", emit);
</script>
