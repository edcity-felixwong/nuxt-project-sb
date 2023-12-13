import type { Meta, StoryObj } from "@storybook/vue3";
import { MarkingTag } from "@/components/star";
import type { MarkingTagProps } from "@/components/star";

/**
 * The default size for a marking tag is `small`,
 * which is different from `Chip`
 * reference https://www.figma.com/file/1LUbDzxZclW9y1DWXXbJvk/wireframe?type=design&node-id=295-32552&mode=design&t=lImzgrTlXc4sxgxj-4
 */
const meta: Meta<typeof MarkingTag> = {
  title: "Components/Tag/MarkingTag",
  tags: ["autodocs"],
  component: MarkingTag,
};

export default meta;
type Story = StoryObj<typeof MarkingTag>;

// const render: Story["render"] = (args, { argTypes }) => ({
//   components: { MarkingTag },
//   setup() {
//     return { args };
//   },
//   template: '<MarkingTag v-bind="args">{{ args.default }}</MarkingTag>',
// });
const ListTemplate: Story = {
  render: (args) => ({
    components: { MarkingTag },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4">
          <template v-for="item in items">
            <MarkingTag v-bind="item"/>
          </template>
        </div>
    `,
  }),
};
const statuses: MarkingTagProps["status"][] = [
  "automatedMarking",
  "manualMarking",
  "marked",
  "submission",
];
export const Default: Story = {
  args: {
    status: "marked",
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
export const OverwriteLabel: Story = {
  args: {
    status: "submission",
    label: "Submission 19/67",
  },
};
