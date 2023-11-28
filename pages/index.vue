<template>
  <StarPage>
    <section class="">
      <div class="h-[300px]"></div>
      <StarFooter />
      <UserMenu
        :user="{
          fullname: 'losum ipsum',
          schoolName: 'hkedity wqwe school no.2',
          avatar:
            'https://www.dev.hkedcity.net/citizen/profile/profile_picture.php?size=80&user_id=200000150',
        }"
        :popup="false"
        :model="[
          {
            label: 'test123123',
            command: () => console.log('qwe'),
          },
        ]"
      />
      <div class="card justify-content-center flex">
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
import UserMenu from "@/components/star/atom/IdentityBar/UserMenu.vue";

import { ref } from "vue";

const op = ref();

const toggle = (event) => {
  op.value.toggle(event);
};

// const { isTabletOrLarger } = useMedia();
const toast = useToast();

fetch("https://e.star.dev.hkedcity.net/jwt.php")
  .then((r) => r.text)
  .then((r) => console.log(r));
</script>
