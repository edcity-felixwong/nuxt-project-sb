<template>
  <div class="space-x-2 flex">
    <template v-for="action in props.actions" :key="action">
      <CardButton :action="action" />
    </template>
  </div>
</template>
<script setup lang="ts">
import CardButton from "./CardButton.vue";
import type { CardButtonProps } from "./CardButton.vue";

export type CardButtonBarProps = {
  actions: CardButtonProps["action"][];
  locale?: CardButtonProps["locale"];
};
const props = withDefaults(defineProps<CardButtonBarProps>(), {});
</script>
