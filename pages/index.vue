<template>
  <StarPage>
    <section class="">
      <div class="h-[300px]"></div>
      <StarFooter />

      <div class="h-[300px]"></div>
    </section>
  </StarPage>
</template>
<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import { StarFooter, StarPage } from "#components";
import { ref } from "vue";

fetch("https://e.star.dev.hkedcity.net/jwt.php")
  .then((r) => r.text)
  .then((r) => console.log(r));
</script>
