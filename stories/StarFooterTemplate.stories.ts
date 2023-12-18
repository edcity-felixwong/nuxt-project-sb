import type { Meta, StoryObj } from "@storybook/vue3";
import FooterTemplate from "@/components/star/atom/Footer/FooterTemplate.vue";

const meta: Meta<typeof FooterTemplate> = {
  title: "components/Footer/Template",
  tags: ["autodocs"],
  component: FooterTemplate,
};

export default meta;
type Story = StoryObj<typeof FooterTemplate>;

export const Default: Story = {
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
