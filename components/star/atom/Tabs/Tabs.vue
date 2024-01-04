<template>
  <TabsRoot
    v-model="t"
    :defaultValue="$props.model.find((_) => _.default)?.trigger"
    :class="pt.root"
    data-sui-section="root"
  >
    <TabsList ariaLabel="tabs example" :class="pt.list" data-sui-section="list">
      <TabsIndicator :class="pt.indicator" data-sui-section="indicator">
        <slot name="indicator" />
      </TabsIndicator>
      <template v-for="item in props.model" :key="item.trigger">
        <TabsTrigger :value="item.trigger" :class="pt.trigger" data-sui-section="trigger">
          <slot name="trigger" v-bind="{ item, isSelected: item.trigger === t }">
            {{ item.trigger }}
          </slot>
        </TabsTrigger>
      </template>
      <!-- <TabsTrigger value="tab2" :class="pt.trigger"> Two </TabsTrigger>
      <TabsTrigger value="tab3" :class="pt.trigger"> Three </TabsTrigger> -->
    </TabsList>
    <!-- <TabsContent value="tab1" :class="pt.content"> Tab one content </TabsContent>
    <TabsContent value="tab2" :class="pt.content"> Tab two content </TabsContent>
    <TabsContent value="tab3" :class="pt.content"> Tab three content </TabsContent> -->
  </TabsRoot>
</template>
<script setup lang="ts">
import { tabs } from "./tabs-tv";
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from "radix-vue";
import type {
  TabsContentProps,
  TabsIndicatorProps,
  TabsListProps,
  TabsRootProps,
  TabsRootEmits,
  TabsTriggerProps,
} from "radix-vue";
import { usePassThrough } from "@/composables";
import { ref } from "vue";

export type StarTabsModel = {
  trigger: string;
  content?: any;
  disabled?: boolean;
  default?: boolean;
};
export type StarTabsProps = {
  pt?: Partial<(typeof tabs)["slots"]>;
  variant?: "default" | "card";
  model: StarTabsModel[];
  modelValue: TabsRootProps["modelValue"];
};
const props = withDefaults(defineProps<StarTabsProps>(), {
  pt: undefined,
  ...tabs.defaultVariants,
});

const pt = usePassThrough(tabs, props);

const t = ref(props.model.find((_) => _.default)?.trigger);
const model: string = defineModel();
</script>
