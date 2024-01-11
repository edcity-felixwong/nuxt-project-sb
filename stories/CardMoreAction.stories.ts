import type { Meta, StoryObj } from "@storybook/vue3";
import CardMoreAction from "~/components/star/atom/Card/CardMoreAction.vue";
import { Status } from "@/services/models";

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
const s1: Status = {
  canAccept: "",
  canAssign: "",
  canDelete: "",
  canModify: "",
  canPreview: "",
  canPublish: "",
  canRecall: "",
  canReject: "",
  canReport: "",
  canReview: "",
  canSharePaper: "",
  canShareReport: "",
  canStart: "",
  canView: "",
  isFrozen: "",
  reportSharedAccepted: "",
};

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
export const TeacherEditPreview: Story = {
  name: "Teacher/EditPreview",
  args: {
    // model: ["edit", "preview"],
    state: "teacherEditPreview",
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
/** 進行評估/閱卷/報告 */
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
