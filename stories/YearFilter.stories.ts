import type { Meta, StoryObj } from "@storybook/vue3";
import YearFilter from "@/components/star/atom/Filter/YearFilter.vue";

const meta: Meta<typeof YearFilter> = {
  title: "components/YearFilter",
  tags: ["autodocs"],
  component: YearFilter,
};

export default meta;
type Story = StoryObj<typeof YearFilter>;
export const Generic: Story = {};
