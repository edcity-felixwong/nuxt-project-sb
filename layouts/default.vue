<template>
  <Layout :class="`${bem()} min-h-screen`">
    <StarAlert :class="`${bem('alert')}`">
      lorem ipsum ttttttttttt q2312
    </StarAlert>
    <StarHeader :class="`${bem('header')}`" />
    <slot />
  </Layout>
</template>
<script setup lang="ts">
import { Layout } from "tdesign-vue-next/esm";
import { StarHeader, StarAlert } from "#components";

const bem = createBEM("layout");
</script>
