<template>
  <OptionItem v-bind="props" :pt="pt" />
</template>

<script setup lang="ts">
import { OptionItem, paperTabItem as paperTabItemTv } from "#star/atom/Option";
import type { StarOptionItemProps } from "#star/atom/Option";
import { usePassThrough } from "@/composables";
import { watch } from "vue";

export type PaperTabItemProps = {
  isSelected?: boolean;
} & StarOptionItemProps;
const props = withDefaults(defineProps<PaperTabItemProps>(), {
  ...paperTabItemTv.defaultVariants,
});

const pt = usePassThrough(paperTabItemTv, props);
</script>
