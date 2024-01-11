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
import { markRaw, defineAsyncComponent, defineComponent } from "vue";
import { useDialog } from "primevue/usedialog";
import DynamicDialog from "primevue/dynamicdialog";

import { StarAlert, StarIdentityBar, StarHeader, StarButton, ErrorDialog } from "@/components/star";
import { createBEM, useMedia, useNotice } from "@/composables";
import { useUser, useSchool, useRole } from "@/services/api";

const { isLaptopOrLarger } = useMedia();

const bem = createBEM("layout");

const dialog = useDialog();

/** jwt */
const { data: user, isLoading, isError, status } = useUser();
watch(isError, () => {
  console.log(`🚀 // DEBUG 🍔 ~ file: default.vue:33 ~ watch ~ isError:`, isError.value);
  if (!isError.value) return;
  dialog.open(ErrorDialog, {
    onClose: () => {
      console.log(`🚀 // DEBUG 🍔 ~ file: default.vue:43 ~ dialog.open ~ 'close':`, "close");
    },
    props: {
      blockScroll: true,
      draggable: false,
      // header: "header",
      // footer: "footer",
      modal: true,
      closable: true,
    },
  });
});
/** meta */
const { data: school } = useSchool();
const { data: role } = useRole();
const notice = useNotice();
</script>
