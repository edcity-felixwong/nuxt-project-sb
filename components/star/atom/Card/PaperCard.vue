<template>
  <div
    class="flex flex-col [&>.p-submenu-icon]:hover:translate-y-2 border min-w-[320px] min-h-[240px] text-default-700 p-3 rounded-large"
  >
    <div class="relative mb-4">
      <div>
        {{ locale === "en" ? props.paper.ownerInfo?.fullnameE : props.paper.ownerInfo?.fullnameC }}
      </div>
      <div class="flex items-center gap-1 text-sm">
        <PublishDate :paper="props.paper" />
        <!-- <div>Published at {{ starDateFormat(props.paper.publishDate) }}</div> -->
        <StatusTag v-if="props.paper.status" :status="props.paper.status?.submission" />
        <!-- <CardMoreOption /> -->
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <MarkingTag v-if="props.paper.feedbackStatus" :status="props.paper.feedbackStatus" />

      <h2 class="text-default-800 flex-1 mb-4 font-semibold">
        {{ props.paper.title }}
      </h2>
      <CardTimeProgress :startTime="props.paper.startTime" :endTime="props.paper.endTime" />

      <!-- <div class="flex items-center gap-1 mt-4">
        <MarkingTag status="submission" label="20/20" size="small" />
      </div> -->
    </div>
    <CardButtonBar :state="buttonState" :role="props.role" class="empty:mt-0 mt-3" />
  </div>
</template>
<script setup lang="ts">
import { StatusTag, MarkingTag } from "@/components/star/atom/Chip";
// import type { StatusTagProps } from "@/components/star/atom/Chip";
import type { Paper } from "@/services/models";
import { useI18n } from "vue-i18n";
// import { starDateFormat } from "@/composables";

// Internal components
import CardButtonBar from "./CardButtonBar.vue";
// import CardDateTime from "./CardDateTime.vue";
// import CardMoreOption from "./CardMoreOption.vue";
import { useParseState } from "./useParseState";
import CardTimeProgress from "./CardTimeProgress.vue";
import PublishDate from "./PublishDate.vue";

const { t, locale } = useI18n();

export type PaperCardProps = {
  paper: Paper;
  ownerName?: string;
  // status?: StatusTagProps["status"];
  title?: string;
  // startTime?: Date;
  // endTime?: Date;
  role: "teacher" | "student";
};
const props = withDefaults(defineProps<PaperCardProps>(), {});

const buttonState = useParseState(props.paper, props.role);
</script>
