<template>
  <div class="flex items-center">
    <Icon v-if="props.model.icon" icon="material-symbols:13mp-outline" />
    <span v-if="props.model.label">{{ props.model.label }}</span>
    <div class="text-red-800">{{ JSON.stringify(props.model.selected) }}</div>
    <div class="text-red-800">{{ JSON.stringify(props.model.focused) }}</div>
    <div class="text-red-800">{{ JSON.stringify(props.model.disabled) }}</div>
  </div>
</template>
<script setup lang="ts">
import PMenu, { type MenuProps } from "primevue/menu";
import { selectItemPt, type Item, type Variants } from "./select-item-tv";

type Props = {
  model: Item;
  pt?: typeof selectItemPt.slots;
};
const props = withDefaults(defineProps<Props>(), {
  ...selectItemPt.defaultVariants,
});
</script>
