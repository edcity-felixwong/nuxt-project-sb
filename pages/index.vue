<template>
  <StarPage>
    <section class="flex flex-row">
      <StarSideNav />
      <div>
        <div>pos: {{ x }}, {{ y }}</div>
        <div>size: {{ width }}, {{ height }}</div>

        <div class="h-[3000px]" />
      </div>
    </section>
  </StarPage>
</template>
<script setup lang="ts">
import { StarSideNav, StarPage } from "#components";

const { x, y } = useMouse();
const { width, height } = useWindowSize();
</script>
