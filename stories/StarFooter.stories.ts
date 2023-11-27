import type { Meta, StoryObj } from "@storybook/vue3";
import FooterTemplate from "@/components/star/atom/Footer/FooterTemplate.vue";
import { simpleBooleanArg, simpleEnumArg } from "#storybook/blocks";

console.log("🚀 ~ file: FooterTemplate.stories.ts:3 ~ FooterTemplate:", FooterTemplate);
// const props = FooterTemplate.props as unknown as typeof StarButtonProp;
/* 'boolean' | 'function' | 'number' | 'string' | 'symbol' | SBType */
const meta: Meta<typeof FooterTemplate> = {
  title: "Example/FooterTemplate",
  tags: ["autodocs"],
  component: FooterTemplate,
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
type Story = StoryObj<typeof FooterTemplate>;

// import PDivider from "primevue/divider";
const render: Story["render"] = (args, { argTypes }) => ({
  components: { FooterTemplate },
  setup() {
    return { args };
  },
  template: '<FooterTemplate v-bind="args">{{ args.default }}</FooterTemplate>',
});

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  // render,
  args: {
    model: [
      { href: "#", label: "lorem ipsum" },
      { href: "#", label: "privacy" },
      { href: "#", label: "term of services" },
      { href: "#", label: "contact us" },
    ],
  },
};
