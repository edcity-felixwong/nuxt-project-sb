import PChip, { type ChipProps, type ChipPassThroughOptions } from "primevue/chip";
import { tv } from "@/utils/tv";
export type ChipPt = Partial<Record<keyof ChipPassThroughOptions, string>>;
export const chip = tv({
  slots: {
    icon: "mr-2",
    startContent: "",
    endContent: "",
  } satisfies ChipPt,
  variants: {
    disabled: {
      true: {},
      false: {},
    },
    radius: {
      small: {},
      medium: {},
      large: {},
      full: {},
    },
    color: {
      default: {},
      primary: {},
      secondary: {},
      accent: {},
      success: {},
      warning: {},
      danger: {},
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
  defaultVariants: {
    color: "default",
    disabled: false,
    radius: "medium",
    size: "medium",
  },
});
