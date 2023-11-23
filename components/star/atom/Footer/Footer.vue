<template>
  <footer>
    <slot name="divider">
      <PDivider
        :pt="{
          root: 'from-transparent before:h-[1px] before:bg-gradient-to-r before:via-[#0000001f] before:via-50% before:to-transparent',
        }"
      />
    </slot>
    <div class="text-default-500 flex justify-center w-full px-5 pb-5 space-x-4">
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
import { footer } from "./footer-tv";
import { VariantProps } from "tailwind-variants";

type PassThrough = DividerPassThroughOptions & {
  footer: string;
};
type Props = VariantProps<typeof footer> & {
  pt?: DividerPassThroughOptions;
};
const props = withDefaults(defineProps<Props>(), {
  // pt: {},
  ...footer.defaultVariants,
});
</script>
