import { StoryObj, Meta } from "@storybook/vue3";
import { StarControlBar } from "@/components/star";

/** Loading skeleton need to be shown for both idle (fetching state) and loading (data state) */
const meta: Meta<typeof StarControlBar> = {
  title: "templates/StarControlBar",
  component: StarControlBar,
  args: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StarControlBar>;

export const Default: Story = {
  args: {
    // variant: "default",
  },
};
