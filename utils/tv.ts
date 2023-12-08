import {
  TV,
  tv as tvBase,
  type ClassProp,
  type TVReturnType,
  type VariantProps,
  type TVVariantKeys,
} from "tailwind-variants";

// import { mappedSpacingScaleKeys } from "../types";

export const spacingScaleKeys = [
  "0",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
  "9xl",
  "1",
  "2",
  "3",
  "3.5",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "20",
  "24",
  "28",
  "32",
  "36",
  "40",
  "44",
  "48",
  "52",
  "56",
  "60",
  "64",
  "72",
  "80",
  "96",
];

export const mappedSpacingScaleKeys = spacingScaleKeys.map((key) => `unit-${key}`);

const COMMON_UNITS = ["small", "medium", "large"];

export const tv: TV = (options, config) =>
  tvBase(options, {
    ...config,
    twMerge: config?.twMerge ?? true,
    twMergeConfig: {
      ...config?.twMergeConfig,
      theme: {
        ...config?.twMergeConfig?.theme,
        opacity: ["disabled"],
        spacing: ["divider", "unit", ...mappedSpacingScaleKeys],
        borderWidth: COMMON_UNITS,
        borderRadius: COMMON_UNITS,
      },
      classGroups: {
        ...config?.twMergeConfig?.classGroups,
        shadow: [{ shadow: COMMON_UNITS }],
        "font-size": [{ text: ["tiny", ...COMMON_UNITS] }],
        "bg-image": ["bg-stripe-gradient"],
        "min-w": [
          {
            "min-w": ["unit", ...mappedSpacingScaleKeys],
          },
        ],
        "min-h": [
          {
            "min-h": ["unit", ...mappedSpacingScaleKeys],
          },
        ],
      },
    },
  });

type WithSlotClass = {
  classNames: { [slot: string]: ClassProp };
};
export type FlattenClass<T extends WithSlotClass> = Omit<T, keyof WithSlotClass> & ClassProp<any>;
export function sequenceS<T extends WithSlotClass>(
  prop: T
): Record<keyof T["classNames"], Omit<T, keyof WithSlotClass> & Record<"class", string>> {
  return Object.entries(prop.classNames).reduce(
    (acc, [k, v]) => ({ ...acc, [k]: { ...props, class: v } }),
    {}
  );
}

const testTv = tv({
  // extend: dropdownItem,
  slots: {
    base: "gap-4",
    wrapper: "",
    title: "",
    description: "",
    selectedIcon: "",
    shortcut: "",
  },
  variants: {
    size: {
      small: {
        base: "",
      },
      medium: {
        base: "",
      },
      large: {
        base: "p-4",
      },
    },
    isIconOnly: {
      true: {
        wrapper: "hidden",
      },
    },
  },
});
// type r123 = VariantProps<typeof testTv>;
// type r112312323 = typeof testTv;
// type r112323 = typeof testTv extends TVReturnType<any, infer S, any, any, any, any, any>
//   ? true
//   : false;
// type TvWithSlots = TVReturnType<any, Object, any, any, any, any, any>;
// type Slots<T> = T extends TVReturnType<any, infer S, any, any, any, any, any> ? S : never;
export function mapClass<T extends Record<string, (...args: any[]) => string>>(
  slots: T
): Record<keyof T, string> {
  // type r112 = ReturnType<typeof tv>;
  // const t43 = props;
  // const slots = tv();
  return Object.fromEntries(Object.entries(slots).map(([k, v]) => [k, v()]));
}
