import PrimevueNuxtModule from "nuxt-primevue";
import type { PrimeVueConfiguration, PrimeVuePTOptions } from "primevue/config";

type PrimevueModuleOptions = NonNullable<
  Parameters<NonNullable<(typeof PrimevueNuxtModule)["getOptions"]>>[0]
>;
export const pt: PrimeVuePTOptions = {
  directives: {
    tooltip: {
      // arrow: {

      // },
      arrow: { class: "border-b-gray-950" },
      text: { class: "text-sm bg-gray-950 px-3 py-1.5 rounded-[8px]" },
    },
  },
};

export const primevue: PrimevueModuleOptions = {
  options: {
    ripple: true,
    // unstyled: true,
    pt,
    ptOptions: {
      /** Merge the custom class with pre-set style */
      mergeProps: true,
      /** Merge with primevue default if the section is missed
       * @see https://primevue.org/passthrough/#usepassthrough
       */
      mergeSections: true,
    },
  } as PrimeVueConfiguration,
  components: {
    prefix: "P",
    include: [
      "InputText",
      "Button",
      "Checkbox",
      "Dropdown",
      "InputSwitch",
      "Message",
      "Sidebar",
      "Menu",
      "OverlayPanel",
      "Menubar",
      "Toast",
      "Breadcrumb",
      "Divider",
      "Carousel",
      "MultiSelect",
      "Fieldset",
      "DynamicDialog",
    ],
    // exclude: ["editor", "chart"],
  },
};
