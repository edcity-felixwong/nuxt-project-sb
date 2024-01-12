import PrimevueNuxtModule from "nuxt-primevue";
import type { PrimeVueConfiguration, PrimeVuePTOptions } from "primevue/config";

type PrimevueModuleOptions = NonNullable<
  Parameters<NonNullable<(typeof PrimevueNuxtModule)["getOptions"]>>[0]
>;
export const pt: PrimeVuePTOptions = {
  directives: {
    tooltip: {
      root: {
        class:
          "[&.p-tooltip.p-tooltip-right_.p-tooltip-arrow]:border-r-gray-950 [&.p-tooltip.p-tooltip-left_.p-tooltip-arrow]:border-l-gray-950 [&.p-tooltip.p-tooltip-top_.p-tooltip-arrow]:border-t-gray-950 [&.p-tooltip.p-tooltip-bottom_.p-tooltip-arrow]:border-b-gray-950",
      },
      // arrow: {
      //   class:
      //     "[.p-tooltip-right_&]:border-r-gray-950 [.p-tooltip-left_&]:border-l-gray-950 [.p-tooltip-top_&]:border-t-gray-950 [.p-tooltip-bottom_&]:border-b-gray-950",
      // },
      text: { class: "text-sm bg-gray-950 px-3 py-1.5 rounded-xs" },
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
