import { tv } from "@/utils/tv";

export const footer = tv({
  slots: {
    root: "from-transparent before:h-[1px] before:bg-gradient-to-r before:via-[#0000001f] before:via-50% before:to-transparent",
  },
  variants: {
    /** aweqwe */
    isMobile: {
      true: "",
      false: "",
    },
  },
});
