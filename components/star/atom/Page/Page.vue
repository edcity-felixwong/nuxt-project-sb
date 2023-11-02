<template>
  <div
    :class="`${bem('root')} w-full h-full overflow-y-auto overflow-x-hidden`"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
const bem = createBEM("page");
</script>
