import type { Meta, StoryObj } from "@storybook/vue3";
import UserMenu from "@/components/star/atom/IdentityBar/UserMenu.vue";

const meta: Meta<typeof UserMenu> = {
  title: "Components/IdentityBar/UserMenu",
  tags: ["autodocs"],
  component: UserMenu,
  args: {
    popup: false,
  },
};

export default meta;
type Story = StoryObj<typeof UserMenu>;

// const render: Story["render"] = (args, { argTypes }) => ({
//   components: { UserMenu },
//   setup() {
//     return { args };
//   },
//   template: '<UserMenu v-bind="args">{{ args.default }}</UserMenu>',
// });

const data = {
  user: {
    efullname: "losum ipsum",
    cfullname: "陳小明",
  },
  school: {
    nameE: "hkedity wqwe school no.2",
    nameC: "天主小學",
  },
  avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=Felix",
};

export const Default: Story = {
  // render,
  args: {
    // model: [
    //   {
    //     label: "Settings",
    //     icon: "material-symbols:settings-outline-rounded",
    //     externalLink: true,
    //   },
    //   { separator: true },
    //   {
    //     label: "Sign out",
    //     icon: "material-symbols:logout",
    //   },
    // ],
    ...data,
  },
};
// export const Chinese: Story = {
//   // render,
//   args: {
//     model: [
//       {
//         label: "設定",
//         icon: "material-symbols:settings-outline-rounded",
//       },
//       { separator: true },
//       {
//         label: "登出",
//         icon: "material-symbols:logout",
//       },
//     ],
//     ...data,
//   },
// };
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
    ...data,
  },
};
