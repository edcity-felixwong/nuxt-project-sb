import type { Meta, StoryObj } from "@storybook/vue3";
import StarHeader from "@/components/star/atom/Header";
import { simpleBooleanArg, simpleEnumArg } from "#storybook/blocks";

console.log("🚀 ~ file: StarHeader.stories.ts:3 ~ StarHeader:", StarHeader);
// const props = StarHeader.props as unknown as typeof StarButtonProp;
/* 'boolean' | 'function' | 'number' | 'string' | 'symbol' | SBType */
const meta: Meta<typeof StarHeader> = {
  title: "Example/StarHeader",
  tags: ["autodocs"],
  component: StarHeader,
  argTypes: {
    // ...toArgTypes(getDefault(Button.props)),
    // ...props,
    // default: { type: "string" },
    // block: simpleBooleanArg(),
    // disabled: simpleBooleanArg(),
    // ghost: simpleBooleanArg(),
    // loading: simpleBooleanArg(),
    // href: { type: "string" },
    // shape: simpleEnumArg({
    //   options: ["square", "round", "circle", "rectangle"],
    //   defaultValue: "rectangle",
    // }),
    // size: simpleEnumArg({
    //   options: ["small", "medium", "large"],
    //   defaultValue: "medium",
    // }),
    // tag: simpleEnumArg({
    //   options: ["button", "a", "div"],
    //   defaultValue: "button",
    // }),
    // variant: simpleEnumArg({
    //   options: ["outline", "base", "text", "dashed"],
    //   defaultValue: "base",
    // }),
    // type: simpleEnumArg({
    //   options: ["button", "reset", "submit"],
    //   defaultValue: "button",
    // }),
    // theme: simpleEnumArg({
    //   options: ["default", "success", "primary", "warning", "danger"],
    //   defaultValue: "primary",
    // }),
  },
  // args: {
  //   loading: false
  // }
};

export default meta;
type Story = StoryObj<typeof StarHeader>;

// const render: Story["render"] = (args, { argTypes }) => ({
//   components: { StarHeader },
//   setup() {
//     return { args };
//   },
//   template: '<StarHeader v-bind="args">{{ args.default }}</StarHeader>',
// });

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  // render,
  args: {
    // theme: 'default',
    // block:,
    //
    default: "Button",
    role: "teacher",
  },
};

export const Secondary: Story = {
  // render,
  args: {
    ...Default.args,
    theme: "default",
    default: "😄👍😍💯",
  },
};

export const Block: Story = {
  // render,
  args: {
    ...Default.args,
    block: true,
    default: "📚📕📈🤓",
  },
};
