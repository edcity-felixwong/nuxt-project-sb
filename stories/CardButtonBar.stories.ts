import type { Meta, StoryObj } from "@storybook/vue3";
import { CardButtonBar } from "@/components/star";

/**
 * This address the layout and order of the buttons.
 *
 * Types:
 * Draft (Teacher)
 * Published (Teacher)
 * Shared (Teacher, `published` required?)
 * Report-ready [(Teacher, `published` and answered) & (Student and finished)]
 * Report-unready [(Teacher, `published` and not answered) & (Student and un-finished)]
 * |- Retry (Student)
 * Published (Student, ie attempt)
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

export const TeacherDraft: Story = {
  name: "Teacher/Draft",
  args: {
    // model: [{ action: "edit" }, { action: "preview" }, { action: "share" }],
    state: "teacherDraft",
  },
};
export const TeacherPublished: Story = {
  name: "Teacher/Published",
  args: {
    // model: ["report", "preview", "share"],
    state: "teacherPublished",
  },
};
export const TeacherShared: Story = {
  name: "Teacher/Shared",
  args: {
    // model: ["preview", "accept", "reject"],
    state: "teacherShared",
  },
};
export const StudentPublished: Story = {
  name: "Student/Published",
  args: {
    // model: ["attempt"],
    state: "studentPublished",
  },
};
export const StudentReportReady: Story = {
  name: "Student/ReportReady",
  args: {
    // model: ["preview", "report"],
    state: "studentReportReady",
  },
};
export const StudentReportUnReady: Story = {
  name: "Student/ReportUnReady",
  args: {
    // model: ["preview", "report"],
    state: "studentReportUnReady",
  },
};
export const StudentReportReadyRetry: Story = {
  name: "Student/ReportReadyRetry",
  args: {
    // model: ["preview", "report", "retry"],
    state: "studentReportReadyRetry",
  },
};
export const StudentReportUnReadyRetry: Story = {
  name: "Student/ReportUnReadyRetry",
  args: {
    // model: ["preview", "report", "retry"],
    state: "studentReportUnReadyRetry",
  },
};
export const Chinese: Story = {
  ...ListTemplate,
  args: {
    items: actions.map((action) => ({ action, locale: "zh" })) satisfies Story["args"][],
  },
};
