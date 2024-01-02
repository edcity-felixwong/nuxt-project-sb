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
    <div class="flex text-sm relative rounded-small overflow-hidden bg-default-50">
      <div
        class="z-10 absolute top-0 left-0 bg-warning-400 h-full rounded-md"
        :style="{ width: barWidth }"
        aria-label=""
      ></div>
      <div class="p-2 flex-1 z-20 text-black/60">
        <p>{{ starDateFormat(props.startTime) }}</p>
      </div>
      <div class="p-2 z-20 text-black/60">
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
import { watchEffect, computed } from "vue";

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
watchEffect(() => {
  // console.log(
  //   `🚀 // DEBUG 🍔 ~ file: CardTimeProgress.vue:42 ~ watchEffect ~ dayjs( ).diff(dayjs(props.startTime)):`,
  //   dayjs().diff(dayjs(props.startTime))
  // );
  console.log(
    `🚀 // DEBUG 🍔 ~ file: CardTimeProgress.vue:42 ~ watchEffect ~ dayjs( ).diff(dayjs(props.startTime)):`,
    dayjs().diff(dayjs(props.startTime)) / dayjs(props.endTime).diff(dayjs(props.startTime))
  );
});
</script>
