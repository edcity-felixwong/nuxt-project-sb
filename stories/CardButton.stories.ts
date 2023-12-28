import type { Meta, StoryObj } from "@storybook/vue3";
import CardButton from "@/components/star/atom/Card/CardButton.vue";

const meta: Meta<typeof CardButton> = {
  title: "Components/Card/CardButton",
  tags: ["autodocs"],
  component: CardButton,
};

export default meta;
type Story = StoryObj<typeof CardButton>;

const ListTemplate: Story = {
  render: (args) => ({
    components: { CardButton },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4">
          <template v-for="item in items">
            <CardButton v-bind="item"/>
          </template>
        </div>
    `,
  }),
};

const actions: NonNullable<Story["args"]>["action"][] = [
  "accept",
  "attempt",
  "edit",
  "preview",
  "reject",
  "report",
  "retry",
  "share",
  "review",
];

export const Default: Story = {
  ...ListTemplate,
  args: {
    items: actions.map((action) => ({ action })) satisfies Story["args"][],
  },
};
export const Chinese: Story = {
  ...ListTemplate,
  args: {
    items: actions.map((action) => ({ action, locale: "zh" })) satisfies Story["args"][],
  },
};
