import { tv } from "@/utils/tv";

export const dropdownItem = tv({
  slots: {
    base: [
      "flex",
      "group",
      "gap-2",
      "items-center",
      "justify-between",
      "relative",
      "px-2",
      "py-1.5",
      "w-full",
      // "h-full",
      "box-border",
      "rounded-small",
      "outline-none",
      "cursor-pointer",
      "tap-highlight-transparent",
      "data-[pressed=true]:opacity-70",
      // focus ring
      // ...dataFocusVisibleClasses,
      "focus-visible:dark:ring-offset-background-content1",
    ],
    wrapper: "w-full flex flex-col items-start justify-center",
    title: "flex-1 text-small font-normal truncate",
    description: ["w-full", "text-tiny", "text-foreground-500", "group-hover:text-current"],
    selectedIcon: ["text-inherit", "w-3", "h-3", "flex-shrink-0"],
    shortcut: [
      "px-1",
      "py-0.5",
      "rounded",
      "font-sans",
      "text-foreground-500",
      "text-tiny",
      "border-small",
      "border-default-300",
      "group-hover:border-current",
    ],
  },
  variants: {
    variant: {
      solid: {
        base: "",
      },
      bordered: {
        base: "border-medium border-transparent bg-transparent",
      },
      light: {
        base: "bg-transparent",
      },
      faded: {
        base: "border-small border-transparent hover:border-default hover:bg-default-100",
      },
      flat: {
        base: "",
      },
      shadow: {
        base: "hover:shadow-lg",
      },
    },
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
      },
    },
    disableAnimation: {
      true: {},
      false: {},
    },
  },
  defaultVariants: {
    variant: "solid",
    color: "default",
    disableAnimation: false,
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: {
        base: "hover:bg-default hover:text-default-foreground",
      },
    },
    {
      variant: "solid",
      color: "primary",
      class: {
        base: "hover:bg-primary hover:text-primary-foreground",
      },
    },
    {
      variant: "solid",
      color: "secondary",
      class: {
        base: "hover:bg-secondary hover:text-secondary-foreground",
      },
    },
    {
      variant: "solid",
      color: "success",
      class: {
        base: "hover:bg-success hover:text-success-foreground",
      },
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        base: "hover:bg-warning hover:text-warning-foreground",
      },
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        base: "hover:bg-danger hover:text-danger-foreground",
      },
    },
    // shadow / color
    {
      variant: "shadow",
      color: "default",
      class: {
        base: "hover:shadow-default/50 hover:bg-default hover:text-default-foreground",
      },
    },
    {
      variant: "shadow",
      color: "primary",
      class: {
        base: "hover:shadow-primary/30 hover:bg-primary hover:text-primary-foreground",
      },
    },
    {
      variant: "shadow",
      color: "secondary",
      class: {
        base: "hover:shadow-secondary/30 hover:bg-secondary hover:text-secondary-foreground",
      },
    },
    {
      variant: "shadow",
      color: "success",
      class: {
        base: "hover:shadow-success/30 hover:bg-success hover:text-success-foreground",
      },
    },
    {
      variant: "shadow",
      color: "warning",
      class: {
        base: "hover:shadow-warning/30 hover:bg-warning hover:text-warning-foreground",
      },
    },
    {
      variant: "shadow",
      color: "danger",
      class: {
        base: "hover:shadow-danger/30 hover:bg-danger hover:text-danger-foreground",
      },
    },
    // bordered / color
    {
      variant: "bordered",
      color: "default",
      class: {
        base: "hover:border-default",
      },
    },
    {
      variant: "bordered",
      color: "primary",
      class: {
        base: "hover:border-primary hover:text-primary-800",
      },
    },
    {
      variant: "bordered",
      color: "secondary",
      class: {
        base: "hover:border-secondary hover:text-secondary",
      },
    },
    {
      variant: "bordered",
      color: "success",
      class: {
        base: "hover:border-success hover:text-success",
      },
    },
    {
      variant: "bordered",
      color: "warning",
      class: {
        base: "hover:border-warning hover:text-warning",
      },
    },
    {
      variant: "bordered",
      color: "danger",
      class: {
        base: "hover:border-danger hover:text-danger",
      },
    },
    // flat / color
    {
      variant: "flat",
      color: "default",
      class: {
        base: "hover:bg-default/40 hover:text-default-foreground",
      },
    },
    {
      variant: "flat",
      color: "primary",
      class: {
        base: "hover:bg-primary-200/25 hover:text-primary-800",
      },
    },
    {
      variant: "flat",
      color: "secondary",
      class: {
        base: "hover:bg-secondary/20 hover:text-secondary",
      },
    },
    {
      variant: "flat",
      color: "success",
      class: {
        base: "hover:bg-success/20 hover:text-success ",
      },
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        base: "hover:bg-warning/20 hover:text-warning",
      },
    },
    {
      variant: "flat",
      color: "danger",
      class: {
        base: "hover:bg-danger/20 hover:text-danger",
      },
    },
    // faded / color
    {
      variant: "faded",
      color: "default",
      class: {
        base: "hover:text-default-foreground",
      },
    },
    {
      variant: "faded",
      color: "primary",
      class: {
        base: "hover:text-primary-800",
      },
    },
    {
      variant: "faded",
      color: "secondary",
      class: {
        base: "hover:text-secondary",
      },
    },
    {
      variant: "faded",
      color: "success",
      class: {
        base: "hover:text-success",
      },
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        base: "hover:text-warning",
      },
    },
    {
      variant: "faded",
      color: "danger",
      class: {
        base: "hover:text-danger",
      },
    },
    // light / color
    {
      variant: "light",
      color: "default",
      class: {
        base: "hover:text-default-500",
      },
    },
    {
      variant: "light",
      color: "primary",
      class: {
        base: "hover:text-primary-800",
      },
    },
    {
      variant: "light",
      color: "secondary",
      class: {
        base: "hover:text-secondary",
      },
    },
    {
      variant: "light",
      color: "success",
      class: {
        base: "hover:text-success",
      },
    },
    {
      variant: "light",
      color: "warning",
      class: {
        base: "hover:text-warning",
      },
    },
    {
      variant: "light",
      color: "danger",
      class: {
        base: "hover:text-danger",
      },
    },
  ],
});
