import type { Meta, StoryObj } from "@storybook/vue3";
import { simpleBooleanArg, simpleEnumArg } from "#storybook/blocks";
import Layout from "@/layouts/default";

// const props = Layout.props as unknown as typeof StarButtonProp;
/* 'boolean' | 'function' | 'number' | 'string' | 'symbol' | SBType */
const meta: Meta<typeof Layout> = {
  title: "Example/Layout",
  tags: ["autodocs"],
  component: Layout,
  argTypes: {},
  // args: {
  //   loading: false
  // }
};

export default meta;
type Story = StoryObj<typeof Layout>;

const render: Story["render"] = (args, { argTypes }) => ({
  components: { Layout },
  setup() {
    return { args };
  },
  template: `<div>
              <Layout>
                Page Content
              </Layout>
            </div>`,
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
