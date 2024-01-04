import { tv } from "@/utils";

const disabledClass = ["disabled:opacity-[--sui-opacity-disabled]"];
export const tabs = tv({
  slots: {
    root: "flex flex-col w-full sm:w-[300px]",
    list: "relative shrink-0 flex",
    indicator:
      "absolute left-0 h-[2px] bottom-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] transition-[width,transform] duration-300",
    trigger: ":not:disabled:cursor-pointer",
    content: "grow p-5 bg-white outline-none",
  },
  variants: {
    variant: {
      default: {
        root: "flex flex-col w-full sm:w-[300px]",
        list: "relative shrink-0 flex border-b",
        indicator: "bg-red-700",
        trigger: [
          "bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none  rounded-tl-md  hover:text-grass11 data-[state=active]:text-grass11 outline-none",
          ...disabledClass,
        ],
        content: "grow p-5 bg-white rounded-b-md outline-none",
      },
      card: {
        root: "bg-default-100",
        trigger: ["relative", "bg-transparent", ...disabledClass],
        indicator: "h-full bg-white shadow-sm",
      },
    },
  },
  defaultVariants: { variant: "default" },
});
