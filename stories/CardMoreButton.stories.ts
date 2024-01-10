import type { Meta, StoryObj } from "@storybook/vue3";
import CardMoreAction from "~/components/star/atom/Card/CardMoreAction.vue";

/**
 * This address the layout and order of the buttons.
 */
const meta: Meta<typeof CardMoreAction> = {
  title: "Components/Card/CardCardMoreAction",
  tags: ["autodocs"],
  component: CardMoreAction,
};

export default meta;
type Story = StoryObj<typeof CardMoreAction>;

const ListTemplate: Story = {
  render: (args) => ({
    components: { CardMoreAction },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4">
          <template v-for="item in items">
            <CardMoreAction v-bind="item"/>
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
];

export const Default: Story = {
  args: {},
};
