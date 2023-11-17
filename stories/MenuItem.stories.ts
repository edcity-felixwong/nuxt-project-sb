import Item from "@/components/star/atom/MenuItem/Item.vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: "Example/Item",
  component: Item,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: {
    //   control: "color",
    // },
    // onClick: {},
    // size: {
    //   control: {
    //     type: "select",
    //   },
    //   options: ["small", "medium", "large"],
    // },
    variant: {
      control: {
        type: "select",
      },
      options: ["flat", "solid", "shadow", "bordered", "faded", "light"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
  },
} satisfies Meta<typeof Item>;

type Story = StoryObj<typeof Item>;

export const Primary: Story = {
  args: {
    // primary: true,
    size: "large",
    default: "Button",
  },
};
