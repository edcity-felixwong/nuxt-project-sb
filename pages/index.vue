<template>
  <StarPage>
    <section class="">
      <div class="h-[300px]"></div>
      <StarFooter />
      <div class="card flex justify-content-center">
        <PButton type="button" icon="pi pi-image" label="Image" @click="toggle" />

        <POverlayPanel ref="op">
          <img
            src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg"
            alt="Bamboo Watch"
          />
          <div class="h-[300px]"></div>
        </POverlayPanel>
      </div>
      <div class="h-[300px]"></div>
    </section>
  </StarPage>
</template>
<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import { StarFooter, StarPage } from "#components";
import POverlayPanel from "primevue/overlaypanel";

import { ref } from "vue";

const op = ref();

const toggle = (event) => {
  op.value.toggle(event);
};

// const { isTabletOrLarger } = useMedia();
const toast = useToast();
</script>
