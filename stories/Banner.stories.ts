import type { Meta, StoryObj } from "@storybook/vue3";
import Banner from "@/components/star/atom/Banner/Banner.vue";

const meta: Meta<typeof Banner> = {
  title: "components/Banner",
  tags: ["autodocs"],
  component: Banner,
  argTypes: {
    subject: {
      options: ["chinese", "english", "cmath", "emath", "generic"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Chinese: Story = {
  // render,
  name: "Chinese",
  args: {
    subject: "chinese",
  },
};
export const english: Story = {
  // render,
  name: "English",
  args: {
    subject: "english",
  },
};
export const cmath: Story = {
  // render,
  name: "Chinese math",
  args: {
    subject: "cmath",
  },
};
export const emath: Story = {
  // render,
  name: "English math",
  args: {
    subject: "emath",
  },
};
export const Generic: Story = {
  // render,
  name: "generic",
  args: {
    subject: "generic",
  },
};
