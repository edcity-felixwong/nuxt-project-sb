import type { Meta, StoryObj } from "@storybook/vue3";
import StarSideNav from "@/components/star/atom/SideNav";
import { simpleBooleanArg, simpleEnumArg } from "#storybook/blocks";

// const props = StarSideNav.props as unknown as typeof StarButtonProp;
/* 'boolean' | 'function' | 'number' | 'string' | 'symbol' | SBType */
const meta: Meta<typeof StarSideNav> = {
  title: "Example/StarSideNav",
  tags: ["autodocs"],
  component: StarSideNav,
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
type Story = StoryObj<typeof StarSideNav>;

const render: Story["render"] = (args, { argTypes }) => ({
  components: { StarSideNav },
  setup() {
    return { args };
  },
  template: '<StarSideNav v-bind="args">{{ args.default }}</StarSideNav>',
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
