import { tv } from "@/utils/tv";
import { dropdownItem } from "@/components/star/atom/MenuItem/item-tv";

export const sideNav = tv({
  slots: {
    base: ["w-[76px] py-2 px-2.5 relative transition-all bg-[--sui-color-background] border-r"],
    list: ["qwe"],
  },
  // variants: {
  //   isCollasped:
  // }
});

export const sideNavItem = tv({
  extend: dropdownItem,
  slots: {
    base: ["test"],
  },
});
