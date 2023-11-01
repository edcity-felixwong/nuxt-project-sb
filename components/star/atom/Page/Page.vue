<template>
  <div
    :class="`${bem('root')} w-full h-full overflow-y-auto overflow-x-hidden`"
  >
    <slot />
    <slot name="footer">
      <StarFooter />
    </slot>
  </div>
</template>
<script setup lang="ts">
import { StarFooter } from "#components";
// import { LazyStarFooter } from '../../../../.nuxt/components';
const bem = createBEM("page");
</script>
