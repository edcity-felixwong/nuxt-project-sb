import type { Meta, StoryObj } from "@storybook/vue3";
import { StarFieldSet } from "@/components/star";

const meta: Meta<typeof StarFieldSet> = {
  title: "components/Fieldset",
  tags: ["autodocs"],
  component: StarFieldSet,
};

export default meta;
type Story = StoryObj<typeof StarFieldSet>;

export const Default: Story = {
  render: (args) => ({
    setup() {
      return { ...args };
    },
    components: { StarFieldSet },
    template: `
      <StarFieldSet v-bind="args">
        <p>lorem ipsum</p>
      </StarFieldSet>
    `,
  }),
  args: {
    legend: "start",
  },
};
export const Nothing: Story = {};
