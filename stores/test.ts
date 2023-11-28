import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTestStore = defineStore(
  "test",
  () => {
    const test = ref(0);
    const doubleCount = computed(() => test.value * 2);
    const increment = () => {
      test.value += 1;
    };
    return {
      test,
      doubleCount,
      increment,
    };
  },
  { persist: true }
);
