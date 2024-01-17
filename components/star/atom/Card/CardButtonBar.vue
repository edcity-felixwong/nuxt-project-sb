<template>
  <div class="flex space-x-2">
    <template v-for="prop in stateToButtonProps($props.state)" :key="prop.action">
      <CardButton v-bind="prop" class="flex-1" />
    </template>
  </div>
</template>
<script setup lang="ts">
import type { Status } from "@/services/models";

import type { CardButtonProps } from "./CardButton.vue";
import CardButton from "./CardButton.vue";
import { State, stateButtonPropsMap } from "./utils";

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
  return stateButtonPropsMap[state];
}
</script>
