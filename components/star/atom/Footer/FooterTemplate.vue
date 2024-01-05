<template>
  <footer :class="`${bem('root')}`">
    <slot name="divider">
      <!-- <PDivider :pt="pt" /> -->
      <StarDivider :isMobile="props.isMobile" />
    </slot>
    <div :class="pt.list">
      <slot name="item">
        <template v-for="item in model" :key="item.label">
          <a :href="item.href" target="_blank" :class="pt.item">{{ item.label }}</a>
        </template>
      </slot>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { StarDivider } from "@/components/star/atom/Divider";
import { createBEM, usePassThrough } from "@/composables";
import type { DividerPassThroughOptions } from "primevue/divider";
import { withDefaults } from "vue";
import { footer } from "./footer-tv";

const bem = createBEM("footer");

export interface FooterItem {
  label: string;
  href: string;
}
/** Variants can be exposed from tv, like VariantProps<footer>,
 * but vue is too lame to parse complex types 🥴
 */
export type StarFooterProps = {
  model: FooterItem[];
  isMobile?: boolean;
  pt?: DividerPassThroughOptions;
};
const props = withDefaults(defineProps<StarFooterProps>(), {
  ...footer.defaultVariants,
  pt: undefined,
});
const pt = usePassThrough(footer, props);
</script>
