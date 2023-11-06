<template>
  <StarPage>
    <section class="flex flex-row">
      <StarSideNav />
      <div>
        <div>pos: {{ x }}, {{ y }}</div>
        <div>size: {{ width }}, {{ height }}</div>
        <PButton
          :pt="{
            root: { class: 'hover:active:scale-95 duration-300 ease-in-out' },
          }"
        >
          qweqwe
        </PButton>

        <div class="h-[3000px]" />
      </div>
    </section>
  </StarPage>
</template>
<script setup lang="ts">
// import PCalendar from "primevue/calendar";
import { StarSideNav, StarPage } from "#components";

const { x, y } = useMouse();
const { width, height } = useWindowSize();
</script>
