import type { Meta, StoryObj } from "@storybook/vue3";
import { StarFooter } from "@/components/star";

const meta: Meta<typeof StarFooter> = {
  title: "components/Footer/Page",
  tags: ["autodocs"],
  component: StarFooter,
};

export default meta;
type Story = StoryObj<typeof StarFooter>;

export const Default: Story = {};
