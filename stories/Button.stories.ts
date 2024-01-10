import type { Meta, StoryObj } from "@storybook/vue3";
import { StarButton } from "@/components/star/atom/Button";

const meta: Meta<typeof StarButton> = {
  title: "Components/StarButton",
  tags: ["autodocs"],
  component: StarButton,
  argTypes: {
    icon: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof StarButton>;

export const Default: Story = {
  args: {
    label: "Button",
  },
};
export const WithSlotChildren: Story = {
  render: (args) => ({
    components: { StarButton },
    setup: () => ({ args }),
    template: `
      <StarButton v-bind="item">
        {{ args.default }}
      </StarButton>
    `,
  }),
  args: {
    default: "Button",
  },
};
// export const WithIcon: Story = {
//   args: {
//     label: "Button",
//     icon: "material-symbols:edit-square",
//   },
// };

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
export const Block: Story = {
  args: {
    block: true,
    label: "Block",
  },
};
export const BlockFalse: Story = {
  args: {
    block: false,
    label: "Block",
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
/** The padding is like that because its not a block button.
 *
 */
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
export const IconPositionsV2: Story = {
  ...ListTemplate,
  args: {
    items: [
      {
        iconPos: "left",
        label: "text",
        icon: "material-symbols:edit-square-outline-rounded",
        block: true,
      },
      {
        iconPos: "right",
        label: "text",
        icon: "material-symbols:edit-square-outline-rounded",
        block: true,
      },
      {
        iconPos: "top",
        label: "text",
        icon: "material-symbols:edit-square-outline-rounded",
        block: true,
      },
      {
        iconPos: "bottom",
        label: "text",
        icon: "material-symbols:edit-square-outline-rounded",
        block: true,
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

/** A icon-only button should have `aria-label` so that screen readers can read it properly. */
export const IconOnly: Story = {
  ...ListTemplate,
  args: {
    items: sizes.map((size) => ({ isIconOnly: true, icon: "material-symbols:10mp-rounded", size })),
  },
};
/** Primevue will add a `.p-button-icon-only` class to it.
 * So you might not need to tell the component it is icon-only if things go well.
 */
export const IconOnlyWithoutTelling: Story = {
  ...ListTemplate,
  args: {
    items: sizes.map((size) => ({ icon: "material-symbols:10mp-rounded", size })),
  },
};
/** //TODO Loading: disable+spinner */
export const Loading: Story = {
  args: {},
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
