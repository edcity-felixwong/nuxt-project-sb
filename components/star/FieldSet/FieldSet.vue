<template>
  <PFieldset
    legend="start"
    :pt="{
      root: 'p-3 pt-0',
      legend:
        'px-1 text-sm tracking-widest p-0 mb-2 border-none bg-transparent uppercase font-normal all-petite-caps',
      content: 'px-1 p-0',
    }"
  >
    <template #legend></template>
    <slot />
  </PFieldset>
</template>
<script setup lang="ts">
import PFieldset from "primevue/fieldset";
</script>
