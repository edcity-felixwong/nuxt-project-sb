import type { Meta, StoryObj } from "@storybook/vue3";
import MultipleSelect from "@/components/star/atom/Filter/Test.vue";

const meta: Meta<typeof MultipleSelect> = {
  title: "Components/MultipleSelectTest",
  tags: ["autodocs"],
  component: MultipleSelect,
};

export default meta;
type Story = StoryObj<typeof MultipleSelect>;

// const render: Story["render"] = (args, { argTypes }) => ({
//   components: { MultipleSelect },
//   setup() {
//     return { args };
//   },
//   template: '<MultipleSelect v-bind="args">{{ args.default }}</MultipleSelect>',
// });

export const English: Story = {
  // render,
  args: {
    model: [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ],
  },
};
