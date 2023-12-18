<template>
  <PFieldset v-bind="props" :pt="pt">
    <!-- <template #legend></template> -->
    <slot />
  </PFieldset>
</template>
<script setup lang="ts">
import { usePassThrough } from "@/composables";
import { tv } from "@/utils";
import type { FieldsetPassThroughOptions } from "primevue/fieldset";
import PFieldset from "primevue/fieldset";

const fieldSet = tv({
  slots: {
    root: "p-3 pt-0",
    legend:
      "px-1 text-xs tracking-widest p-0 mb-2 border-none bg-transparent uppercase font-normal text-text-450",
    content: "px-1 p-0",
    legendTitle: "text-inherit",
  } satisfies FieldsetPassThroughOptions,
});
export type StarFieldSetProps = {
  legend?: string;
  collapsed?: boolean;
  toggleable?: boolean;
  unstyled?: boolean;
  pt?: FieldsetPassThroughOptions;
};
const props = withDefaults(defineProps<StarFieldSetProps>(), {
  collapsed: false,
  toggleable: false,
  unstyled: false,
});
const pt = usePassThrough(fieldSet, props);
</script>
