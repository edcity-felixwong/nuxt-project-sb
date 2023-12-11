<template>
  <div class="card">
    <PPaginator
      v-model:first="first"
      :rows="1"
      :totalRecords="12"
      template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    />
    <div class="flex gap-2">
      <OptionItem :model="options[first]" />
      <OptionItem :model="options[first + 1]" />
      <OptionItem :model="options[first + 2]" />
      <OptionItem :model="options[first + 3]" />
    </div>
    <!-- <div class="p-3 text-center">
      <img
        :src="`https://primefaces.org/cdn/primevue/images/nature/nature${first + 1}.jpg`"
        :alt="first"
        class="shadow-2 border-round w-full sm:w-30rem"
      />
    </div> -->
  </div>
</template>

<script setup>
import PPaginator from "primevue/paginator";
import OptionItem from "./OptionItem.vue";
import { ref, onMounted } from "vue";

const options = [
  {
    icon: "material-symbols:crossword",
    title: "lorem ipsum",
    description: "lorem ipsum",
  },
  {
    icon: "material-symbols:crossword",
    title: "222222222",
    description: "23333333",
  },
  {
    icon: "material-symbols:crossword",
    title: "222222222",
    // description: "23333333",
  },
  {
    icon: "material-symbols:crossword",
    title: "lorem ipsum",
    description: "lorem ipsum",
  },
  {
    icon: "material-symbols:crossword",
    title: "222222222",
    description: "23333333",
  },
  {
    icon: "material-symbols:crossword",
    title: "222222222",
    // description: "23333333",
  },
  {
    icon: "material-symbols:crossword",
    title: "lorem ipsum",
    description: "lorem ipsum",
  },
  {
    icon: "material-symbols:crossword",
    title: "222222222",
    description: "23333333",
  },
  {
    icon: "material-symbols:crossword",
    title: "222222222",
    // description: "23333333",
  },
];
const first = ref(0);
</script>
