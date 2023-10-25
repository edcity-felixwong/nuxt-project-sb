<template>
  <StarThemeProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </StarThemeProvider>
</template>
<script setup>
import "@/styles"
import { StarThemeProvider } from "#components"
</script>
