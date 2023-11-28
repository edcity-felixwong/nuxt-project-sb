<template>
  <footer :class="`${bem('root')}`">
    <slot name="divider">
      <PDivider :pt="pt" />
    </slot>
    <div :class="pt.list">
      <slot name="item">
        <template v-for="item in model">
          <a :href="item.href" target="_blank" :class="pt.item">{{ item.label }}</a>
        </template>
      </slot>
    </div>
  </footer>
</template>
<script setup lang="ts">
import PDivider, { type DividerPassThroughOptions } from "primevue/divider";
import { withDefaults } from "vue";
import { createBEM } from "@/composables/bem";
import { usePassThrough } from "@/composables/usePassThrough";
import { footer } from "./footer-tv";

const bem = createBEM("footer");

export interface Item {
  label: string;
  href: string;
}
/** Variants can be exposed from tv, like VariantProps<footer>,
 * but vue is too lame to parse complex types 🥴
 */
export type Props = {
  model: Item[];
  isMobile?: boolean;
  pt?: DividerPassThroughOptions;
};
const props = withDefaults(defineProps<Props>(), {
  ...footer.defaultVariants,
});

const pt = usePassThrough(footer, props);
</script>
