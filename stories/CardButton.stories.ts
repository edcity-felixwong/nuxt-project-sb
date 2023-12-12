import type { Meta, StoryObj } from "@storybook/vue3";
import CardButton from "@/components/star/atom/Card/CardButton.vue";

const meta: Meta<typeof CardButton> = {
  title: "Components/Card/CardButton",
  tags: ["autodocs"],
  component: CardButton,
};

export default meta;
type Story = StoryObj<typeof CardButton>;

export const Default: Story = {
  // render,
  args: {
    label: "Button",
  },
};
export const WithIcon: Story = {
  render: (args, { argTypes }) => ({
    components: { CardButton },
    setup() {
      return { ...args };
    },
    template: '<CardButton v-bind="args" />',
  }),
  args: {
    label: "Button",
    icon: "material-symbols:edit-square",
  },
};
