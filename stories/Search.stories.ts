import { StoryObj, Meta } from "@storybook/vue3";
import { StarSearch } from "@/components/star";

/** Loading skeleton need to be shown for both idle (fetching state) and loading (data state) */
const meta: Meta<typeof StarSearch> = {
  title: "components/StarSearch",
  component: StarSearch,
  args: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StarSearch>;

export const Default: Story = {
  args: {
    // variant: "default",
  },
};
