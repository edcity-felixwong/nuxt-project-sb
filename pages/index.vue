<template>
  <StarPage>
    <section class="">
      <StarBanner :subject="params.subject" />
      <StarBreadcrumbNav />
      <div class="h-[300px]"></div>
      <StarFooter />

      <div class="h-[300px]"></div>
    </section>
  </StarPage>
</template>
<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import { StarFooter, StarPage, StarBanner, StarBreadcrumbNav } from "#components";
import { ref } from "vue";
import { useUrlSearchParams } from "@vueuse/core";

const params = useUrlSearchParams("history");

fetch("https://e.star.dev.hkedcity.net/jwt.php")
  .then((r) => r.text)
  .then((r) => console.log(r));
</script>
