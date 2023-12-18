import PChip from "primevue/chip";
import type { ChipProps, ChipPassThroughOptions } from "primevue/chip";
import { tv } from "@/utils/tv";
import { colorVariants } from "@/utils";

export type ChipPt = Partial<Record<keyof ChipPassThroughOptions, string>>;
export const chip = tv({
  slots: {
    root: [
      "relative",
      "max-w-fit",
      "inline-flex",
      "items-center",
      "justify-between",
      "box-border",
      "whitespace-nowrap",
    ],
    icon: ["[&>*]:text-inherit", "text-inherit"],
    startlabel: "",
    endlabel: "",
    dot: ["w-2", "h-2", "ml-1", "rounded-full"],
    label: "font-semibold text-inherit",
    removeIcon: [
      "z-10",
      "appearance-none",
      "outline-none",
      "select-none",
      "transition-opacity",
      "opacity-70",
      "hover:opacity-100",
      "cursor-pointer",
      "active:opacity-disabled",
      "tap-highlight-transparent",
    ],
    image: ["m-0", "w-5", "h-5"],
  } satisfies ChipPt,
  variants: {
    variant: {
      solid: {},
      bordered: {
        root: "border-medium bg-transparent",
      },
      light: {
        root: "bg-transparent",
      },
      flat: {},
      faded: {
        root: "border-medium",
      },
      shadow: {},
      dot: {
        root: "border-medium border-default text-default-foreground bg-transparent",
      },
    },
    disabled: {
      true: { root: "opacity-disabled pointer-events-none" },
      false: {},
    },
    radius: {
      none: {
        root: "rounded-none",
      },
      small: {
        root: "rounded-small",
      },
      medium: {
        root: "rounded-medium",
      },
      large: {
        root: "rounded-large",
      },
      full: {
        root: "rounded-full",
      },
    },
    color: {
      default: {
        dot: "bg-default-400",
      },
      primary: {
        dot: "bg-primary",
      },
      secondary: {
        dot: "bg-secondary",
      },
      success: {
        dot: "bg-success",
      },
      warning: {
        dot: "bg-warning",
      },
      danger: {
        dot: "bg-danger",
      },
      accent: {
        dot: "bg-accent",
      },
      info: {
        dot: "bg-info",
      },
      help: {
        dot: "bg-help",
      },
    },
    size: {
      xs: {
        root: "px-1 h-5 text-xs",
        label: "px-1",
        icon: "ml-1",
        removeIcon: "text-medium",
        avatar: "w-4 h-4",
      },
      small: {
        root: "px-1 h-6 text-sm",
        label: "px-1",
        icon: "ml-1",
        removeIcon: "text-medium",
        avatar: "w-4 h-4",
      },
      medium: {
        root: "px-1 h-7 text-md",
        label: "px-2",
        icon: "ml-2 -mr-1",
        removeIcon: "text-large",
        avatar: "w-5 h-5",
      },
      large: {
        root: "px-2 h-8 text-lg",
        label: "px-2",
        icon: "ml-2 -mr-1",
        removeIcon: "text-xl",
        avatar: "w-6 h-6",
      },
    },
    removable: {
      true: {
        label: "pr-1",
        removeIcon: "ml-0",
      },
    },
    // icon: {
    //   true: {
    //     root: "pl-1",
    //   },
    // },
  },
  defaultVariants: {
    variant: "solid",
    color: "default",
    disabled: false,
    radius: "full",
    size: "medium",
  },

  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: {
        root: colorVariants.solid.default,
      },
    },
    {
      variant: "solid",
      color: "primary",
      class: {
        root: colorVariants.solid.primary,
      },
    },
    {
      variant: "solid",
      color: "secondary",
      class: {
        root: colorVariants.solid.secondary,
      },
    },
    {
      variant: "solid",
      color: "success",
      class: {
        root: colorVariants.solid.success,
      },
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        root: colorVariants.solid.warning,
      },
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        root: colorVariants.solid.danger,
      },
    },
    {
      variant: "solid",
      color: "accent",
      class: {
        root: colorVariants.solid.accent,
      },
    },
    {
      variant: "solid",
      color: "info",
      class: {
        root: colorVariants.solid.info,
      },
    },
    {
      variant: "solid",
      color: "help",
      class: {
        root: colorVariants.solid.help,
      },
    },
    // shadow / color
    {
      variant: "shadow",
      color: "default",
      class: {
        root: colorVariants.shadow.default,
      },
    },
    {
      variant: "shadow",
      color: "primary",
      class: {
        root: colorVariants.shadow.primary,
      },
    },
    {
      variant: "shadow",
      color: "secondary",
      class: {
        root: colorVariants.shadow.secondary,
      },
    },
    {
      variant: "shadow",
      color: "success",
      class: {
        root: colorVariants.shadow.success,
      },
    },
    {
      variant: "shadow",
      color: "warning",
      class: {
        root: colorVariants.shadow.warning,
      },
    },
    {
      variant: "shadow",
      color: "danger",
      class: {
        root: colorVariants.shadow.danger,
      },
    },
    {
      variant: "shadow",
      color: "accent",
      class: {
        root: colorVariants.shadow.accent,
      },
    },
    {
      variant: "shadow",
      color: "info",
      class: {
        root: colorVariants.shadow.info,
      },
    },
    {
      variant: "shadow",
      color: "help",
      class: {
        root: colorVariants.shadow.help,
      },
    },
    // bordered / color
    {
      variant: "bordered",
      color: "default",
      class: {
        root: colorVariants.bordered.default,
      },
    },
    {
      variant: "bordered",
      color: "primary",
      class: {
        root: colorVariants.bordered.primary,
      },
    },
    {
      variant: "bordered",
      color: "secondary",
      class: {
        root: colorVariants.bordered.secondary,
      },
    },
    {
      variant: "bordered",
      color: "success",
      class: {
        root: colorVariants.bordered.success,
      },
    },
    {
      variant: "bordered",
      color: "warning",
      class: {
        root: colorVariants.bordered.warning,
      },
    },
    {
      variant: "bordered",
      color: "danger",
      class: {
        root: colorVariants.bordered.danger,
      },
    },
    {
      variant: "bordered",
      color: "accent",
      class: {
        root: colorVariants.bordered.accent,
      },
    },
    {
      variant: "bordered",
      color: "info",
      class: {
        root: colorVariants.bordered.info,
      },
    },
    {
      variant: "bordered",
      color: "help",
      class: {
        root: colorVariants.bordered.help,
      },
    },
    // flat / color
    {
      variant: "flat",
      color: "default",
      class: {
        root: colorVariants.flat.default,
      },
    },
    {
      variant: "flat",
      color: "primary",
      class: {
        root: colorVariants.flat.primary,
      },
    },
    {
      variant: "flat",
      color: "secondary",
      class: {
        root: colorVariants.flat.secondary,
      },
    },
    {
      variant: "flat",
      color: "success",
      class: {
        root: colorVariants.flat.success,
      },
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        root: colorVariants.flat.warning,
      },
    },
    {
      variant: "flat",
      color: "danger",
      class: {
        root: colorVariants.flat.danger,
      },
    },
    {
      variant: "flat",
      color: "accent",
      class: {
        root: colorVariants.flat.accent,
      },
    },
    {
      variant: "flat",
      color: "info",
      class: {
        root: colorVariants.flat.info,
      },
    },
    {
      variant: "flat",
      color: "help",
      class: {
        root: colorVariants.flat.help,
      },
    },
    // faded / color
    {
      variant: "faded",
      color: "default",
      class: {
        root: colorVariants.faded.default,
      },
    },
    {
      variant: "faded",
      color: "primary",
      class: {
        root: colorVariants.faded.primary,
      },
    },
    {
      variant: "faded",
      color: "secondary",
      class: {
        root: colorVariants.faded.secondary,
      },
    },
    {
      variant: "faded",
      color: "success",
      class: {
        root: colorVariants.faded.success,
      },
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        root: colorVariants.faded.warning,
      },
    },
    {
      variant: "faded",
      color: "danger",
      class: {
        root: colorVariants.faded.danger,
      },
    },
    {
      variant: "faded",
      color: "accent",
      class: {
        root: colorVariants.faded.accent,
      },
    },
    {
      variant: "faded",
      color: "info",
      class: {
        root: colorVariants.faded.info,
      },
    },
    {
      variant: "faded",
      color: "help",
      class: {
        root: colorVariants.faded.help,
      },
    },
    // light / color
    {
      variant: "light",
      color: "default",
      class: {
        root: colorVariants.light.default,
      },
    },
    {
      variant: "light",
      color: "primary",
      class: {
        root: colorVariants.light.primary,
      },
    },
    {
      variant: "light",
      color: "secondary",
      class: {
        root: colorVariants.light.secondary,
      },
    },
    {
      variant: "light",
      color: "success",
      class: {
        root: colorVariants.light.success,
      },
    },
    {
      variant: "light",
      color: "warning",
      class: {
        root: colorVariants.light.warning,
      },
    },
    {
      variant: "light",
      color: "danger",
      class: {
        root: colorVariants.light.danger,
      },
    },
    {
      variant: "light",
      color: "accent",
      class: {
        root: colorVariants.light.accent,
      },
    },
    {
      variant: "light",
      color: "info",
      class: {
        root: colorVariants.light.info,
      },
    },
    {
      variant: "light",
      color: "help",
      class: {
        root: colorVariants.light.help,
      },
    },
    // isOneChar / size
    {
      isOneChar: true,
      size: "small",
      class: {
        root: "w-5 h-5 min-w-unit-5 min-h-5",
      },
    },
    {
      isOneChar: true,
      size: "medium",
      class: {
        root: "w-6 h-6 min-w-unit-6 min-h-6",
      },
    },
    {
      isOneChar: true,
      size: "large",
      class: {
        root: "w-7 h-7 min-w-unit-7 min-h-7",
      },
    },
    // isOneChar / isCloseable
    {
      isOneChar: true,
      isCloseable: false,
      class: {
        root: "px-0 justify-center",
        label: "px-0 flex-none",
      },
    },
    {
      isOneChar: true,
      isCloseable: true,
      class: {
        root: "w-auto",
      },
    },
    // hasStartlabel / size
    {
      hasStartlabel: true,
      size: "small",
      class: {
        label: "pl-0.5",
      },
    },
    {
      hasStartlabel: true,
      size: ["medium", "large"],
      class: {
        label: "pl-1",
      },
    },
    // hasEndlabel / size
    {
      hasEndlabel: true,
      size: "small",
      class: {
        label: "pr-0.5",
      },
    },
    {
      hasEndlabel: true,
      size: ["medium", "large"],
      class: {
        label: "pr-1",
      },
    },
  ],
});
