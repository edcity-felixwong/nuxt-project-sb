<template>
  <div class="flex items-center gap-1 mt-2 overflow-hidden">
    <slot name="default" />
  </div>
</template>
<script setup lang="ts">
import { ref, defineSlots } from "vue";
</script>
