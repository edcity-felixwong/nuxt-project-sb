import type { Meta, StoryObj } from "@storybook/vue3";
import HeaderTemplate from "@/components/star/atom/Header/HeaderTemplate.vue";
import { simpleBooleanArg, simpleEnumArg } from "#storybook/blocks";
import { i18n } from "@/i18n";

const { t } = i18n.global;

// const props = HeaderTemplate.props as unknown as typeof StarButtonProp;
/* 'boolean' | 'function' | 'number' | 'string' | 'symbol' | SBType */
const meta: Meta<typeof HeaderTemplate> = {
  title: "components/Header",
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
        label: t("header.my_papers"),
        // label: "My Paper",
        icon: "material-symbols:article-outline-rounded",
        items: subjects,
      },
      {
        label: t("header.presest_papers"),
        icon: "material-symbols:book-4-outline-rounded",
        items: subjects,
      },
      {
        label: t("header.students_corner"),
        icon: "material-symbols:play-shapes-outline-rounded",
        items: subjects,
      },
      {
        label: t("header.report"),
        icon: "material-symbols:timeline",
        items: subjects,
      },
    ],
  },
};
export const TeacherC: Story = {
  // render,
  name: "Teacher/Chinese",
  args: {
    model: [
      {
        label: t("header.my_papers", undefined, { locale: "zh" }),
        // label: "My Paper",
        icon: "material-symbols:article-outline-rounded",
        items: subjects,
      },
      {
        label: t("header.presest_papers", undefined, { locale: "zh" }),
        icon: "material-symbols:book-4-outline-rounded",
        items: subjects,
      },
      {
        label: t("header.students_corner", undefined, { locale: "zh" }),
        icon: "material-symbols:play-shapes-outline-rounded",
        items: subjects,
      },
      {
        label: t("header.report", undefined, { locale: "zh" }),
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
        label: t("header.my_papers"),
        icon: "material-symbols:article-outline-rounded",
        items: subjects,
      },
      {
        label: t("header.students_corner"),
        icon: "material-symbols:play-shapes-outline-rounded",
        items: subjects,
      },
      {
        label: t("header.report"),
        icon: "material-symbols:timeline",
        items: subjects,
      },
    ],
  },
};
export const StudentC: Story = {
  name: "Student/Chinese",
  args: {
    model: [
      {
        label: t("header.my_papers", undefined, { locale: "zh" }),
        icon: "material-symbols:article-outline-rounded",
        items: subjects,
      },
      {
        label: t("header.students_corner", undefined, { locale: "zh" }),
        icon: "material-symbols:play-shapes-outline-rounded",
        items: subjects,
      },
      {
        label: t("header.report", undefined, { locale: "zh" }),
        icon: "material-symbols:timeline",
        items: subjects,
      },
    ],
  },
};
export const Mobile: Story = {
  args: {
    isMobile: true,
    model: [
      {
        label: t("header.my_papers"),
        // label: "My Paper",
        icon: "material-symbols:article-outline-rounded",
        items: subjects,
      },
      {
        label: t("header.presest_papers"),
        icon: "material-symbols:book-4-outline-rounded",
        items: subjects,
      },
      {
        label: t("header.students_corner"),
        icon: "material-symbols:play-shapes-outline-rounded",
        items: subjects,
      },
      {
        label: t("header.report"),
        icon: "material-symbols:timeline",
        items: subjects,
      },
    ],
  },
};
