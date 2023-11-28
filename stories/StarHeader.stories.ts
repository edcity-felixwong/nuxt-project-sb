import type { Meta, StoryObj } from "@storybook/vue3";
import HeaderTemplate from "@/components/star/atom/Header/HeaderTemplate.vue";
import { simpleBooleanArg, simpleEnumArg } from "#storybook/blocks";
// const props = HeaderTemplate.props as unknown as typeof StarButtonProp;
/* 'boolean' | 'function' | 'number' | 'string' | 'symbol' | SBType */
const meta: Meta<typeof HeaderTemplate> = {
  title: "Example/HeaderTemplate",
  tags: ["autodocs"],
  component: HeaderTemplate,
};

export default meta;
type Story = StoryObj<typeof HeaderTemplate>;

// const render: Story["render"] = (args, { argTypes }) => ({
//   components: { HeaderTemplate },
//   setup() {
//     return { args };
//   },
//   template: '<HeaderTemplate v-bind="args">{{ args.default }}</HeaderTemplate>',
// });

const subjects = [
  {
    label: "中文",
  },
  {
    label: "English",
  },
  {
    label: "數學",
  },
  {
    label: "Mathematics",
  },
];

export const Teacher: Story = {
  // render,
  name: "Teacher/English",
  args: {
    model: [
      {
        label: "My Paper",
        icon: "material-symbols:article-outline-rounded",
        items: subjects,
      },
      {
        label: "Preset Papers",
        icon: "material-symbols:book-4-outline-rounded",
        items: subjects,
      },
      {
        label: "Student's Corner",
        icon: "material-symbols:play-shapes-outline-rounded",
        items: subjects,
      },
      {
        label: "Projects",
        icon: "material-symbols:timeline",
        items: subjects,
      },
    ],
  },
};

export const Student: Story = {
  name: "Student/English",
  args: {
    model: [
      {
        label: "My Paper",
        icon: "material-symbols:article-outline-rounded",
        items: subjects,
      },
      {
        label: "Features",
        icon: "material-symbols:play-shapes-outline-rounded",
        items: subjects,
      },
      {
        label: "Projects",
        icon: "material-symbols:timeline",
        items: subjects,
      },
    ],
  },
};
