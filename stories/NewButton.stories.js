import MyButton from "@/components/star/atom/Button";
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: "Example/NewButton",
  component: MyButton,
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
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    // primary: true,
    size: "large",
    default: "Button",
  },
};

export const Secondary = {
  args: {
    default: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    default: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    default: "Button",
  },
};
