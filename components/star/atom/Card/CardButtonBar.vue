<template>
  <div class="flex space-x-2">
    <template v-for="action in props.actions" :key="action">
      <CardButton :action="action" class="flex-1" />
    </template>
  </div>
</template>
<script setup lang="ts">
import CardButton from "./CardButton.vue";
import type { CardButtonProps } from "./CardButton.vue";
import type { Status, Paper } from "@/services/models";
import { pipe } from "fp-ts/function";
import { map } from "fp-ts/Array";

export type CardButtonBarProps = Paper & {
  actions: CardButtonProps["action"][];
  status: Status;
  // locale?: CardButtonProps["locale"];
  // published?:Paper["published"]
  role: "teacher" | "student";
};

export type State =
  | "teacherDraft"
  | "teacherPublished"
  | "teacherShared"
  | "studentPublished"
  | "studentReportReady"
  | "studentReportUnReady"
  | "studentReportReadyRetry"
  | "studentReportUnReadyRetry";

export type Actions = CardButtonProps["action"] | "view" | "delete" | "assign" | "review";
const actionsMap: Record<keyof Status, Actions> = {
  canStart: "attempt",
  canPreview: "preview",
  canView: "view",
  canModify: "edit",
  canDelete: "delete",
  canAssign: "assign",
  canReview: "review",
  canReport: "report",
};
// const getActions: (x: Status) => CardButtonProps["action"][] = (status) => {
//   const t3=Object.entries<Status[keyof Status]>(status)
//   pipe(
//     status,
//     Object.entries<Status[keyof Status]>,
//     map(([k,v])=>(actionsMap[k] as unknown as Actions|undefined)),
//     r=>
//   )
// };
const props = withDefaults(defineProps<CardButtonBarProps>(), {});

function getState(status: Status): State {
  if (props.role === "teacher") {
    if (status.canModify && status.canPreview) return "teacherDraft";
    if (status.canReport && status.canPreview) return "teacherPublished";
    if (status.canPreview) return "teacherShared";
  }
  if (props.role === "student") {
    if (status.canStart) return "studentPublished";
    if (props.published && status.canPreview && status.canReport) return "studentReportReady";
    if (props.mySubmmitedTrialNo && status.canPreview && !status.canReport) {
      return "studentReportReady";
    }
    if (props.mySubmmitedTrialNo && status.canPreview && status.canStart && status.canReport) {
      return "studentReportReadyRetry";
    }
    if (props.mySubmmitedTrialNo && status.canPreview && status.canStart && !status.canReport) {
      return "studentReportUnReadyRetry";
    }
  }
}
function stateToAction(state: State): CardButtonProps["action"][] {
  const map: Record<State, CardButtonProps["action"][]> = {
    teacherDraft: ["report", "preview", "share"],
    teacherPublished: ["report", "preview", "share"],
    teacherShared: ["preview", "accept", "reject"],
    studentPublished: ["attempt"],
    studentReportReady: ["preview", "report"],
    studentReportUnReady: ["preview", "report"],
    studentReportReadyRetry: ["preview", "report", "retry"],
    studentReportUnReadyRetry: ["preview", "report", "retry"],
  };
  return map[state];
}
</script>
