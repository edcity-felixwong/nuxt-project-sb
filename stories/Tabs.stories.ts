import { StoryObj, Meta } from "@storybook/vue3";
import { StarTabs } from "@/components/star";

const meta: Meta<typeof StarTabs> = {
  title: "components/Tabs/Tabs",
  component: StarTabs,
  args: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StarTabs>;

export const Default: Story = {
  args: {
    variant: "default",
    model: [
      { trigger: "one" }, //
      { trigger: "two", default: true },
      { trigger: "three" },
      { trigger: "four" },
    ],
  },
};
export const Card: Story = {
  args: {
    variant: "card",
    pt: {
      trigger: "bg-red-900",
      content: "text-red-900",
    },
  },
};
