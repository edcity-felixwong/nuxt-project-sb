<template>
  <StarButton v-bind="{ ...props, ...getProps(props.action) }" :label="props.label ?? label" />
</template>
<script setup lang="ts">
import { StarButton } from "@/components/star/atom/Button";
import type { StarButtonProps } from "@/components/star/atom/Button";
import { useI18n } from "vue-i18n";
import { computedWithReactive } from "@/composables";

const { t, locale } = useI18n();

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
  locale?: "zh" | "en";
};
const props = withDefaults(defineProps<CardButtonProps>(), {});
const label = computedWithReactive([props, locale], () => {
  const localeFallback = props.locale ?? locale.value;
  return t(`paper.action.${props.action}`, null, { locale: localeFallback });
});
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
</script>
