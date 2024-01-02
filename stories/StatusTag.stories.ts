import type { Meta, StoryObj } from "@storybook/vue3";
import { StatusTag } from "@/components/star";
import type { StatusTagProps } from "@/components/star";

const meta: Meta<typeof StatusTag> = {
  title: "Components/Tag/StatusTag",
  tags: ["autodocs"],
  component: StatusTag,
};

export default meta;
type Story = StoryObj<typeof StatusTag>;

// const render: Story["render"] = (args, { argTypes }) => ({
//   components: { StatusTag },
//   setup() {
//     return { args };
//   },
//   template: '<StatusTag v-bind="args">{{ args.default }}</StatusTag>',
// });
const ListTemplate: Story = {
  render: (args) => ({
    components: { StatusTag },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4">
          <template v-for="item in items">
            <StatusTag v-bind="item"/>
          </template>
        </div>
    `,
  }),
};
const statuses: StatusTagProps["status"][] = [
  "attempted",
  "finished",
  "inProgress",
  "not_attempted",
  "pending",
  "ready",
  "upcoming",
  "not_submitted",
  "submitted",
];
export const Default: Story = {
  args: {
    // locale: "en",
    status: "ready",
  },
};
export const WithLocale: Story = {
  ...ListTemplate,
  args: {
    items: statuses.map((status) => ({ status, locale: "zh" })),
  },
};
export const Statuses: Story = {
  ...ListTemplate,
  args: {
    items: statuses.map((status) => ({ status })),
  },
};
