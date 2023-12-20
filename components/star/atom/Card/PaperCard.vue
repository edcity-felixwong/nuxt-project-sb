<template>
  <div
    class="[&>.p-submenu-icon]:hover:translate-y-2 border min-w-[320px] min-h-[240px] text-default-700 p-3 rounded-large"
  >
    <div class="mb-4 relative">
      <div>
        {{ locale === "en" ? props.paper.ownerInfo.fullnameE : props.paper.ownerInfo.fullnameC }}
      </div>
      <div class="flex items-center gap-1 text-sm">
        <div>Published at {{ starDateFormat(props.paper.publishDate) }}</div>
        <StatusTag :status="props.paper.status.submission" />
        <!-- <CardMoreOption /> -->
      </div>
    </div>
    <div class="mb-3">
      <MarkingTag :status="props.paper.feedbackStatus" />

      <h2 class="text-default-800 mb-4 font-semibold">
        {{ props.paper.title }}
      </h2>
      <CardDateTime :startTime="props.paper.startTime" :endTime="props.paper.endTime" />

      <div class="flex items-center gap-1 mt-4">
        <!-- <MarkingTag status="submission" label="20/20" size="small" /> -->
      </div>
    </div>
    <CardButtonBar :state="buttonState" :role="props.role" />
  </div>
</template>
<script setup lang="ts">
import { StatusTag, StarChip, MarkingTag } from "@/components/star";
import type { StatusTagProps } from "@/components/star";
import type { Paper } from "@/services/models";
import { useI18n } from "vue-i18n";
import { starDateFormat } from "@/composables";

// Internal components
import CardButtonBar from "./CardButtonBar.vue";
import CardDateTime from "./CardDateTime.vue";
import CardMoreOption from "./CardMoreOption.vue";
import { useParseState } from "./useParseState";

const { t, locale } = useI18n();

export type PaperCardProps = {
  paper: Paper;
  ownerName?: string;
  status: StatusTagProps["status"];
  title?: string;
  // startTime?: Date;
  // endTime?: Date;
  role: "teacher" | "student";
};
const props = withDefaults(defineProps<PaperCardProps>(), {});

const buttonState = useParseState(props.paper, props.role);
</script>
