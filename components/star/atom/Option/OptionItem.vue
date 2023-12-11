<template>
  <div
    class="h-20 w-64 border p-5 rounded-medium"
    data-sui-section="root"
    @click="props.model.command"
  >
    <slot name="wrapper">
      <div class="flex gap-4" data-sui-section="wrapper">
        <slot name="iconWrapper">
          <div
            class="w-10 h-10 flex items-center justify-center brightness-75 bg-[rgba(0,0,0,0)] rounded-medium"
            data-sui-section="iconWrapper"
          >
            <Icon v-if="props.model.icon" :icon="props.model.icon" width="1.5rem" height="1.5rem" />
          </div>
        </slot>
        <div data-sui-section="body" class="flex justify-center flex-col">
          <slot name="title">
            <div v-if="props.model.title" data-sui-section="title" class="font-semibold">
              {{ props.model.title }}
            </div>
          </slot>
          <slot name="description">
            <div
              v-if="props.model.description"
              data-sui-section="description"
              class="leading-4 text-base"
            >
              {{ props.model.description }}
            </div>
          </slot>
        </div>
      </div>
    </slot>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@/components/star";

export interface Item {
  icon?: string;
  title?: string;
  description?: string;
  command?: () => void;
  selected?: boolean;
}
export type Props = {
  model: Item;
  background?: string;
  foreground?: string;
  textColor?: string;
};
const props = withDefaults(defineProps<Props>(), {});
</script>
