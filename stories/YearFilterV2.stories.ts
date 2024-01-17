import type { Meta, StoryObj } from "@storybook/vue3";
import YearFilterV2 from "@/components/star/atom/Filter/YearFilterV2.vue";

const meta: Meta<typeof YearFilterV2> = {
  title: "components/YearFilterV2",
  tags: ["autodocs"],
  component: YearFilterV2,
};

export default meta;
type Story = StoryObj<typeof YearFilterV2>;
export const Default: Story = {};
