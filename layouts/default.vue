<template>
  <div :class="`${bem()} h-screen overflow-y-hidden overflow-x-hidden flex flex-col`">
    <StarAlert
      :class="`${bem('alert')}`"
      :value="[
        {
          html: `On Tuesday November 28th from 9:00AM PT - 12PM PT (5:00PM UTC - 8PM UTC), we will be
      performing system maintenance on support.mozilla.org. During the maintenance period, users
      will not be able to sign in to the website, and all users signed in at the start of the
      maintenance period will be signed out.`,
        },
      ]"
    />
    <StarIdentityBar :class="`${bem('heading')}`" />
    <StarHeader :class="`${bem('header')}`" :isMobile="!isLaptopOrLarger" />
    <!-- <StarBreadcrumbNav :class="`${bem('breadcrumb-nav')}`" /> -->
    <section :class="`${bem('body')} flex-1 overflow-hidden flex flex-row`">
      <!-- <StarSideNav :class="`${bem('side-nav')}`" /> -->
      <main role="main" :class="`${bem('main')} w-full h-full flex flex-col`">
        <!-- <StarBreadcrumbNav :class="`${bem('breadcrumb-nav')}`" /> -->
        <section :class="`${bem('page')} flex-1 overflow-y-hidden overflow-x-hidden flex flex-row`">
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
  StarIdentityBar,
} from "#components";
import { createBEM, useMedia } from "@/composables";

const { isLaptopOrLarger } = useMedia();

const bem = createBEM("layout");
</script>
