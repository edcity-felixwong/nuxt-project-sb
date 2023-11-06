<template>
  <StarThemeProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </StarThemeProvider>
</template>
<script setup>
import "./theme/mytheme.scss";
import "@/styles";

import { StarThemeProvider } from "#components";
</script>
