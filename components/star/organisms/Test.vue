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
console.log("🚀 ~ file: Test.vue:11 ~ nuxtApp:", nuxtApp);
console.log(
  "🚀 ~ file: Test.vue:11 ~ nuxtApp:",
  nuxtApp.vueApp.config.globalProperties.$primevue.config.pt
);

const primevue = usePrimeVue();
console.log("🚀 ~ file: Test.vue:19 ~ primevue:", primevue);
console.log("🚀 ~ file: Test.vue:19 ~ primevue:", primevue.config.pt);

const defaultPT = useDefaultPT();
console.log("🚀 ~ file: Test.vue:24 ~ defaultPT:", defaultPT);
console.log("🚀 ~ file: Test.vue:24 ~ defaultPT:", defaultPT.menu);

const test = ref(null);
// console.log("🚀 ~ file: Test.vue:6 ~ test:", test.value.defaultPT);
// console.log("🚀 ~ file: Test.vue:6 ~ test:", test.value);
onMounted(() => {
  console.log("🚀 ~ file: Test.vue:6 ~ test:", test.value.defaultPT);
  console.log("🚀 ~ file: Test.vue:6 ~ test:", test.value);
});
</script>
