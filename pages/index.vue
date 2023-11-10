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
            root: { class: 'hover:active:scale-95 duration-300 ease-in-out' },
          }"
        >
          <template #icon>
            <Icon icon="material-symbols:settings-power-rounded" width="24" />
          </template>
        </PButton>
        <StarSideNavItem />

        <div class="h-[3000px]" />
      </div>
    </section>
  </StarPage>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
// import PCalendar from "primevue/calendar";
import { StarPage, StarSideNav, StarSideNavItem } from "#components";

const { x, y } = useMouse();
const { width, height } = useWindowSize();
</script>
