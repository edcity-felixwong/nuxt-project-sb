import type { Meta, StoryObj } from "@storybook/vue3";
import { StarButton } from "@/components/star/atom/Button";

const meta: Meta<typeof StarButton> = {
  title: "Components/StarButton",
  tags: ["autodocs"],
  component: StarButton,
};

export default meta;
type Story = StoryObj<typeof StarButton>;

export const Default: Story = {
  // render,
  args: {
    label: "Button",
  },
};
export const WithIcon: Story = {
  render: (args, { argTypes }) => ({
    components: { StarButton },
    setup() {
      return { ...args };
    },
    template: '<StarButton v-bind="args" />',
  }),
  args: {
    label: "Button",
    icon: "material-symbols:edit-square",
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
const Matrix: Story = {
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
};
const colors = [
  "default", //
  "primary",
  "secondary",
  "accent",
  "success",
  "warning",
  "danger",
  "info",
  "help",
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
export const IconPositions: Story = {
  ...ListTemplate,
  args: {
    items: [
      {
        iconPos: "left",
        label: "text",
        icon: "material-symbols:edit-square-outline-rounded",
      },
      {
        iconPos: "right",
        label: "text",
        icon: "material-symbols:edit-square-outline-rounded",
      },
      {
        iconPos: "top",
        label: "text",
        icon: "material-symbols:edit-square-outline-rounded",
      },
      {
        iconPos: "bottom",
        label: "text",
        icon: "material-symbols:edit-square-outline-rounded",
      },
    ] satisfies Story["args"][],
  },
};
export const VariantsColors: Story = {
  ...Matrix,
  args: {
    rows: colors.map((color) => ({ color })),
    items: variants.map((variant) => ({ variant, label: variant })) satisfies Story["args"][],
  },
};
export const VariantsWithIcon: Story = {
  ...Matrix,
  args: {
    rows: colors.map((color) => ({ color })),
    items: variants.map((variant) => ({
      variant,
      label: variant,
      icon: "material-symbols:edit-square-outline-rounded",
    })) satisfies Story["args"][],
  },
};
export const VariantsWithIconAtTheEnd: Story = {
  ...Matrix,
  args: {
    rows: colors.map((color) => ({ color })),
    items: variants.map((variant) => ({
      variant,
      label: variant,
      icon: "material-symbols:edit-square-outline-rounded",
      iconPos: "right",
    })) satisfies Story["args"][],
  },
};

/** FIXME */
export const IconOnly: Story = {
  // ...ListTemplate,
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
    // items: variants.map((variant) => ({ variant, icon: "material-symbols:10mp-rounded" })),
    icon: "material-symbols:10mp-rounded",
  },
};

// export const Custom: Story = {
//   render: (args) => ({
//     components: { StarButton },
//     setup() {
//       return { ...args };
//     },
//     template: `
//             <StarButton :class="args.cls"/>
//     `,
//   }),
//   args: {
//     cls: "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg",
//     label: "Button",
//   },
// };
