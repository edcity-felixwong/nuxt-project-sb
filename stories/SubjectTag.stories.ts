import type { Meta, StoryObj } from "@storybook/vue3";
import { SubjectTag } from "@/components/star";
import { ExtractPublicPropTypes } from "vue";
import type { SubjectTagProps } from "@/components/star";

/**
 *
 * */
const meta: Meta<typeof SubjectTag> = {
  title: "Components/Tag/SubjectTag",
  tags: ["autodocs"],
  component: SubjectTag,
};

export default meta;
type Story = StoryObj<typeof SubjectTag>;

const ListTemplate: Story = {
  render: (args) => ({
    components: { SubjectTag },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4">
          <template v-for="item in items">
            <SubjectTag v-bind="item"/>
          </template>
        </div>
    `,
  }),
};
const packageIds: NonNullable<Story["args"]>["packageId"][] = [13, 14, 15, 16];
type t1 = ExtractPublicPropTypes<typeof SubjectTag>;
export const Default: Story = {
  args: {},
};
export const WithLocale: Story = {
  ...ListTemplate,
  args: {
    items: packageIds.map((packageId) => ({ packageId })),
  },
};
