import type { State } from "./CardButtonBar.vue";
import type { Status, Paper } from "@/services/models";
import type { Ref } from "vue";
import { computedWithControl } from "@vueuse/core";

/** Shitty function to tell what buttons should be shown from a paper object. */
export function parseState(paper: Paper, role: "teacher" | "student"): State {
  if (role === "teacher") {
    /** Seem like shareReport is separated */
    if (paper.status.canModify && paper.status.canPreview && paper.status.canSharePaper) {
      return "teacherDraft";
    }
    if (paper.published && paper.status.canReport && paper.status.canPreview) {
      return "teacherPublished";
    }
    if (paper.status.canPreview && paper.status.canAccept && paper.status.canReject) {
      return "teacherShared";
    }
  }
  if (role === "student") {
    if (paper.status.canStart) return "studentPublished";
    if (paper.published && paper.status.canPreview && paper.status.canReport) {
      return "studentReportReady";
    }
    if (paper.mySubmmitedTrialNo && paper.status.canPreview && !paper.status.canReport) {
      return "studentReportReady";
    }
    if (
      paper.mySubmmitedTrialNo &&
      paper.status.canPreview &&
      paper.status.canStart &&
      paper.status.canReport
    ) {
      return "studentReportReadyRetry";
    }
    if (
      paper.mySubmmitedTrialNo &&
      paper.status.canPreview &&
      paper.status.canStart &&
      !paper.status.canReport
    ) {
      return "studentReportUnReadyRetry";
    }
  }
}
export function useParseState(paper: Paper, role: "teacher" | "student"): Ref<State> {
  return computedWithControl(
    () => [paper, role],
    () => parseState(paper, role)
  );
}
