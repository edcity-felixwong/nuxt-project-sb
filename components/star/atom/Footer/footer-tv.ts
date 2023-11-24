import { tv } from "@/utils/tv";

export const footer = tv({
  slots: {
    root: "from-transparent before:mx-5 before:h-[1px] before:bg-gradient-to-r before:via-default-800/10 before:via-50% before:to-transparent",
    list: "text-default-500 flex justify-center w-full px-5 pb-5 gap-4 text-sm",
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
