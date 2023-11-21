import { tv } from "@/utils/tv";
import { dropdownItem } from "./item-tv";

export const sideNavItem = tv({
  // extend: dropdownItem,
  slots: {
    base: "gap-4",
    wrapper: "",
    title: "",
    description: "",
    selectedIcon: "",
    shortcut: "",
  },
  variants: {
    size: {
      small: {
        base: "",
      },
      medium: {
        base: "",
      },
      large: {
        base: "p-4",
      },
    },
    isIconOnly: {
      true: {
        wrapper: "hidden",
      },
    },
  },
});
