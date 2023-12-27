<template>
  <div class="pl-2 text-xs">{{ locale === "en" ? "start" : "開始" }}</div>

  <div class="flex space-x-2 text-sm relative rounded-small overflow-hidden bg-default-50">
    <div class="absolute top-0 left-0 bg-warning-400 w-2/4 h-full rounded-md"></div>
    <div class="p-2">
      <p>{{ starDateFormat(props.startTime) }}</p>
    </div>
    <div class="p-2">
      <p>{{ starDateFormat(props.endTime) }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { StarFieldSet } from "@/components/star";
import { useI18n } from "vue-i18n";
import { starDateFormat } from "@/composables";
import type { DateLike } from "@/composables";

const { locale } = useI18n();
export type CardDateTimeProps = {
  startTime: DateLike;
  endTime: DateLike;
};
const props = withDefaults(defineProps<CardDateTimeProps>(), {});
</script>
