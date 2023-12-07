import type { Meta, StoryObj } from "@storybook/vue3";
import { StarChip } from "@/components/star/atom/Chip";

/**
 * Refer https://nextui.org/docs/components/chip
 */
const meta: Meta<typeof StarChip> = {
  title: "Components/Chip",
  tags: ["autodocs"],
  component: StarChip,
};

export default meta;
type Story = StoryObj<typeof StarChip>;

const render: Story["render"] = (args, { argTypes }) => ({
  components: { StarChip },
  setup() {
    return { args };
  },
  template: '<StarChip v-bind="args">{{ args.default }}</StarChip>',
});

export const Default: Story = {
  // render,

  args: {
    label: "Ready",
  },
};
export const WithIcon: Story = {
  render,
  args: {
    label: "Ready",
    icon: "material-symbols:translate",
  },
};
export const Removable: Story = {
  // render,
  args: {
    label: "Ready",
    // icon: "material-symbols:3g-mobiledata-badge",
    removable: true,
  },
};
export const Custom: Story = {
  // render,
  args: {
    label: "New",
    pt: {
      root: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
      label: "drop-shadow shadow-black text-white",
    },
  },
};
