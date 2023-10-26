import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "@/components/star/atom/TryButton";
import {
  simpleBooleanArg,
  simpleEnumArg,
  withDefault,
  Arg,
} from "#storybook/blocks";

// // import Button from './Button.vue';
// type Constructor = typeof String | typeof Boolean | typeof Number;
// type Prop =
//   | Constructor
//   | ({ type: Constructor } & { default?: any; validator?: Function });
// const resolveTypeItem = (v: Prop): any => {
//   if (typeof v === "function") {
//     return v();
//   } else {
//     return v;
//   }
// };

// const getDefault = <T>(prop: T): Record<keyof T, any> => {
//   return Object.entries(prop).reduce((acc, [k, v]) => {
//     // if (typeof v === "object" && v.hasOwnProperty("default")) {
//     //   return { ...acc, [k]: v.default };
//     // } else if (typeof v === "object" && v.hasOwnProperty("type")) {
//     //   return { ...acc, [k]: v.type };
//     // }
//     if (typeof v === "object" && v.hasOwnProperty("default")) {
//       return { ...acc, [k]: v.default };
//     } else if (typeof v === "object" && v.hasOwnProperty("type")) {
//       return { ...acc, [k]: resolveTypeItem(v.type) };
//     } else {
//       return { ...acc, [k]: resolveTypeItem(v) };
//     }
//   }, {} as T);
// };
// const toArgTypes = (
//   prop: Record<string, number | string | boolean | Function>
// ): Arg => {
//   return Object.entries(prop).reduce((acc, [k, v]) => {
//     if (typeof v === "boolean") {
//       return { ...acc, [k]: simpleBooleanArg({ defaultValue: `${v}` }) };
//     } else {
//       return { ...acc, [k]: v };
//     }
//   }, {});
// };
// const PropsToArgTypes = <T>(
//   Comp: T,
//   { description }: Partial<Record<keyof Meta<T>["argTypes"], string>> = {}
// ): Meta<T>["argTypes"] => {};

/* 'boolean' | 'function' | 'number' | 'string' | 'symbol' | SBType */
const meta: Meta<typeof Button> = {
  title: "Example/TestButton",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    // ...toArgTypes(getDefault(Button.props)),
    ...Button.props,
    default: { type: "string" },
    block: simpleBooleanArg(),
    disabled: simpleBooleanArg(),
    ghost: simpleBooleanArg(),
    loading: simpleBooleanArg(),
    href: { type: "string" },
    shape: simpleEnumArg({
      options: ["square", "round", "circle", "rectangle"],
      defaultValue: "rectangle",
    }),
    size: simpleEnumArg({
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    }),
    tag: simpleEnumArg({
      options: ["button", "a", "div"],
      defaultValue: "button",
    }),
    variant: simpleEnumArg({
      options: ["outline", "base", "text", "dashed"],
      defaultValue: "base",
    }),
    type: simpleEnumArg({
      options: ["button", "reset", "submit"],
      defaultValue: "button",
    }),
    theme: simpleEnumArg({
      options: ["default", "success", "primary", "warning", "danger"],
      defaultValue: "primary",
    }),
  },
  // args: {
  //   loading: false
  // }
};

export default meta;
type Story = StoryObj<typeof Button>

const render: Story["render"] = (args, { argTypes }) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">{{ args.default }}</Button>',
});

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render,
  args: {
    // theme: 'default',
    // block:,
    //
    default: "Button",
  },
};

export const Secondary: Story = {
  render,
  args: {
    ...Default.args,
    theme: "default",
    default: "😄👍😍💯",
  },
};

export const Block: Story = {
  render,
  args: {
    ...Default.args,
    block: true,
    default: "📚📕📈🤓",
  },
};
