<template>
  <div role="navigation">
    <div class="bg-default-100 rounded-t-medium flex justify-between px-3 py-2">
      <span class="text-sm">選取需要的項目類別</span>
      <span class="text-text-500 text-sm">查看全部</span>
    </div>
    <Tabs
      v-model="model"
      :model="tabModels"
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
import { computed, defineModel } from "vue";
import { useI18n } from "vue-i18n";

import PaperTabItem from "./PaperTabItem.vue";
import type { StarTabsProps } from "./Tabs.vue";
import Tabs from "./Tabs.vue";
import { mapTabLabel } from "./map-tab-model";

import type { StarOptionItemProps } from "../Option";

const { t } = useI18n();

type StarPaperTab = StarTabsProps["model"][number] & {
  trigger: Tab;
  default?: boolean;
};
export type PaperTabModel = StarPaperTab & StarOptionItemProps["model"];
export type PaperTabsProps = {
  tabs: Tab[];
};
const props = withDefaults(defineProps<PaperTabsProps>(), {});
const tabModels = computed(() => props.tabs?.map((_) => mapTabLabel(_, t)));
const model = defineModel<string>();
</script>
