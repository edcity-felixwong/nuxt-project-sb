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
    label: "Button",
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
          <template v-for="item in items">
            <StarButton v-bind="item"/>
          </template>
        </div>
    `,
  }),
};
const colors = [
  "default", //
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
] as const;
const sizes = [
  "sm", //
  "md",
  "lg",
] as const;
const radii = [
  "full", //
  "lg",
  "md",
  "sm",
  "none",
] as const;
const variants = ["solid", "faded", "bordered", "light", "flat", "ghost", "shadow"];

export const Colors: Story = {
  ...ListTemplate,
  args: {
    items: colors.map((color) => ({ color, label: color })) satisfies Story["args"][],
  },
};
export const Disabled: Story = {
  ...ListTemplate,
  args: {
    items: colors.map((color) => ({
      color,
      label: color,
      isDisabled: true,
    })) satisfies Story["args"][],
  },
};

export const Sizes: Story = {
  ...ListTemplate,
  args: {
    items: sizes.map((size) => ({ size, label: size })) satisfies Story["args"][],
  },
};

export const Radius: Story = {
  ...ListTemplate,
  args: {
    items: radii.map((radius) => ({ radius, label: radius })) satisfies Story["args"][],
  },
};

export const Variants: Story = {
  ...ListTemplate,
  args: {
    items: variants.map((variant) => ({ variant, label: variant })) satisfies Story["args"][],
  },
};
export const Chinese: Story = {
  ...ListTemplate,
  args: {
    items: variants.map((variant) => ({
      variant,
      label: ["天地玄黃", "宇宙洪荒", "蓋此身髮", "四大五常"][Math.floor(Math.random() * 4)],
      color: colors[Math.floor(Math.random() * colors.length)],
    })) satisfies Story["args"][],
  },
};
export const VariantsColors: Story = {
  render: (args) => ({
    components: { StarButton },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4" v-for="r in rows">
          <div v-for="item in items" class="mb-1">
            <StarButton v-bind="item" v-bind="r"/>
          </div>
        </div>
    `,
  }),
  args: {
    rows: colors.map((color) => ({ color })),
    items: variants.map((variant) => ({ variant, label: variant })) satisfies Story["args"][],
  },
};

export const IconOnly: Story = {
  ...ListTemplate,
  // render: (args) => ({
  //   components: { StarButton },
  //   setup() {
  //     return { ...args };
  //   },
  //   template: `
  //       <div class="flex gap-4">
  //         <template v-for="item in items">
  //           <StarButton v-bind="item"/>
  //         </template>
  //       </div>
  //   `,
  // }),
  args: {
    items: [
      {
        // isIconOnly: true,
        icon: "material-symbols:10mp-rounded",
      },
    ],
  },
};

export const Custom: Story = {
  render: (args) => ({
    components: { StarButton },
    setup() {
      return { ...args };
    },
    template: `
            <StarButton :class="args.cls"/>
    `,
  }),
  args: {
    cls: "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg",
    label: "Button",
  },
};
