<template>
  <div class="h-2"></div>
  <div>pos: {{ x }}, {{ y }}</div>
  <div>size: {{ width }}, {{ height }}</div>
  <Badge dot count="2">
    <StarTryButton>asda</StarTryButton>
  </Badge>
</template>
<script setup lang="ts">
// import { Button } from "tdesign-vue-next/esm";
import { StarTryButton } from "#components"
import { Badge } from "tdesign-vue-next/esm"
const { x, y } = useMouse()
const { width, height } = useWindowSize()
// useHead({style: [{innerHTML: ':root {--td-brand-color:#121212}'}]})
</script>
