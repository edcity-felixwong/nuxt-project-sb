import { tv } from "@/utils/tv";
import { type MultiSelectProps } from "primevue/multiselect";
import { type MenuProps } from "primevue/menu";
import { type ListboxProps } from "primevue/listbox";
export type { MultiSelectProps, MenuProps, ListboxProps };

export const multiSelectPt = tv({
  slots: {
    root: "p-0",
    header: "hidden",
  } satisfies MultiSelectProps["pt"],
  variants: {
    disabled: {
      root: "",
    },
  } satisfies MultiSelectProps,
  defaultVariants: {
    disabled: false,
  },
});
export const menuPt = tv({
  slots: {
    root: "p-0",
  } satisfies MenuProps["pt"],
});
export const listboxPt = tv({
  slots: {
    root: "",
    wrapper: "p-2",
    item: "py-0.5 px-4 data-[p-highlight=true]:bg-default-100",
  } satisfies ListboxProps["pt"],
});
