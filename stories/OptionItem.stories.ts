import type { Meta, StoryObj } from "@storybook/vue3";
import { OptionItem } from "@/components/star/atom/Option";

const meta: Meta<typeof OptionItem> = {
  title: "Components/Tabs/OptionItem",
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
export const TestForPaperTabs: Story = {
  args: {
    model: {
      icon: "material-symbols:crossword",
      title: "lorem ipsum",
      description: "lorem ipsum",
    },
    pt: {
      root: "border-none",
    },
  },
};
export const TestNotSelectedForPaperTabs: Story = {
  args: {
    model: {
      icon: "material-symbols:crossword",
      title: "lorem ipsum",
      description: "lorem ipsum",
    },
    pt: {
      root: "border-none",
      iconWrapper: "bg-default-200",
      wrapper: "[&_*]:text-inherit text-default-600",
    },
  },
};
export const WithCommand: Story = {
  args: {
    model: {
      icon: "material-symbols:crossword",
      title: "lorem ipsum",
      description: "lorem ipsum",
      command: () => console.log("yyy"),
    },
  },
};
