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

const ListTemplate: Story = {
  render: (args) => ({
    components: { StarButton },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4">
          <div v-for="item in items">
            <StarButton v-bind="item"/>
          </div>
        </div>
    `,
  }),
};

export const Colors: Story = {
  ...ListTemplate,
  args: {
    items: [
      { color: "default" }, //
      { color: "primary" }, //
      { color: "secondary" },
      { color: "success" },
      { color: "warning" },
      { color: "danger" },
    ] satisfies Story["args"][],
  },
};
export const Disabled: Story = {
  ...ListTemplate,
  args: {
    items: [
      { color: "default", isDisabled: true }, //
      { color: "primary", isDisabled: true }, //
      { color: "secondary", isDisabled: true },
      { color: "success", isDisabled: true },
      { color: "warning", isDisabled: true },
      { color: "danger", isDisabled: true },
    ] satisfies Story["args"][],
  },
};

export const Sizes: Story = {
  ...ListTemplate,
  args: {
    items: [
      { size: "sm" }, //
      { size: "md" }, //
      { size: "lg" },
    ] satisfies Story["args"][],
  },
};

export const Radius: Story = {
  ...ListTemplate,
  args: {
    items: [
      { radius: "full" }, //
      { radius: "lg" },
      { radius: "md" }, //
      { radius: "sm" }, //
      { radius: "none" },
    ] satisfies Story["args"][],
  },
};

export const Variants: Story = {
  ...ListTemplate,
  args: {
    items: [
      { variant: "solid" }, //
      { variant: "faded" },
      { variant: "bordered" }, //
      { variant: "light" }, //
      { variant: "flat" },
      { variant: "ghost" },
      { variant: "shadow" },
    ] satisfies Story["args"][],
  },
};

export const IconOnly: Story = {
  ...ListTemplate,
  args: {
    items: [
      { isIconOnly: true }, //
    ] satisfies Story["args"][],
  },
};

export const Custom: Story = {
  render: (args) => ({
    components: { StarButton },
    setup() {
      return { ...args };
    },
    template: `
            <StarButton v-bind="{class:args.className}"/>
    `,
  }),
  args: {
    className: "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg",
  },
};
