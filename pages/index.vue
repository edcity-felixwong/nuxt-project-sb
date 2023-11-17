<template>
  <StarPage>
    <section class="flex flex-row">
      <StarSideNav />
      <div>
        <div>pos: {{ x }}, {{ y }}</div>
        <div>size: {{ width }}, {{ height }}</div>
        <PButton
          label="qweqwe"
          :pt="{
            root: { class: 'focus:active:scale-95 duration-300 ease-in-out' },
          }"
        >
          <template #icon>
            <Icon icon="material-symbols:settings-power-rounded" width="24" />
          </template>
        </PButton>
        <StarSideNavItem />

        <div class="text-primary-700/20">qweqweqwe</div>
        <StarMenuItem>qweqwe</StarMenuItem>
        <StarMenuItemSideNavItem />
        <PMenu :model="items" :pt="{ menu: 'p-2', action: 'py-2.5 px-2' }"></PMenu>
        <div class="card justify-content-center flex">
          <PButton type="button" icon="pi pi-image" label="Image" @click="toggle" />

          <POverlayPanel ref="op">
            <img
              src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg"
              alt="Bamboo Watch"
            />
          </POverlayPanel>
        </div>
        <div class="card justify-content-center flex flex-wrap gap-2">
          <PButton v-tooltip="'Enter your username'" />
          <PButton v-tooltip.top="'Enter your username'" />
          <PButton v-tooltip.bottom="'Enter your username'" />
          <PButton v-tooltip.left="'Enter your username'" />
        </div>
        <div class="h-[3000px]" />
      </div>
    </section>
  </StarPage>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
// import PCalendar from "primevue/calendar";

import {
  StarPage,
  StarSideNav,
  StarSideNavItem,
  StarMenuItem,
  StarMenuItemSideNavItem,
} from "#components";

const op = ref();

const toggle = (event) => {
  op.value.toggle(event);
};

const items = ref([
  { label: "New", icon: "pi pi-plus" },
  { label: "Search", icon: "pi pi-search" },
]);

const { x, y } = useMouse();
const { width, height } = useWindowSize();

useHead({
  style: [
    {
      innerHTML: "test",
    },
  ],
});
</script>
