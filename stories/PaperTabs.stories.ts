import { StoryObj, Meta } from "@storybook/vue3";
import StarTabs from "@/components/star/atom/Tabs/PaperTabs.vue";

/** Loading skeleton need to be shown for both idle (fetching state) and loading (data state) */
const meta: Meta<typeof StarTabs> = {
  title: "components/Tabs/PaperTabs",
  component: StarTabs,
  args: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StarTabs>;

export const Default: Story = {
  args: {},
};
export const HasNothing: Story = {
  args: {},
};
export const HasALot: Story = {
  args: {},
};
