import type { Meta, StoryObj } from "@storybook/vue3";
import { CardButtonBar } from "@/components/star";

/**
 * This address the layout and order of the buttons.
 */
const meta: Meta<typeof CardButtonBar> = {
  title: "Components/Card/CardButtonBar",
  tags: ["autodocs"],
  component: CardButtonBar,
};

export default meta;
type Story = StoryObj<typeof CardButtonBar>;

const ListTemplate: Story = {
  render: (args) => ({
    components: { CardButtonBar },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4">
          <template v-for="item in items">
            <CardButtonBar v-bind="item"/>
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

// export const Default: Story = {
//   ...ListTemplate,
//   args: {
//     items: actions.map((action) => ({ action })) satisfies Story["args"][],
//   },
// };
export const Default: Story = {
  args: {
    actions: ["accept", "attempt", "edit"],
  },
};
export const Chinese: Story = {
  ...ListTemplate,
  args: {
    items: actions.map((action) => ({ action, locale: "zh" })) satisfies Story["args"][],
  },
};
