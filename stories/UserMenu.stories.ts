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

export const Default: Story = {
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
