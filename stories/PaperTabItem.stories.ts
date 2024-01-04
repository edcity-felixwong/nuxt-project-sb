import type { Meta, StoryObj } from "@storybook/vue3";
import { StarPaperTabItem } from "@/components/star/atom/Tabs";

const meta: Meta<typeof StarPaperTabItem> = {
  title: "Components/Tabs/StarPaperTabItem",
  tags: ["autodocs"],
  component: StarPaperTabItem,
};

export default meta;
type Story = StoryObj<typeof StarPaperTabItem>;

// const render: Story["render"] = (args, { argTypes }) => ({
//   components: { SelectItem },
//   setup() {
//     return { args };
//   },
//   template: '<SelectItem v-bind="args">{{ args.default }}</SelectItem>',
// });
export const Default: Story = {
  args: {
    model: {
      icon: "material-symbols:crossword",
      title: "lorem ipsum",
      description: "lorem ipsum",
    },
  },
};
export const LongTitle: Story = {
  args: {
    model: {
      icon: "material-symbols:crossword",
      title: "STAR Network School Programme",
      description: "lorem ipsum lorem ipsum",
    },
  },
};
export const Selected: Story = {
  args: {
    model: {
      icon: "material-symbols:crossword",
      title: "STAR Network School Programme",
      description: "lorem ipsum lorem ipsum",
    },
    isSelected: true,
  },
};
