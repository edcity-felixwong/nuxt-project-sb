<template>
  <div class="flex space-x-2">
    <template v-for="prop in stateToButtonProps($props.state)">
      <CardButton v-bind="prop" class="flex-1" />
    </template>
  </div>
</template>
<script setup lang="ts">
import CardButton from "./CardButton.vue";
import type { CardButtonProps } from "./CardButton.vue";
import type { Status, Paper } from "@/services/models";
import { pipe } from "fp-ts/function";
import { map } from "fp-ts/Array";

export type State =
  | "teacherDraft"
  | "teacherPublished"
  | "teacherShared"
  | "studentPublished"
  | "studentReportReady"
  | "studentReportUnReady"
  | "studentReportReadyRetry"
  | "studentReportUnReadyRetry";

export type CardButtonBarProps = {
  // model: CardButtonProps[];
  // status: Status;
  // locale?: CardButtonProps["locale"];
  // published?:Paper["published"]
  role: "teacher" | "student";
  state: State;
};

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
const props = withDefaults(defineProps<CardButtonBarProps>(), {});

/** This maps the finite states into list of button props */
function stateToButtonProps(state: State): CardButtonProps[] {
  const map: Record<State, CardButtonProps[]> = {
    teacherDraft: [{ action: "edit" }, { action: "preview" }, { action: "share" }],
    teacherPublished: [{ action: "report" }, { action: "preview" }, { action: "share" }],
    teacherShared: [{ action: "preview" }, { action: "accept" }, { action: "reject" }],
    studentPublished: [{ action: "attempt" }],
    studentReportReady: [{ action: "preview" }, { action: "report" }],
    studentReportUnReady: [{ action: "preview" }, { action: "report", isDisabled: true }],
    studentReportReadyRetry: [{ action: "preview" }, { action: "report" }, { action: "retry" }],
    studentReportUnReadyRetry: [
      { action: "preview" },
      { action: "report", isDisabled: true },
      { action: "retry" },
    ],
  };
  return map[state];
}
</script>
