import { tv } from "@/utils/tv";
import type { MenubarPassThroughOptions } from "primevue/menubar";

export const header = tv({
  slots: {
    root: " min-h-[--sui-size-header-height] w-full border-b bg-[var(--sui-color-background)] rounded-none pl-1 pr-2",
    start: "mr-8",
    label: "font-semibold",
    // menuitem: "[&.p-highlight>.p-menuitem-content]:text-primary-900",
    submenu: "rounded-medium p-2",
    action: "p-5",
    content: "rounded-medium",
    // icon: "text-default-700 [.p-menuitem.p-highlight > .p-menuitem-content]:text-primary-900",
    button: "rounded-small focus:border-default-100",
    menu: "rounded-b-medium",
  } satisfies MenubarPassThroughOptions,
  variants: {
    isMobile: {
      true: {
        root: "justify-between",
      },
      false: {
        root: "",
      },
    },
  },
  defaultVariants: {
    isMobile: false,
  },
});
