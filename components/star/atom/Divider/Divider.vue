<template>
  <PDivider :pt="pt" />
</template>
<script setup lang="ts">
import PDivider, { type DividerPassThroughOptions } from "primevue/divider";
import { withDefaults } from "vue";
import { usePassThrough } from "@/composables";
import { divider } from "./divider-tv";

export type StarDividerProps = {
  isMobile?: boolean;
  pt?: DividerPassThroughOptions;
};
const props = withDefaults(defineProps<StarDividerProps>(), {
  ...divider.defaultVariants,
});
const pt = usePassThrough(divider, props);
</script>
