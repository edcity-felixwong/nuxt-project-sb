import type { Meta, StoryObj } from "@storybook/vue3";
import SelectItem from "@/components/star/atom/Filter/SelectItem.vue";

const meta: Meta<typeof SelectItem> = {
  title: "Components/Select/SelectItem",
  tags: ["autodocs"],
  component: SelectItem,
};

export default meta;
type Story = StoryObj<typeof SelectItem>;

// const render: Story["render"] = (args, { argTypes }) => ({
//   components: { SelectItem },
//   setup() {
//     return { args };
//   },
//   template: '<SelectItem v-bind="args">{{ args.default }}</SelectItem>',
// });

export const Default: Story = {
  // render,
  args: {
    model: {
      label: "Name",
    },
  },
};
export const Disabled: Story = {
  // render,
  args: {
    model: {
      label: "Name",
      disabled: true,
    },
  },
};
