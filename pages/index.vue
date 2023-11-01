<template>
  <StarPage>
    <Layout>
      <StarSideNav />
      <div>
        <div class="h-2" />
        <div>pos: {{ x }}, {{ y }}</div>
        <div>size: {{ width }}, {{ height }}</div>
        <Badge dot count="2">
          <StarTryButton class="test"> asda </StarTryButton>
        </Badge>
        <div class="h-[3000px]" />
      </div>
    </Layout>
  </StarPage>
</template>
<script setup lang="ts">
// import { Button } from "tdesign-vue-next/esm";
import { StarTryButton, StarSideNav, StarPage } from "#components";
import { Badge, Layout, Aside } from "tdesign-vue-next/esm";

const { x, y } = useMouse();
const { width, height } = useWindowSize();
// useHead({style: [{innerHTML: ':root {--td-brand-color:#121212}'}]})
</script>
