import { tv } from "@/utils/tv";
import type { MenubarPassThroughOptions } from "primevue/menubar";

export const indicatorClass = [
  // "after:content-none",
  "after:h-1",
  "after:w-full",
  "after:block",
  "after:bg-[--sui-color-warning-800]",
  "after:absolute",
  "after:bottom-1",
  "after:duration-300",
  "after:ease-in-out",
  "after:rounded-full",
  "after:transition-all",
  "[.p-submenu-list_.p-menuitem]:after:hidden",
];
const hideClass = ["after:scale-x-0", "after:opacity-0"];
const showClass = [
  "data-[p-highlight=true]:after:scale-x-100",
  "data-[p-highlight=true]:after:opacity-100",
  "data-[p-focused=true]:after:scale-x-100",
  "data-[p-focused=true]:after:opacity-100",
  "hover:after:scale-x-100",
  "hover:after:opacity-100",
];
export const selectedClass = [
  "[&>.p-menuitem-text]:data-[p-highlight=true]:text-blue-900", //
  "[&>.p-menuitem-link]:data-[p-highlight=true]:bg-[--sui-color-default-100]",
  "[&>.p-menuitem-icon]:data-[p-highlight=true]:text-blue-900",
  "[&>.p-submenu-icon]:data-[p-highlight=true]:text-blue-900",
];

export const header = tv({
  slots: {
    root: " h-[--sui-size-header-height] w-full border-b bg-[var(--sui-color-background)] rounded-none pl-1 pr-2 py-0",
    start: "mr-8",
    label: "font-semibold",
    submenu: [
      "rounded-medium",
      "p-2",
      "[&_.p-menuitem]:after:hidden",
      "top-full",
      "[&_.p-menuitem]:list-item",
    ],
    action: "p-5 rounded-medium",
    content: "rounded-medium",
    // icon: "text-default-700 [.p-menuitem.p-highlight > .p-menuitem-content]:text-primary-900",
    button: "rounded-small focus:border-default-100",
    menu: ["rounded-b-medium"],
    menuitem: ["h-full", "items-center", ...selectedClass],
  } satisfies MenubarPassThroughOptions,
  variants: {
    isMobile: {
      true: {
        root: "justify-between",
        button: "flex",
      },
      false: {
        root: "",
        menu: ["h-full", "relative"],
        menuitem: [
          "flex",
          ...indicatorClass, //
          ...hideClass, //
          ...showClass,
        ],
        submenu: [
          "shadow-none",
          "border",
          "rounded-b-medium",
          "rounded-tr-medium",
          "rounded-tl-none",
          "drop-shadow",
        ],
      },
    },
  },
  defaultVariants: {
    isMobile: false,
  },
});
