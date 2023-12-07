<template>
  <PDivider :pt="pt" />
</template>
<script setup lang="ts">
import PDivider, { type DividerPassThroughOptions } from "primevue/divider";
import { withDefaults } from "vue";
import { createBEM } from "@/composables/bem";
import { usePassThrough } from "@/composables/usePassThrough";
import { divider } from "./divider-tv";

const bem = createBEM("divider");

export interface Item {
  label: string;
  href: string;
}
/** Variants can be exposed from tv, like VariantProps<footer>,
 * but vue is too lame to parse complex types 🥴
 */
export type Props = {
  isMobile?: boolean;
  pt?: DividerPassThroughOptions;
};
const props = withDefaults(defineProps<Props>(), {
  ...divider.defaultVariants,
});
const pt = usePassThrough(divider, props);
</script>
