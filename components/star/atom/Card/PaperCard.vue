<template>
  <div
    class="relative flex flex-col [&>.p-submenu-icon]:hover:translate-y-2 border min-w-[320px] min-h-[240px] text-default-700 p-3 rounded-large"
  >
    <div class="relative mb-4">
      <div>
        {{ locale === "en" ? props.paper.ownerInfo?.fullnameE : props.paper.ownerInfo?.fullnameC }}
      </div>
      <div class="flex items-center gap-1 text-sm">
        <PublishDate :paper="props.paper" />
        <StatusTag v-if="props.paper.status" :status="props.paper.status?.submission" />
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="space-x-1">
        <SubjectTag :packageId="props.paper.packageId" />
        <template v-if="$props.role === 'teacher'">
          <MarkingTag
            v-if="(props.paper as TeacherPaper).feedbackStatus"
            :status="(props.paper as TeacherPaper).feedbackStatus"
          />
        </template>
      </div>

      <h2 class="text-default-800 flex-1 mb-4 font-semibold">
        {{ props.paper.title }}
      </h2>
      <CardTimeProgress :startTime="props.paper.startTime" :endTime="props.paper.endTime" />
      <div class="flex items-center gap-1 mt-2 overflow-hidden">
        <template v-if="$props.role === 'teacher'">
          <StarChip
            status="submission"
            v-tooltip="`${(props.paper as StudentPaper).mySubmmitedTrialNo?`Submitted ${(props.paper as StudentPaper).mySubmmitedTrialNo} times`:'Not submitted'}. ${props.paper.maxTrialNo?`${props.paper.maxTrialNo-(props.paper as StudentPaper).mySubmmitedTrialNo} remaining.`:''}`"
            :label="`${props.paper.trialsSubmitted}/${props.paper.trialsAssigned}`"
            icon="material-symbols:task-outline-rounded"
            size="xs"
            variant="flat"
            :pt="{
              label: 'text-text-450 font-normal',
              icon: 'text-text-450',
            }"
          />
          <StarChip
            status="submission"
            :label="$t('ui.time.updatedAt',{time:starDateFormat((props.paper as StudentPaper).ownerModifyAt)})"
            size="xs"
            variant="flat"
            :pt="{
              label: 'text-text-450 font-normal',
              icon: 'text-text-450',
            }"
          />
        </template>
        <template v-else>
          <StarChip
            status="submission"
            v-tooltip="`${(props.paper as StudentPaper).mySubmmitedTrialNo?`Submitted ${(props.paper as StudentPaper).mySubmmitedTrialNo} times`:'Not submitted'}. ${props.paper.maxTrialNo?`${props.paper.maxTrialNo-(props.paper as StudentPaper).mySubmmitedTrialNo} remaining.`:''}`"
            :label="`${(props.paper as StudentPaper).mySubmmitedTrialNo}/${props.paper.maxTrialNo?props.paper.maxTrialNo:$t('paper.status.unlimited')}`"
            icon="material-symbols:task-outline-rounded"
            size="xs"
            variant="flat"
            :pt="{
              label: 'text-text-450 font-normal',
              icon: 'text-text-450',
            }"
          />
          <StarChip
            status="submission"
            :label="$t('ui.time.updatedAt',{time:starDateFormat((props.paper as StudentPaper).ownerModifyAt)})"
            size="xs"
            variant="flat"
            :pt="{
              label: 'text-text-450 font-normal',
              icon: 'text-text-450',
            }"
          />
        </template>
      </div>
      <!-- <div class="flex items-center gap-1 mt-4">
        <MarkingTag status="submission" label="20/20" size="small" />
      </div> -->
    </div>
    <CardButtonBar :state="buttonState" :role="props.role" class="empty:mt-0 mt-3" />
    <div class="absolute right-0 top-0 pt-[inherit] pr-[inherit]">
      <CardMoreAction />
    </div>
  </div>
</template>
<script setup lang="ts">
import { StatusTag, MarkingTag, SubjectTag, StarChip } from "#star/atom/Chip";
import type { Paper, TeacherPaper, StudentPaper } from "@/services/models";
import { useI18n } from "vue-i18n";
import { starDateFormat } from "@/composables";
// import { starDateFormat } from "@/composables";

import CardButtonBar from "./CardButtonBar.vue";
import { useParseState } from "./useParseState";
import CardTimeProgress from "./CardTimeProgress.vue";
import PublishDate from "./PublishDate.vue";
import CardMoreAction from "./CardMoreAction.vue";
import CardActivityBar from "./CardActivityBar.vue";

// TODO
import { useAttemptLink } from "@/services/composites/edit-paper";

const { locale } = useI18n();

export type PaperCardProps = {
  paper: Paper | TeacherPaper | StudentPaper;
  role: "teacher" | "student";
};
const props = withDefaults(defineProps<PaperCardProps>(), {});

const buttonState = useParseState(props.paper, props.role);
watchEffect(() => {
  console.log(
    `🚀 // DEBUG 🍔 ~ watchEffect ~ useAttemptLink({paper:props.paper}):`,
    useAttemptLink({ paper: props.paper })
  );
});
</script>
