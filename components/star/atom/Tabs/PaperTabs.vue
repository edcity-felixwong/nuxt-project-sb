<template>
  <Tabs :model="m" variant="card" :pt="{ indicator: 'p-2' }">
    <template #indicator>
      <div class="w-full h-full p-2 bg-red-800"></div>
    </template>
    <template #trigger="{ item }">
      <div class="min-w-[300px] min-h-[150px]">{{ JSON.stringify(item) }}</div>
    </template>
  </Tabs>
</template>
<script setup lang="ts">
import Tabs from "./Tabs.vue";
import type { StarTabsProps } from "./Tabs.vue";
import { ref, watch } from "vue";
import { usePaperTabs } from "@/services";

const m: Ref<StarTabsProps["model"]> = ref<StarTabsProps["model"]>([
  {
    trigger: "My Papers",
  },
  {
    trigger: "Preset Papers",
    default: true,
  },
  {
    trigger: "Shared Papers",
  },
  {
    trigger: "Assessment Material 2022",
  },
  {
    trigger: "Assessment Material 2021",
  },
  {
    trigger: "STAR Network School Programme",
  },
]);
const { data: tab } = usePaperTabs();
watch(tab, () => {
  console.log(`🚀 // DEBUG 🍔 ~ file: PaperTabs.vue:40 ~ tab.value:`, tab.value);
});
</script>
