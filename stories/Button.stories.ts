import type { Meta, StoryObj } from "@storybook/vue3";
import { StarButton } from "@/components/star/atom/Button";

const meta: Meta<typeof StarButton> = {
  title: "Components/StarButton",
  tags: ["autodocs"],
  component: StarButton,
};

export default meta;
type Story = StoryObj<typeof StarButton>;

// const render: Story["render"] = (args, { argTypes }) => ({
//   components: { SelectItem },
//   setup() {
//     return { args };
//   },
//   template: '<SelectItem v-bind="args">{{ args.default }}</SelectItem>',
// });

export const Default: Story = {
  // render,
  args: {
    default: "Button",
  },
};
export const Disabled: Story = {
  // render,
  args: {
    isDisabled: true,
  },
};
export const Primary: Story = {
  // render,
  args: {
    color: "primary",
  },
};
export const Size: Story = {
  render: (args, { argTypes }) => ({
    components: { StarButton },
    setup() {
      return { args };
    },
    template: '<StarButton size="sm">{{ args.default }}</StarButton>',
  }),
  args: {
    size: ["primary"],
  },
};
