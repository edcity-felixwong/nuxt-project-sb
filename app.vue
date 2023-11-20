<template>
  <StarThemeProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </StarThemeProvider>
</template>
<script setup>
import "@/styles";
// import "@/theme/theme.css.ts";

import { StarThemeProvider } from "#components";
</script>
