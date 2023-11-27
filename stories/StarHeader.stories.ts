import type { Meta, StoryObj } from "@storybook/vue3";
import HeaderTemplate from "@/components/star/atom/Header/HeaderTemplate.vue";
import { simpleBooleanArg, simpleEnumArg } from "#storybook/blocks";

console.log("🚀 ~ file: HeaderTemplate.stories.ts:3 ~ HeaderTemplate:", HeaderTemplate);
// const props = HeaderTemplate.props as unknown as typeof StarButtonProp;
/* 'boolean' | 'function' | 'number' | 'string' | 'symbol' | SBType */
const meta: Meta<typeof HeaderTemplate> = {
  title: "Example/HeaderTemplate",
  tags: ["autodocs"],
  component: HeaderTemplate,
};

export default meta;
type Story = StoryObj<typeof HeaderTemplate>;

// const render: Story["render"] = (args, { argTypes }) => ({
//   components: { HeaderTemplate },
//   setup() {
//     return { args };
//   },
//   template: '<HeaderTemplate v-bind="args">{{ args.default }}</HeaderTemplate>',
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
    // default: "Button",
    // role: "teacher",
    model: [{ label: "lorem ipsum" }],
  },
};
