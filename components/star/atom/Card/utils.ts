import type { CardButtonProps } from "./CardButton.vue";

export type State =
  | "teacherDraft"
  | "teacherPublished"
  | "teacherShared"
  | "teacherEditPreview"
  | "studentPublished"
  | "studentReportReady"
  | "studentReportUnReady"
  | "studentReportReadyRetry"
  | "studentReportUnReadyRetry";

export const stateButtonPropsMap: Record<State, CardButtonProps[]> = {
  teacherDraft: [{ action: "edit" }, { action: "preview" }, { action: "share" }],
  teacherPublished: [{ action: "report" }, { action: "preview" }, { action: "share" }],
  teacherEditPreview: [{ action: "edit" }, { action: "preview" }],
  teacherShared: [{ action: "preview" }, { action: "accept" }, { action: "reject" }],
  studentPublished: [{ action: "attempt" }],
  studentReportReady: [{ action: "review" }, { action: "report" }],
  studentReportUnReady: [{ action: "review" }, { action: "report", isDisabled: true }],
  studentReportReadyRetry: [{ action: "review" }, { action: "report" }, { action: "retry" }],
  studentReportUnReadyRetry: [
    { action: "review" },
    { action: "report", isDisabled: true },
    { action: "retry" },
  ],
};
