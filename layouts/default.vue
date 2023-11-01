<template>
  <div :class="`${bem()} h-screen overflow-y-hidden overflow-x-hidden`">
    <StarAlert :class="`${bem('alert')}`">
      lorem ipsum ttttttttttt q2312
    </StarAlert>
    <StarHeader :class="`${bem('header')}`" />
    <Layout :class="`${bem('body')} h-full `">
      <StarSideNav :class="`${bem('side-nav')}`" />
      <main :class="`${bem('main')} w-full h-full`">
        <StarBreadcrumbNav :class="`${bem('breadcrumb-nav')}`" />
        <Layout
          :class="`${bem(
            'page'
          )} w-full h-full overflow-y-hidden overflow-x-hidden`"
        >
          <slot />
        </Layout>
      </main>
    </Layout>
    <!-- <StarFooter /> -->
  </div>
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
