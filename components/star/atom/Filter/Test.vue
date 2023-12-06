<template>
  <div class="card justify-content-center flex">
    <PMultiSelect
      v-model="p213"
      :options="cities"
      optionLabel="name"
      placeholder="Select Cities"
      :maxSelectedLabels="2"
    />
  </div>
</template>
<script setup lang="ts">
import PMultiSelect from "primevue/multiselect";
// import PButton from "primevue/button";
// import PMenu from "primevue/menu";
// import PListbox from "primevue/listbox";
import { ref, computed, toRefs } from "vue";
// import { computedWithControl, watchArray } from "@vueuse/core";
// import { usePassThroughS } from "@/composables";
// import {
//   listboxPt,
//   menuPt,
//   multiSelectPt,
//   type MultiSelectProps,
//   type ListboxProps,
//   type MenuProps,
// } from "./multiple-select-tv";
// import { Icon } from "@iconify/vue";

const p213 = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
</script>
