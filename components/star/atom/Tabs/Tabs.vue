<template>
  <TabsRoot
    v-model="modelValue"
    :defaultValue="$props.model?.find((_) => _.default)?.trigger ?? props.model?.[0]?.trigger"
    :class="pt.root"
    data-sui-section="root"
  >
    <TabsList :ariaLabel="$props.ariaLabel" :class="pt.list" data-sui-section="list">
      <TabsIndicator :class="pt.indicator" data-sui-section="indicator">
        <slot name="indicator" />
      </TabsIndicator>
      <template v-for="item in props.model" :key="item.trigger">
        <TabsTrigger :value="item.trigger" :class="pt.trigger" data-sui-section="trigger">
          <slot name="trigger" v-bind="{ item, isSelected: item.trigger === modelValue }">
            {{ item.trigger }}
          </slot>
        </TabsTrigger>
      </template>
    </TabsList>
  </TabsRoot>
</template>
<script setup lang="ts">
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
import { ref, defineModel, onMounted, type Ref } from "vue";

import { tabs } from "./tabs-tv";

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
  ariaLabel?: string;
};
const props = withDefaults(defineProps<StarTabsProps>(), {
  pt: undefined,
  ...tabs.defaultVariants,
});

const pt = usePassThrough(tabs, props);

const modelValue = defineModel<string>({
  local: true,
  default: props.model?.find((_) => _.default)?.trigger ?? props.model?.[0]?.trigger,
});

/**
 * This handle the default of the `modelValue`,
 * Without this, the default will not feedback to the top parents.
 * Don't use `local: true` in `defineModel` in the parents,
 * otherwise the modelValue wouldn't bubble up well.
 *
 * Hopefully, if no value is passing down,
 * this `emit` will bubble up so the whole tree will get this default value.
 * But if any value is given from parent,
 * these value should be used instead,
 * so the whole two-way-bind tree is in-sync.
 *
 * example:
 * For component tree, A -> B -> C,
 * if no value is passed, `modelValue` should be the default in C.
 * if B passed a value `defaultB`, `modelValue` should be `defaultB` instead.
 * And so for A.
 */
const emit = defineEmits(["update:model-value"]);
onMounted(async () => {
  emit("update:model-value", modelValue?.value);
});
</script>
