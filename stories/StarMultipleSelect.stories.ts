import type { Meta, StoryObj } from "@storybook/vue3";
import MultipleSelect from "@/components/star/atom/Filter/MultipleSelect.vue";

/**
 * TODO
 * 1. focus style by `data-p-highlight` and `data-p-focused`, or `aria-selected`
 * 2. selected icon
 * 3. tab
 * 4. keyboard navigation
 *    - 1. open dropdown by space/enter/up/down
 *    - 2. move up/down
 *    - 3. home/end
 *    - 4. esc to leave
 * 5. placeholder
 * 6. click to un-select on multiple select mode
 * 7. start content
 * 8. default select
 * 9. invalid state
 *
 */
const meta: Meta<typeof MultipleSelect> = {
  title: "Components/MultipleSelect",
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

export const Default: Story = {
  // render,
  args: {
    options: [
      {
        items: [
          { label: "New York", code: "NY" },
          { label: "Rome", code: "RM" },
          { label: "London", code: "LDN" },
          { label: "Istanbul", code: "IST" },
          { label: "Paris", code: "PRS" },
        ],
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      {
        items: [
          { label: "New York", code: "NY" },
          { label: "Rome", code: "RM" },
          { label: "London", code: "LDN" },
          { label: "Istanbul", code: "IST" },
          { label: "Paris", code: "PRS" },
        ],
      },
    ],
  },
};
export const WithComand: Story = {
  name: "With command",
  args: {
    options: [
      {
        items: [
          { label: "New York", code: "NY", command: (e) => console.log(e) },
          { label: "Rome", code: "RM", command: (e) => console.log(e) },
          { label: "London", code: "LDN", command: (e) => console.log(e) },
          { label: "Istanbul", code: "IST", command: (e) => console.log(e) },
          { label: "Paris", code: "PRS", command: (e) => console.log(e) },
        ],
      },
    ],
  },
};
export const WithDisabledItems: Story = {
  name: "With disabled items",
  args: {
    options: [
      {
        items: [
          { label: "New York", code: "NY", disabled: true },
          { label: "Rome", code: "RM", disabled: true },
          { label: "London", code: "LDN" },
          { label: "Istanbul", code: "IST" },
          { label: "Paris", code: "PRS", disabled: true },
        ],
      },
    ],
  },
};
export const WithDefault: Story = {
  name: "With default option",
  args: {
    options: [
      {
        items: [
          { label: "New York", code: "NY", selected: true },
          { label: "Rome", code: "RM", selected: false },
          { label: "London", code: "LDN" },
          { label: "Istanbul", code: "IST" },
          { label: "Paris", code: "PRS" },
        ],
      },
    ],
  },
};
export const WithAria: Story = {
  name: "With aria",
  args: {
    options: [
      {
        ariaLabel: "Country",
        items: [
          { label: "New York", code: "NY", disabled: true },
          { label: "Rome", code: "RM", disabled: true },
          { label: "London", code: "LDN" },
          { label: "Istanbul", code: "IST" },
          { label: "Paris", code: "PRS", disabled: true },
        ],
      },
    ],
  },
};
export const ForceRequired: Story = {
  name: "Force required",
  args: {
    options: [
      {
        ariaLabel: "Country",

        items: [
          { label: "New York", code: "NY", disabled: true },
          { label: "Rome", code: "RM", disabled: true },
          { label: "London", code: "LDN" },
          { label: "Istanbul", code: "IST" },
          { label: "Paris", code: "PRS", disabled: true },
        ],
      },
    ],
  },
};
export const Structured: Story = {
  // name: "Force required",
  args: {
    options: [
      {
        ariaLabel: "Country",
        label: "Country",
        items: [
          { label: "New York", code: "NY", disabled: true },
          { label: "Rome", code: "RM", disabled: true },
          { label: "London", code: "LDN" },
          { label: "Istanbul", code: "IST" },
          { label: "Paris", code: "PRS", disabled: true },
        ],
      },
      { separator: true },
      {
        label: "Language",
        items: [{ label: "Chinese" }, { label: "English" }],
      },
    ],
  },
};
