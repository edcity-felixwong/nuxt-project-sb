import type { Meta, StoryObj } from "@storybook/vue3";
import Alert from "@/components/star/atom/Alert/Alert.vue";

const meta: Meta<typeof Alert> = {
  title: "components/Alert",
  tags: ["autodocs"],
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

// const render: Story["render"] = (args, { argTypes }) => ({
//   components: { Alert },
//   setup() {
//     return { args };
//   },
//   template: '<Alert v-bind="args">{{ args.default }}</Alert>',
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

export const SingleMessage: Story = {
  args: {
    value: [
      {
        html: `2023 HKDSE Questions are NOW available! Please review to equip yourself and strengthen your learning.
  // ※※ HKEAA is now carrying out system enhancement from 10:00am to 11:00am, 4 December 2023 (Mon). The DFS reports will be temporarily unavailable. We apologise for the inconvenience caused.`,
      },
    ],
  },
};
export const MultipleMessages: Story = {
  args: {
    value: multipleMessage,
  },
};
export const Info: Story = {
  args: {
    value: multipleMessage,
  },
};
export const Warn: Story = {
  args: {
    value: multipleMessage,
  },
};
export const Success: Story = {
  args: {
    value: multipleMessage,
  },
};
export const Error: Story = {
  args: {
    value: multipleMessage,
  },
};
export const withLinks: Story = {
  args: {
    // severity: "error",
    value: [
      {
        html: `Version 2 of Chakra UI is only compatible with React 18. If you are still
      needing to use React 17 or earlier, please use
      <a href="https://v1.chakra-ui.com/guides/first-steps">version 1 of Chakra UI</a>.`,
      },
    ],
  },
};
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone14",
    },
    layout: "fullscreen",
  },
  args: {
    // severity: "error",
    value: [
      {
        html: `Version 2 of Chakra UI is only compatible with React 18. If you are still
      needing to use React 17 or earlier, please use
      <a href="https://v1.chakra-ui.com/guides/first-steps">version 1 of Chakra UI</a>.`,
      },
    ],
  },
};
