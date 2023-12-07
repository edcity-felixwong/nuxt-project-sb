import type { Meta, StoryObj } from "@storybook/vue3";
import FooterTemplate from "@/components/star/atom/Footer/FooterTemplate.vue";
const meta: Meta<typeof FooterTemplate> = {
  title: "components/Footer",
  tags: ["autodocs"],
  component: FooterTemplate,
};

export default meta;
type Story = StoryObj<typeof FooterTemplate>;

// import PDivider from "primevue/divider";
// const render: Story["render"] = (args, { argTypes }) => ({
//   components: { FooterTemplate },
//   setup() {
//     return { args };
//   },
//   template: '<FooterTemplate v-bind="args">{{ args.default }}</FooterTemplate>',
// });

export const Default: Story = {
  // render,
  args: {
    model: [
      { href: "#", label: "lorem ipsum" },
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Copyright" },
      { href: "#", label: "Disclaimer" },
      { href: "#", label: "Contact us" },
    ],
  },
};
