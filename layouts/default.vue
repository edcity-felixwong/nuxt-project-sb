<template>
  <Layout :class="`${bem()} min-h-screen`">
    <StarAlert :class="`${bem('alert')}`">
      lorem ipsum ttttttttttt q2312
    </StarAlert>
    <StarHeader :class="`${bem('header')}`" />
    <Layout :class="`${bem('body')}`">
      <StarSideNav :class="`${bem('side-nav')}`" />
      <Layout :class="`${bem('main')}`">
        <StarBreadcrumbNav :class="`${bem('breadcrumb-nav')}`" />
        <Layout :class="`${bem('page')}`">
          <slot />
        </Layout>
      </Layout>
    </Layout>
    <StarFooter />
  </Layout>
</template>
<script setup lang="ts">
import { Layout, Aside } from "tdesign-vue-next/esm";
import {
  StarHeader,
  StarAlert,
  StarFooter,
  StarSideNav,
  StarBreadcrumbNav,
} from "#components";

const bem = createBEM("layout");
</script>
