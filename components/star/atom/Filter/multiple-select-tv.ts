import { tv } from "@/utils/tv";
import { type MultiSelectProps } from "primevue/multiselect";
import { type MenuProps } from "primevue/menu";
import { type ListboxProps } from "primevue/listbox";

type Slots = MultiSelectProps["pt"] & MenuProps["pt"] & ListboxProps["pt"];

export const multipleSelect = tv({
  slots: {} satisfies Slots,
});
