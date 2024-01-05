<template>
  <div :class="`${bem()} h-screen overflow-y-hidden overflow-x-hidden flex flex-col`">
    <!-- TODO check if message exists -->
    <StarAlert v-if="notice?.length" :class="`${bem('alert')}`" :value="notice" />
    <StarIdentityBar
      :class="`${bem('heading')}`"
      :user="user"
      :school="school"
      :loading="isLoading"
    />
    <StarHeader :class="`${bem('header')}`" :isMobile="!isLaptopOrLarger" :role="role?.role" />
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
import { StarAlert, StarIdentityBar, StarHeader } from "@/components/star";
import { createBEM, useMedia, useNotice } from "@/composables";
import { useUser, useSchool, useRole } from "@/services/api";

const { isLaptopOrLarger } = useMedia();

const bem = createBEM("layout");

const { data: user, isLoading } = useUser();
const { data: school } = useSchool();
const { data: role } = useRole();
const notice = useNotice();
</script>
