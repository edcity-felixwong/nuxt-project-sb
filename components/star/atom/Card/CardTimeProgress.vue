<template>
  <div class="rounded-small bg-default-50">
    <div
      class="pl-2 py-1 text-xs uppercase tracking-widest flex items-center [&_*]:text-inherit text-text-450"
    >
      <!-- <div class=""> -->
      <div>{{ $t("ui.start") }}</div>
      <Icon icon="material-symbols:arrow-right-alt-rounded" />
      <div>{{ $t("ui.end") }}</div>
      <!-- </div> -->
    </div>
    <div class="rounded-small bg-default-50 relative flex overflow-hidden text-sm">
      <div
        class="bg-warning-400 absolute top-0 left-0 z-10 h-full rounded-md"
        :style="{ width: barWidth }"
        aria-label=""
      ></div>
      <div class="text-black/60 z-20 flex-1 p-2">
        <p>{{ starDateFormat(props.startTime) }}</p>
      </div>
      <div class="text-black/60 z-20 p-2">
        <p>{{ starDateFormat(props.endTime) }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@/components/star";
import { useI18n } from "vue-i18n";
import { starDateFormat } from "@/composables";
import type { DateLike } from "@/composables";
import dayjs from "dayjs";
import { computed } from "vue";

// const { locale } = useI18n();
export type CardDateTimeProps = {
  startTime: DateLike;
  endTime: DateLike;
};
const props = withDefaults(defineProps<CardDateTimeProps>(), {});
const barWidth = computed(() => {
  return `${
    (dayjs().diff(dayjs(props.startTime)) / dayjs(props.endTime).diff(dayjs(props.startTime))) * 100
  }%`;
});
</script>
