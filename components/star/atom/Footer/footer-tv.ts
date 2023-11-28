import { tv } from "@/utils/tv";

export const footer = tv({
  slots: {
    root: "from-transparent before:mx-[--sui-padding-footer] before:h-[1px] before:bg-gradient-to-r before:via-default-800/10 before:via-50% before:to-transparent before:w-auto before:right-0 before:border-none",
    list: "text-default-600 flex justify-center w-full px-[--sui-padding-footer] pb-[--sui-padding-footer] gap-4 text-sm",
    item: "hover:opacity-80",
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
