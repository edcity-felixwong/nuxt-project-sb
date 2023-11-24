<template>
  <StarPage>
    <section class="">
      <StarFooter :isMobile="!isTabletOrLarger" />
      <div class="h-[300px]"></div>
    </section>
  </StarPage>
</template>
<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import { StarFooter, StarPage } from "#components";

const { isTabletOrLarger } = useMedia();
const toast = useToast();
</script>
