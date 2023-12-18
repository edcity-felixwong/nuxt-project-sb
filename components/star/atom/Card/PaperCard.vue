<template>
  <div
    class="[&>.p-submenu-icon]:hover:translate-y-2 border min-w-[320px] min-h-[240px] text-default-700 p-3 rounded-large"
  >
    <div class="mb-2">
      <div>{{ props.ownerName }}</div>
      <div class="flex items-center gap-1 text-sm">
        <StatusTag :status="props.status" />
        <div>Published at 2023-04-23 16:30</div>
      </div>
    </div>
    <div class="mb-3">
      <h2 class="text-default-800 font-semibold">
        Primary 3 English Listening Paper - Trial arrangement for the "GU22 Assessment Materials"
      </h2>
      <div class="flex space-x-2 text-sm">
        <CardDateTime>
          <p>2023-04-23 16:30</p>
        </CardDateTime>
        <CardDateTime>
          <p>2023-04-23 16:30</p>
        </CardDateTime>
      </div>
      <div class="flex items-center gap-1">
        <MarkingTag status="submission" label="Submission 20/20" />
        <MarkingTag status="automatedMarking" />
      </div>
    </div>
    <CardButtonBar :actions="['edit', 'retry', 'attempt']" />
  </div>
</template>
<script setup lang="ts">
import { StatusTag, StarChip, MarkingTag } from "@/components/star";
import type { StatusTagProps } from "@/components/star";
import CardButtonBar from "./CardButtonBar.vue";
import CardDateTime from "./CardDateTime.vue";

export type PaperCardProps = {
  ownerName?: string;
  status: StatusTagProps["status"];
  title?: string;
  startTime?: Date;
  endTime?: Date;
};
const props = withDefaults(defineProps<PaperCardProps>(), {});
</script>
