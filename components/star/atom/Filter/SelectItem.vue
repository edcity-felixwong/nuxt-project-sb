<template>
  <div class="flex items-center" @click="props.model.command">
    <PDivider v-if="props.model.separator" />
    <slot name="icon">
      <Icon v-if="props.model.icon" :icon="props.model.icon" />
    </slot>
    <span v-if="props.model.label" :class="pt.text">{{ props.model.label }}</span>
    <div class="text-red-800">{{ JSON.stringify(props.model.selected) }}</div>
    <div class="text-red-800">{{ JSON.stringify(props.model.focused) }}</div>
    <div class="text-red-800">{{ JSON.stringify(props.model.disabled) }}</div>
  </div>
</template>
<script setup lang="ts">
import PMenu, { type MenuProps } from "primevue/menu";
import { selectItemPt, type Item, type Variants } from "./select-item-tv";
import { usePassThrough } from "@/composables";
import PDivider from "primevue/divider";
import { Icon } from "@iconify/vue";

type Props = {
  model: Item;
  pt?: typeof selectItemPt.slots;
};
const props = withDefaults(defineProps<Props>(), {
  ...selectItemPt.defaultVariants,
});
const pt = usePassThrough(selectItemPt, props);
</script>
