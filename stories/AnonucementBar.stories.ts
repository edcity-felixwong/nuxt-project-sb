import type { Meta, StoryObj } from "@storybook/vue3";
import AnonucementBar from "@/components/star/atom/AnonucementBar/AnonucementBar.vue";

const meta: Meta<typeof AnonucementBar> = {
  title: "components/AnnonucementBar",
  tags: ["autodocs"],
  component: AnonucementBar,
};

export default meta;
type Story = StoryObj<typeof AnonucementBar>;

// const render: Story["render"] = (args, { argTypes }) => ({
//   components: { AnonucementBar },
//   setup() {
//     return { args };
//   },
//   template: '<AnonucementBar v-bind="args">{{ args.default }}</AnonucementBar>',
// });

const multipleMessage = [
  {
    html: `2023 HKDSE Questions are NOW available! Please review to equip yourself and strengthen your learning.
// ※※ HKEAA is now carrying out system enhancement from 10:00am to 11:00am, 4 December 2023 (Mon). The DFS reports will be temporarily unavailable. We apologise for the inconvenience caused.`,
  },
  {
    html: `On Tuesday November 28th from 9:00AM PT - 12PM PT (5:00PM UTC - 8PM UTC), we will be
      performing system maintenance on support.mozilla.org. During the maintenance period, users
      will not be able to sign in to the website, and all users signed in at the start of the
      maintenance period will be signed out.`,
  },
];

export const Default: Story = {
  // render,
  name: "Single message",
  args: {
    value: [
      {
        html: `2023 HKDSE Questions are NOW available! Please review to equip yourself and strengthen your learning.
  // ※※ HKEAA is now carrying out system enhancement from 10:00am to 11:00am, 4 December 2023 (Mon). The DFS reports will be temporarily unavailable. We apologise for the inconvenience caused.`,
      },
    ],
  },
};
export const Multiple: Story = {
  // render,
  name: "Multiple message",
  args: {
    value: multipleMessage,
  },
};
export const Info: Story = {
  args: {
    severity: "info",
    value: multipleMessage,
  },
};
export const Warn: Story = {
  args: {
    severity: "warn",
    value: multipleMessage,
  },
};
export const Success: Story = {
  args: {
    severity: "success",
    value: multipleMessage,
  },
};
export const Error: Story = {
  args: {
    severity: "error",
    value: multipleMessage,
  },
};
