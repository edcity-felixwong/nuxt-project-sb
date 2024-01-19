<template>
  <StarButton
    v-bind="{ ...props, ...getProps(props.action) }"
    :label="props.label ?? label"
    @click="action"
  />
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";

import type { StarButtonProps } from "#star/atom/Button";
import { StarButton } from "#star/atom/Button";

import { useCardButtonAction } from "./usePaper";

const { t } = useI18n();

export type CardButtonProps = StarButtonProps & {
  action:
    | "edit"
    | "preview"
    | "share"
    | "report"
    | "accept"
    | "reject"
    | "attempt"
    | "retry"
    | "review";
  // locale?: "zh" | "en";
  // command?: (e: HTMLElementEventMap["click"]) => void;
};
const props = withDefaults(defineProps<CardButtonProps>(), {});
const label = computed(() => t(`paper.action.${props.action}`));
function getProps(action: CardButtonProps["action"]): StarButtonProps {
  const propMap: Record<CardButtonProps["action"], StarButtonProps> = {
    accept: {
      icon: "material-symbols:thumb-up-outline-rounded",
    },
    attempt: { icon: "material-symbols:edit-outline-rounded", color: "primary", variant: "flat" },
    edit: { icon: "material-symbols:edit-square-outline-rounded" },
    preview: { icon: "material-symbols:visibility-outline-rounded" },
    review: { icon: "material-symbols:visibility-outline-rounded" },
    reject: { icon: "material-symbols:thumb-down-outline-rounded" },
    report: { icon: "material-symbols:timeline" },
    retry: { icon: "material-symbols:replay-rounded" },
    share: { icon: "material-symbols:share-outline" },
  };
  return propMap[action];
}

const action = useCardButtonAction(props.action);
</script>
