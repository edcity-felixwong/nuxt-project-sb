<template>
  <div
    class="[&>.p-submenu-icon]:hover:translate-y-2 border min-w-[320px] min-h-[240px] text-default-700 p-3 rounded-large"
  >
    <div class="mb-4 relative">
      <div>{{ props.ownerName }}</div>
      <div class="flex items-center gap-1 text-sm">
        <div>Published at 2023-04-23 16:30</div>
        <StatusTag :status="props.status" />
        <!-- <CardMoreOption /> -->
      </div>
    </div>
    <div class="mb-3">
      <MarkingTag status="automatedMarking" />

      <h2 class="text-default-800 mb-4 font-semibold">
        Primary 3 English Listening Paper - Trial arrangement for the "GU22 Assessment Materials"
      </h2>
      <CardDateTime />

      <div class="flex items-center gap-1 mt-4">
        <MarkingTag status="submission" label="20/20" size="small" />
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
import CardMoreOption from "./CardMoreOption.vue";

export type PaperCardProps = {
  ownerName?: string;
  status: StatusTagProps["status"];
  title?: string;
  startTime?: Date;
  endTime?: Date;
};
const props = withDefaults(defineProps<PaperCardProps>(), {});
</script>
