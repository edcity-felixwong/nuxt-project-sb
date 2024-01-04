import { tv } from "@/utils";

export const optionItem = tv({
  slots: {
    root: "h-20 min-w-[256px] p-5 border rounded-medium",
    wrapper: "flex gap-4",
    iconWrapper:
      "min-w-[40px] min-h-[40px] w-10 h-10 flex items-center justify-center bg-default-100 rounded-medium",
    icon: "w-6 h-6",
    body: "flex justify-center flex-col",
    title: "font-semibold text-left",
    description: "text-sm text-left",
  },
  variants: {
    variant: {
      default: {},
    },
  },
});

export const paperTabItem = tv({
  extend: optionItem,
  variants: {
    isSelected: {
      true: {
        root: "border-none",
      },
      false: {
        root: "border-none",
        iconWrapper: "bg-default-200",
        wrapper: "[&_*]:text-inherit text-default-600",
      },
    },
  },
  defaultVariants: {
    isSelected: false,
  },
});
