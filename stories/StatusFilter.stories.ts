import type { Meta, StoryObj } from "@storybook/vue3";
import StatusFilter from "@/components/star/atom/Filter/StatusFilter.vue";

const meta: Meta<typeof StatusFilter> = {
  title: "components/StatusFilter",
  tags: ["autodocs"],
  component: StatusFilter,
};

export default meta;
type Story = StoryObj<typeof StatusFilter>;
export const Default: Story = {
  args: {
    statuses: [
      { label: "attempted", value: "attempted" }, //
    ],
  },
};
