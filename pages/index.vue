<template>
  <StarPage>
    <section class="">
      <StarBanner :subject="route.query['subject']" />
      <StarBreadcrumbNav />
      <StarFooter />
    </section>
  </StarPage>
</template>
<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import { StarFooter, StarPage, StarBanner, StarBreadcrumbNav } from "#components";
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

watchEffect(() =>
  fetch("https://e.star.dev.hkedcity.net/jwt.php", {
    credentials: "include",
  })
    .then((r) => r.text())
    .then((r) => {
      r;
      console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:25 ~ .then ~ r:`, r);
    })
);
</script>
