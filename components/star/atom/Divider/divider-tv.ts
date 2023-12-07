import { tv } from "@/utils/tv";

export const divider = tv({
  slots: {
    root: "px-0 from-transparent  before:h-[1px] before:bg-gradient-to-r before:via-default-800/10 before:via-50% before:to-transparent before:w-auto before:right-0 before:border-none",
  },
  variants: {
    isMobile: {
      true: {
        root: " from-primary-900 before:bg-gradient-to-r before:from-default-800/10 to-transparent before:to-transparent",
      },
    },
  },
  defaultVariants: {
    isMobile: false,
  },
});
