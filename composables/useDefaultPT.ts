import { usePrimeVue } from "primevue/config";
import type { PrimeVuePTOptions } from "primevue/config";

export function useDefaultPT() {
  return usePrimeVue().config?.pt as PrimeVuePTOptions;
}
