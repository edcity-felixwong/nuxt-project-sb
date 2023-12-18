import type { VariantProps } from "tailwind-variants";
import { type ButtonPassThroughOptions } from "primevue/button";

import { collapseAdjacentVariantBorders, colorVariants, dataFocusVisibleClasses } from "@/utils";
import { tv } from "@/utils/tv";

export type qwe = NonNullable<ButtonPassThroughOptions>;
export type ButtonSlot = Record<keyof ButtonPassThroughOptions, string | string[]>;

const textColorClass = "text-text-1350";
const transitionClass = ["duration-200"];
const colorClass = ["[&>*]:text-inherit", "text-inherit"];
/** The icon size will follow the font */
const iconClass = ["shrink-0", ...transitionClass, ...colorClass];

/**
 * Button wrapper **Tailwind Variants** component
 *
 * const classNames = button({...})
 *
 * @example
 * <button
 *  className={classNames())}
 *  data-pressed={true/false}
 *  data-hover={true/false}
 *  data-focus={true/false}
 *  data-focus-visible={true/false}
 * >
 *   Button
 * </button>
 */
const button = tv({
  slots: {
    root: [
      "z-0",
      "group",
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "box-border",
      "appearance-none",
      "outline-none",
      "select-none",
      "whitespace-nowrap",
      "min-w-max",
      "font-normal",
      "subpixel-antialiased",
      "overflow-hidden",
      "tap-highlight-transparent",
      "border-transparent",
      "focus:active:scale-95",
      ...transitionClass,
      // focus ring
      // ...dataFocusVisibleClasses,
    ],
    label: ["font-semibold", "flex-none", ...transitionClass, ...colorClass],
    icon: ["mr-1", ...iconClass],
    loadingIcon: [...iconClass],
  } satisfies ButtonSlot,
  variants: {
    variant: {
      solid: { root: "" },
      bordered: { root: "border-medium bg-transparent" },
      light: { root: "bg-transparent" },
      flat: { root: "" },
      faded: { root: "border-medium" },
      shadow: { root: "" },
      ghost: { root: "border-medium bg-transparent" },
    },
    size: {
      sm: { root: "px-unit-3 min-w-unit-16 h-unit-8 text-sm gap-unit-2 rounded-small" },
      md: { root: "px-unit-4 min-w-unit-20 h-unit-10 text-md gap-unit-2 rounded-medium" },
      lg: { root: "px-unit-6 min-w-unit-24 h-unit-12 text-lg gap-unit-3 rounded-large" },
    },
    color: {
      default: { root: "", label: textColorClass },
      primary: { root: "" },
      secondary: { root: "" },
      success: { root: "" },
      warning: { root: "" },
      danger: { root: "" },
      accent: { root: "" },
      info: { root: "" },
      help: { root: "" },
    },
    radius: {
      none: { root: "rounded-none" },
      sm: { root: "rounded-small" },
      md: { root: "rounded-medium" },
      lg: { root: "rounded-large" },
      full: { root: "rounded-full" },
    },
    fullWidth: {
      true: { root: "w-full" },
    },
    isDisabled: {
      true: { root: "opacity-disabled pointer-events-none" },
    },
    isInGroup: {
      true: { root: "[&:not(:first-child):not(:last-child)]:rounded-none" },
    },
    isIconOnly: {
      true: { root: "px-unit-0 !gap-unit-0" },
      false: { root: "[&>svg]:max-w-[theme(spacing.unit-8)]" },
    },
    disableAnimation: {
      true: { root: "!transition-none" },
      false: {
        root: "transition-transform-colors-opacity motion-reduce:transition-none",
      },
    },
    iconPos: {
      left: {},
      right: { icon: "order-2 mx-0 ml-1" },
      top: { root: "flex-col", icon: "m-0 mb-1" },
      bottom: { root: "flex-col", icon: "order-2 m-0 mt-1" },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "default",
    fullWidth: false,
    isDisabled: false,
    isInGroup: false,
    disableAnimation: false,
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
    // ghost / color
    {
      variant: "ghost",
      color: "default",
      class: { root: colorVariants.ghost.default },
    },
    {
      variant: "ghost",
      color: "primary",
      class: { root: colorVariants.ghost.primary },
    },
    {
      variant: "ghost",
      color: "secondary",
      class: { root: colorVariants.ghost.secondary },
    },
    {
      variant: "ghost",
      color: "success",
      class: { root: colorVariants.ghost.success },
    },
    {
      variant: "ghost",
      color: "warning",
      class: { root: colorVariants.ghost.warning },
    },
    {
      variant: "ghost",
      color: "danger",
      class: { root: colorVariants.ghost.danger },
    },
    {
      variant: "ghost",
      color: "accent",
      class: { root: colorVariants.ghost.accent },
    },
    {
      variant: "ghost",
      color: "info",
      class: { root: colorVariants.ghost.info },
    },
    {
      variant: "ghost",
      color: "help",
      class: { root: colorVariants.ghost.help },
    },
    // isInGroup / radius / size <-- radius not provided
    {
      isInGroup: true,
      class: { root: "rounded-none first:rounded-s-medium last:rounded-e-medium" },
    },
    {
      isInGroup: true,
      size: "sm",
      class: { root: "rounded-none first:rounded-s-small last:rounded-e-small" },
    },
    {
      isInGroup: true,
      size: "md",
      class: { root: "rounded-none first:rounded-s-medium last:rounded-e-medium" },
    },
    {
      isInGroup: true,
      size: "lg",
      class: { root: "rounded-none first:rounded-s-large last:rounded-e-large" },
    },
    {
      isInGroup: true,
      isRounded: true,
      class: { root: "rounded-none first:rounded-s-full last:rounded-e-full" },
    },
    // isInGroup / radius <-- radius provided
    {
      isInGroup: true,
      radius: "none",
      class: { root: "rounded-none first:rounded-s-none last:rounded-e-none" },
    },
    {
      isInGroup: true,
      radius: "sm",
      class: { root: "rounded-none first:rounded-s-small last:rounded-e-small" },
    },
    {
      isInGroup: true,
      radius: "md",
      class: { root: "rounded-none first:rounded-s-medium last:rounded-e-medium" },
    },
    {
      isInGroup: true,
      radius: "lg",
      class: { root: "rounded-none first:rounded-s-large last:rounded-e-large" },
    },
    {
      isInGroup: true,
      radius: "full",
      class: { root: "rounded-none first:rounded-s-full last:rounded-e-full" },
    },
    // isInGroup / bordered / ghost
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: { root: "default" },
      // className: collapseAdjacentVariantBorders.default,
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: { root: "primary" },
      // className: collapseAdjacentVariantBorders.primary,
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: { root: "secondary" },
      // className: collapseAdjacentVariantBorders.secondary,
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: { root: "success" },
      // className: collapseAdjacentVariantBorders.success,
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: { root: "warning" },
      // className: collapseAdjacentVariantBorders.warning,
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: { root: "danger" },
      // className: collapseAdjacentVariantBorders.danger,
    },
    {
      isIconOnly: true,
      size: "sm",
      class: { root: "min-w-unit-8 w-unit-8 h-unit-8" },
    },
    {
      isIconOnly: true,
      size: "md",
      class: { root: "min-w-unit-10 w-unit-10 h-unit-10" },
    },
    {
      isIconOnly: true,
      size: "lg",
      class: { root: "min-w-unit-12 w-unit-12 h-unit-12" },
    },
    // variant / hover
    {
      variant: ["solid", "faded", "flat", "bordered", "shadow"],
      class: { root: "hover:opacity-hover" },
    },
  ],
});

// size: {
//   sm: "px-3 h-8 text-small",
//   md: "px-4 h-10 text-medium",
//   lg: "px-6 h-12 text-medium",
// },

/**
 * ButtonGroup wrapper **Tailwind Variants** component
 *
 * const classNames = buttonGroup({...})
 *
 * @example
 * <div role="group" className={classNames())}>
 *   // button elements
 * </div>
 */
const buttonGroup = tv({
  base: "inline-flex items-center justify-center h-auto",
  variants: {
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

export type ButtonGroupVariantProps = VariantProps<typeof buttonGroup>;
export type ButtonVariantProps = VariantProps<typeof button>;

export { button, buttonGroup };
