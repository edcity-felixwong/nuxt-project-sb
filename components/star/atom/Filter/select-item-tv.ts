import { tv } from "@/utils/tv";
import { type MultiSelectProps } from "primevue/multiselect";
import { type MenuProps } from "primevue/menu";
import { type ListboxProps } from "primevue/listbox";
export type { MultiSelectProps, MenuProps, ListboxProps };
import { type Item } from "./MultipleSelect.vue";
export type { Item };
export const selectItemPt = tv({
  slots: {
    leftIcon: "",
    text: "",
    rightIcon: "",
    menu: "hidden",
  },
  variants: {
    disabled: {
      true: "text-default-500",
    },
    focused: {},
    selected: {},
    visible: {},
    separator: {},
  },
  defaultVariants: {
    disabled: false,
    focused: false,
    selected: false,
    visible: true,
    separator: false,
  },
});
