import { StoryObj, Meta } from "@storybook/vue3";
import StarTabs from "@/components/star/atom/Tabs/PaperTabs.vue";

/** Loading skeleton need to be shown for both idle (fetching state) and loading (data state) */
const meta: Meta<typeof StarTabs> = {
  title: "components/PaperTabs",
  component: StarTabs,
  args: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StarTabs>;

export const Default: Story = {
  args: {
    variant: "default",
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
