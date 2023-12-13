import type { Meta, StoryObj } from "@storybook/vue3";
import { PaperCard } from "@/components/star/atom/Card";

const meta: Meta<typeof PaperCard> = {
  title: "Components/PaperCard",
  tags: ["autodocs"],
  component: PaperCard,
};

export default meta;
type Story = StoryObj<typeof PaperCard>;

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
    ownerName: "John Doe",
    status: "ready",
  },
};
export const WithCommand: Story = {
  // render,
  args: {
    model: {
      ownerName: "John Doe",
      icon: "material-symbols:crossword",
      title: "lorem ipsum",
      description: "lorem ipsum",
      command: () => console.log("yyy"),
    },
  },
};
export const Mobile: Story = {
  // render,
  args: {
    model: {
      ownerName: "John Doe",
      icon: "material-symbols:crossword",
      title: "lorem ipsum",
      description: "lorem ipsum",
      command: () => console.log("yyy"),
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "iphone14",
    },
  },
};
