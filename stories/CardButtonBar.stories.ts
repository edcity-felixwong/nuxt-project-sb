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

// export const DraftT: Story = {
//   name: "Teacher/Draft",
//   args: {
//     actions: ["edit", "preview", "share"],
//   },
// };
// export const PublishedT: Story = {
//   name: "Teacher/Published",
//   args: {
//     actions: ["report", "preview", "share"],
//   },
// };
// export const SharedT: Story = {
//   name: "Teacher/Shared",
//   args: {
//     actions: ["preview", "accept", "reject"],
//   },
// };
// export const PublishedS: Story = {
//   name: "Student/Published",
//   args: {
//     actions: ["attempt"],
//   },
// };
// export const ReportReadyS: Story = {
//   name: "Student/ReportReady",
//   args: {
//     actions: ["preview", "report"],
//   },
// };
// export const ReportUnReadyS: Story = {
//   name: "Student/ReportUnReady",
//   args: {
//     actions: ["preview", "report"],
//   },
// };
// export const ReportReadyRetryS: Story = {
//   name: "Student/ReportReadyRetry",
//   args: {
//     actions: ["preview", "report", "retry"],
//   },
// };
// export const ReportUnReadyRetryS: Story = {
//   name: "Student/ReportUnReadyRetry",
//   args: {
//     actions: ["preview", "report", "retry"],
//   },
// };
export const DraftT: Story = {
  name: "Teacher/Draft",
  args: {
    actions: ["edit", "preview", "share"],
  },
};
export const PublishedT: Story = {
  name: "Teacher/Published",
  args: {
    actions: ["report", "preview", "share"],
  },
};
export const SharedT: Story = {
  name: "Teacher/Shared",
  args: {
    actions: ["preview", "accept", "reject"],
  },
};
export const PublishedS: Story = {
  name: "Student/Published",
  args: {
    actions: ["attempt"],
  },
};
export const ReportReadyS: Story = {
  name: "Student/ReportReady",
  args: {
    actions: ["preview", "report"],
  },
};
export const ReportUnReadyS: Story = {
  name: "Student/ReportUnReady",
  args: {
    actions: ["preview", "report"],
  },
};
export const ReportReadyRetryS: Story = {
  name: "Student/ReportReadyRetry",
  args: {
    actions: ["preview", "report", "retry"],
  },
};
export const ReportUnReadyRetryS: Story = {
  name: "Student/ReportUnReadyRetry",
  args: {
    actions: ["preview", "report", "retry"],
  },
};
export const Chinese: Story = {
  ...ListTemplate,
  args: {
    items: actions.map((action) => ({ action, locale: "zh" })) satisfies Story["args"][],
  },
};
