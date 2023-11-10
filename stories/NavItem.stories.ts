import StarNavItem from "@/components/star/atom/SideNav/NavItem";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof StarNavItem> = {
  title: "Example/StarNavItem",
  tags: ["autodocs"],
  component: StarNavItem,
};

export default meta;
type Story = StoryObj<typeof StarNavItem>;

const render: Story["render"] = (args, { argTypes }) => ({
  components: { StarNavItem },
  setup() {
    return { args };
  },
  template: `
    <StarNavItem>{{ args.default }}</StarNavItem>
  `,
});

export const Default: Story = {
  render,
  args: {
    // theme: 'default',
    // block:,
    //
    default: "Button",
  },
};
