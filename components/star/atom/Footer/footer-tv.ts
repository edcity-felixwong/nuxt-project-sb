import { tv } from "@/utils/tv";

export const footer = tv({
  slots: {
    root: "from-transparent before:h-[1px] before:bg-gradient-to-r before:via-default-800/10 before:via-50% before:to-transparent before:w-auto before:right-0 before:border-none",
    list: "text-text-450 flex justify-center w-full  pb-[--sui-padding-footer] gap-4 text-sm",
    item: "hover:text-primary",
  },
  variants: {
    isMobile: {
      true: {
        root: " from-primary-900 before:bg-gradient-to-r before:from-default-800/10 to-transparent before:to-transparent",
        list: "flex-col gap-2",
      },
      false: {
        list: "",
      },
    },
  },
  defaultVariants: {
    isMobile: false,
  },
});
