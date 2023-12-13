import type { Meta, StoryObj } from "@storybook/vue3";
import { OptionItem } from "@/components/star/atom/Option";

const meta: Meta<typeof OptionItem> = {
  title: "Components/Tab/OptionItem",
  tags: ["autodocs"],
  component: OptionItem,
};

export default meta;
type Story = StoryObj<typeof OptionItem>;

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
      icon: "material-symbols:crossword",
      title: "lorem ipsum",
      description: "lorem ipsum",
    },
  },
};
export const WithCommand: Story = {
  // render,
  args: {
    model: {
      icon: "material-symbols:crossword",
      title: "lorem ipsum",
      description: "lorem ipsum",
      command: () => console.log("yyy"),
    },
  },
};