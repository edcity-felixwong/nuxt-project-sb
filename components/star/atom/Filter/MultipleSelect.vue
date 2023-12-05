<template>
  <div class="card flex justify-content-center">
    <!-- <PButton
      type="button"
      icon="pi pi-ellipsis-v"
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_menu"
    /> -->
    <PMultiSelect
      @click="toggle"
      scrollHeight="0"
      v-model="combined"
      :options="groupedCities"
      optionLabel="label"
      optionGroupLabel="label"
      optionGroupChildren="items"
      placeholder="Select Cities"
      :maxSelectedLabels="3"
      :pt="{
        header: 'hidden',
      }"
    />
    <!-- <div @click="toggle">{{ combined }}</div> -->
    <PMenu ref="menu" id="overlay_menu" :popup="true">
      <template #start>
        <PListbox
          v-model="selectedCity"
          :options="groupedCities"
          optionLabel="label"
          optionGroupLabel="label"
          optionGroupChildren="items"
          @change="toggle"
        >
          <!-- <template #optiongroup="slotProps">
            <div class="flex align-items-center">
              <img
                :alt="slotProps.option.name"
                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
                style="width: 18px"
              />
              <div>{{ slotProps.option.label }}</div>
            </div>
          </template> -->
        </PListbox>
        <PListbox
          v-model="selectedCity"
          :options="groupedCities"
          optionLabel="label"
          optionGroupLabel="label"
          optionGroupChildren="items"
          @change="toggle"
        >
          <template #optiongroup="slotProps">
            <div class="flex align-items-center">
              <img
                :alt="slotProps.option.name"
                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
                style="width: 18px"
              />
              <div>{{ slotProps.option.label }}</div>
            </div>
          </template>
        </PListbox>
      </template>
    </PMenu>
  </div>
  <!-- <PMultiSelect
    v-model="selectedCities"
    :options="groupedCities"
    optionLabel="label"
    optionGroupLabel="label"
    optionGroupChildren="items"
    display="comma"
    placeholder="Select Cities"
    class="w-full md:w-20rem"
    scrollHeight="800px"
  >
    <template #optiongroup="slotProps">
      <div class="flex align-items-center">
        <img
          :alt="slotProps.option.label"
          src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
          :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
          style="width: 18px"
        />
        <div>{{ slotProps.option.label }}</div>
      </div>
    </template>
  </PMultiSelect> -->
</template>
<script setup lang="ts">
import PMultiSelect from "primevue/multiselect";
import PButton from "primevue/button";
import PMenu from "primevue/menu";
import PListbox from "primevue/listbox";
import { ref, computed, toRefs } from "vue";
import { computedWithControl, watchArray } from "@vueuse/core";

function getItems(label: string) {
  return {
    1: [
      {
        label: "germany-choice",
      },
    ],
    2: [
      {
        label: "USA-choice",
      },
    ],
    // Japan: [
    //   {
    //     label: "japan-choice",
    //   },
    // ],
  }[label];
}
const selectedCities = ref([]);
// const groupedCities = ref([
//   {
//     label: "Germany",
//     code: "DE",
//     items: [
//       { label: "Berlin", value: "Berlin" },
//       { label: "Frankfurt", value: "Frankfurt" },
//       { label: "Hamburg", value: "Hamburg" },
//       { label: "Munich", value: "Munich" },
//     ],
//   },
//   {
//     label: "USA",
//     code: "US",
//     items: [
//       { label: "Chicago", value: "Chicago" },
//       { label: "Los Angeles", value: "Los Angeles" },
//       { label: "New York", value: "New York" },
//       { label: "San Francisco", value: "San Francisco" },
//     ],
//   },
//   {
//     label: "Japan",
//     code: "JP",
//     items: [
//       { label: "Kyoto", value: "Kyoto" },
//       { label: "Osaka", value: "Osaka" },
//       { label: "Tokyo", value: "Tokyo" },
//       { label: "Yokohama", value: "Yokohama" },
//     ],
//   },
// ]);
// const groupedCities = computedWithControl(
//   () => selectedCities.value,
//   () => [
//     {
//       label: "first choice",
//       code: "DE",
//       items: [
//         {
//           label: "1",
//         },
//         {
//           label: "2",
//         },
//       ],
//     },
//     {
//       label: "USA",
//       code: "US",
//       items: getItems(selectedCities.value?.[0]?.label),
//     },
//     // {
//     //   label: "Japan",
//     //   code: "JP",
//     //   items: getItems("Japan"),
//     // },
//   ]
// );

watchArray(selectedCities, (_, __, added) => {
  if (!added.length) return;

  console.log(`🚀 // DEBUG 🍔 ~ file: MultipleSelect.vue:112 ~ watchArray ~ added:`, added);
  selectedCities.value = added;
});
const menu = ref();
const items = ref([
  {
    label: "Options",
    items: [
      {
        label: "Refresh",
        icon: "pi pi-refresh",
      },
      {
        label: "Export",
        icon: "pi pi-upload",
      },
    ],
  },
]);
const toggle = (event) => {
  menu.value.toggle(event);
};

const selectedCity = ref();
const groupedCities = ref([
  {
    label: "Germany",
    code: "DE",
    items: [
      { label: "Berlin", value: "Berlin" },
      { label: "Frankfurt", value: "Frankfurt" },
      { label: "Hamburg", value: "Hamburg" },
      { label: "Munich", value: "Munich" },
    ],
  },
  // {
  //   label: "USA",
  //   code: "US",
  //   items: [
  //     { label: "Chicago", value: "Chicago" },
  //     { label: "Los Angeles", value: "Los Angeles" },
  //     { label: "New York", value: "New York" },
  //     { label: "San Francisco", value: "San Francisco" },
  //   ],
  // },
  // {
  //   label: "Japan",
  //   code: "JP",
  //   items: [
  //     { label: "Kyoto", value: "Kyoto" },
  //     { label: "Osaka", value: "Osaka" },
  //     { label: "Tokyo", value: "Tokyo" },
  //     { label: "Yokohama", value: "Yokohama" },
  //   ],
  // },
]);

const combined = computedWithControl(
  () => selectedCity.value,
  () => [selectedCity.value, selectedCity.value]
);
</script>
