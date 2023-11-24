<template>
  <!-- <PMenu ref="test" :pt="{ menu: twMerge(test.value.defaultPT, 'p-14') }"></PMenu> -->
  <PMenu ref="test"></PMenu>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { tv } from "@/utils/tv";
import { twMerge } from "tailwind-merge";
import { usePrimeVue } from "primevue/config";
import { useDefaultPT } from "@/composables/ueDefaultPT";

const nuxtApp = useNuxtApp();
const primevue = usePrimeVue();
const defaultPT = useDefaultPT();
const test = ref(null);
onMounted(() => {});
</script>
