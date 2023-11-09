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
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g id="chevron-down">
                <path
                  d="M12,15.25a.74.74,0,0,1-.53-.22l-5-5A.75.75,0,0,1,7.53,9L12,13.44,16.47,9A.75.75,0,0,1,17.53,10l-5,5A.74.74,0,0,1,12,15.25Z"
                />
              </g>
            </svg>
          </template>
          <template #default> qweqwe </template>
        </PButton>

        <div class="h-[3000px]" />
      </div>
    </section>
  </StarPage>
</template>
<script setup lang="ts">
// import PCalendar from "primevue/calendar";
import { StarPage, StarSideNav } from "#components";

const { x, y } = useMouse();
const { width, height } = useWindowSize();
</script>
