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
const ListTemplate: Story = {
  render: (args) => ({
    components: { StarChip },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4">
          <template v-for="item in items">
            <StarChip v-bind="item"/>
          </template>
        </div>
    `,
  }),
};
const Matrix: Story = {
  render: (args) => ({
    components: { StarChip },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4" v-for="r in rows">
          <div v-for="item in items" class="mb-1">
            <StarChip v-bind="item" v-bind="r"/>
          </div>
        </div>
    `,
  }),
};
const colors = [
  "default",
  "primary",
  "secondary",
  "accent",
  "success",
  "warning",
  "danger",
  "info",
  "help",
];
const variants = ["solid", "bordered", "light", "flat", "faded", "shadow", "dot"];

export const Default: Story = {
  // render,

  args: {
    label: "Ready",
  },
};
export const WithIcon: Story = {
  render,
  ...Matrix,
  // args: {
  //   label: "Ready",
  //   icon: "material-symbols:translate",

  // },
  args: {
    rows: colors.map((color) => ({ color })),
    items: variants.map((variant) => ({
      variant,
      label: variant,
      icon: "material-symbols:translate",
    })) satisfies Story["args"][],
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
export const WithAvatar: Story = {
  ...ListTemplate,
  args: {
    items: [
      {
        label: "Onyama Limba",
        removable: true,
        image: "https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",
      },
      {
        label: "Xuxue Feng",
        image: "https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png",
      },
    ],
  },
};
export const Disabled: Story = {
  ...ListTemplate,
  args: {
    items: colors.map((color) => ({
      label: "Ready",
      disabled: true,
      color,
    })),
  },
};
export const Sizes: Story = {
  ...ListTemplate,
  args: {
    items: [
      { size: "small", label: "small" }, //
      { size: "medium", label: "medium" },
      { size: "large", label: "large" },
    ] satisfies Story["args"][],
  },
};
export const SizesWithIcon: Story = {
  ...ListTemplate,
  args: {
    items: [
      { size: "small", label: "small", icon: "material-symbols:translate" }, //
      { size: "medium", label: "medium", icon: "material-symbols:translate" },
      { size: "large", label: "large", icon: "material-symbols:translate" },
    ] satisfies Story["args"][],
  },
};
export const Colors: Story = {
  ...ListTemplate,
  args: {
    items: [
      { color: "default", label: "default" }, //
      { color: "primary", label: "primary" },
      { color: "secondary", label: "secondary" },
      { color: "accent", label: "accent" },
      { color: "success", label: "success" },
      { color: "warning", label: "warning" },
      { color: "danger", label: "danger" },
      { color: "info", label: "info" },
      { color: "help", label: "help" },
    ] satisfies Story["args"][],
  },
};
export const Radius: Story = {
  ...ListTemplate,
  args: {
    items: [
      { radius: "full", label: "full" }, //
      { radius: "large", label: "large" },
      { radius: "medium", label: "medium" },
      { radius: "small", label: "small" },
    ] satisfies Story["args"][],
  },
};
export const Variants: Story = {
  ...ListTemplate,
  args: {
    items: [
      { variant: "solid", label: "solid" }, //
      { variant: "bordered", label: "bordered" },
      { variant: "light", label: "light" },
      { variant: "flat", label: "flat" },
      { variant: "faded", label: "faded" }, //
      { variant: "shadow", label: "shadow" },
      { variant: "dot", label: "dot" },
    ] satisfies Story["args"][],
  },
};
export const VariantsColors: Story = {
  render: (args) => ({
    components: { StarChip },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4" v-for="r in rows">
          <div v-for="item in items" class="mb-1">
            <StarChip v-bind="item" v-bind="r"/>
          </div>
        </div>
    `,
  }),
  args: {
    rows: colors.map((color) => ({ color })),
    items: variants.map((variant) => ({ variant, label: variant })) satisfies Story["args"][],
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
