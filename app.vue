<template>
  <StarThemeProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </StarThemeProvider>
</template>
<script setup>
import "@/styles";

import { StarThemeProvider } from "#star";
import { useEnvironmentStore } from "@/stores/environment";
const environmentStore = useEnvironmentStore();
</script>
