<template>
  <div
    :class="`${bem()} h-screen overflow-y-hidden overflow-x-hidden flex flex-col`"
  >
    <PMessage
      :class="`${bem('alert')}`"
      :pt="{ root: { class: 'm-0 border-0' } }"
    >
      lorem ipsum ttttttttttt q2312
    </PMessage>
    <StarHeader :class="`${bem('header')}`" />
    <section :class="`${bem('body')} flex-1 overflow-hidden flex flex-row`">
      <StarSideNav :class="`${bem('side-nav')}`" />
      <main :class="`${bem('main')} w-full h-full flex flex-col`">
        <StarBreadcrumbNav :class="`${bem('breadcrumb-nav')}`" />
        <section
          :class="`${bem(
            'page'
          )} flex-1 overflow-y-hidden overflow-x-hidden flex flex-row`"
        >
          <slot />
        </section>
      </main>
    </section>
    <!-- <StarFooter /> -->
  </div>
</template>
<script setup lang="ts">
import {
  StarHeader,
  StarAlert,
  StarFooter,
  StarSideNav,
  StarBreadcrumbNav,
} from "#components";

const bem = createBEM("layout");
</script>
