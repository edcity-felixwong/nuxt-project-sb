import type { Meta, StoryObj } from "@storybook/vue3";
import { IdentityBar } from "@/components/star";

/** Hard coded, will change. */
const meta: Meta<typeof IdentityBar> = {
  title: "Components/IdentityBar/IdentityBar",
  tags: ["autodocs"],
  component: IdentityBar,
};

export default meta;
type Story = StoryObj<typeof IdentityBar>;

export const English: Story = {
  // render,
  args: {
    model: [
      {
        label: "Settings",
        icon: "material-symbols:settings-outline-rounded",
      },
      { separator: true },
      {
        label: "Sign out",
        icon: "material-symbols:logout",
      },
    ],
    user: {
      fullname: "losum ipsum",
      schoolName: "hkedity wqwe school no.2",
      avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Felix",
    },
  },
};
export const Chinese: Story = {
  // render,
  args: {
    model: [
      {
        label: "設定",
        icon: "material-symbols:settings-outline-rounded",
      },
      { separator: true },
      {
        label: "登出",
        icon: "material-symbols:logout",
      },
    ],
    user: {
      fullname: "陳小明",
      schoolName: "天主小學",
      avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Felix",
    },
  },
};

export const WithCommand: Story = {
  // render,
  args: {
    model: [
      {
        label: "print console",
        icon: "material-symbols:settings-outline-rounded",
        command: () => console.log("test"),
      },
    ],
    user: {
      fullname: "陳小明",
      schoolName: "天主小學",
      avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Felix",
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone14",
    },
    layout: "fullscreen",
  },
};
