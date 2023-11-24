<template>
  <footer :class="`${bem('root')}`">
    <slot name="divider">
      <PDivider :pt="pt" />
    </slot>
    <div :class="pt.list">
      <slot name="item">
        <span>© 2023 香港教育城有限公司</span>
        <a href="" class="transition-all drop-shadow-[0_0_2em_#646cffaa]">私隱政策聲明</a>
        <a href="">私隱政策聲明</a>
        <a href="">私隱政策聲明</a>
        <a href="">私隱政策聲明</a>
        <a href="">私隱政策聲明</a>
      </slot>
    </div>
  </footer>
</template>
<script setup lang="ts">
import type { DividerPassThroughOptions } from "primevue/divider";
import { withDefaults } from "vue";
import { createBEM } from "@/composables/bem";
import { usePassThrough } from "@/composables/usePassThrough";
import { footer } from "./footer-tv";
import { usePropsWatcher } from "@/composables/test-read-props";

const bem = createBEM("footer");

/** Variants can be exposed from tv, like VariantProps<footer>,
 * but vue is too lame to parse complex types 🥴
 */
type Props = {
  isMobile?: boolean;
  pt?: DividerPassThroughOptions;
};
const props = withDefaults(defineProps<Props>(), {
  ...footer.defaultVariants,
});

usePropsWatcher(props);

const pt = usePassThrough(footer, props);
</script>
