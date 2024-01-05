<template>
  <div class="flex space-x-2 text-sm">
    <StarFieldSet :legend="locale === 'en' ? 'start' : '開始'">
      <p>{{ starDateFormat(props.startTime) }}</p>
    </StarFieldSet>
    <StarFieldSet :legend="locale === 'en' ? 'end' : '完結'">
      <p>{{ starDateFormat(props.endTime) }}</p>
    </StarFieldSet>
  </div>
</template>
<script setup lang="ts">
import { StarFieldSet } from "@/components/star/atom/FieldSet";
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
