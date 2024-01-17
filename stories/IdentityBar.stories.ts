import type { Meta, StoryObj } from "@storybook/vue3";
import { StarIdentityBar } from "@/components/star";

/** Hard coded, will change. */
const meta: Meta<typeof StarIdentityBar> = {
  title: "Components/IdentityBar/StarIdentityBar",
  tags: ["autodocs"],
  component: StarIdentityBar,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof StarIdentityBar>;

export const Default: Story = {
  args: {
    user: {
      cfullname: "陳小明",
      efullname: "Jhon Doe",
      // avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Felix",
    },
    school: {
      nameC: "中文學校",
      nameE: "School",
    },
  },
};
export const NoSchool: Story = {
  args: {
    user: {
      cfullname: "陳小明",
      efullname: "Jhon Doe",
      // avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Felix",
    },
  },
};
export const LongName: Story = {
  args: {
    user: {
      cfullname: "沃夫斯里積士丁可辛貝格多夫沃夫斯里積士丁可辛貝格多夫",
      efullname: "Savungaz Valincinan Savungaz Valincinan",
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
      cfullname: "沃夫斯里積士丁可辛貝格多夫",
      efullname: "Savungaz Valincinan",
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
