<template>
  <div :class="`${bem()} h-screen overflow-y-hidden overflow-x-hidden flex flex-col`">
    <StarAlert v-if="notice?.length" :class="`${bem('alert')}`" :value="notice" />
    <StarIdentityBar
      :class="`${bem('heading')}`"
      :user="user"
      :school="school"
      :isLoading="status === 'idle' || status === 'loading' || status === 'error'"
    />
    <StarHeader :class="`${bem('header')}`" :isMobile="!isLaptopOrLarger" :role="role?.role" />
    <section :class="`${bem('body')} flex-1 overflow-hidden flex flex-row`">
      <main role="main" :class="`${bem('main')} w-full h-full flex flex-col`">
        <section :class="`${bem('page')} flex-1 overflow-y-hidden overflow-x-hidden flex flex-row`">
          <slot />
        </section>
      </main>
    </section>
    <DynamicDialog />
  </div>
</template>
<script setup lang="ts">
import DynamicDialog from "primevue/dynamicdialog";

import { StarAlert, StarHeader, StarIdentityBar, useNotLoggedInDialog } from "#star";
import { createBEM, useMedia, useNotice } from "@/composables";
import { useRoleQuery, useSchool, useUser } from "@/services/api";

const { isLaptopOrLarger } = useMedia();

const bem = createBEM("layout");

/** jwt */
const { data: user, isLoading, isError, status } = useUser();

useNotLoggedInDialog(isError);

/** meta */
const { data: school } = useSchool();
const { data: role } = useRoleQuery();
const notice = useNotice();

function useIsAuthenticated(role) {}
function useNotAuthenticatedDialog() {}
</script>
