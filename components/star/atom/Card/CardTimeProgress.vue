<template>
  <div class="rounded-small bg-default-50">
    <div
      class="pl-2 py-1 text-xs uppercase tracking-widest flex items-center [&_*]:text-inherit text-text-450"
    >
      <div>{{ $t("ui.time.start") }}</div>
      <Icon icon="material-symbols-light:chevron-right-rounded" class="w-4 h-4" />
      <div>{{ $t("ui.time.end") }}</div>
    </div>
    <div class="rounded-small bg-default-50 relative flex overflow-hidden text-sm">
      <div class="text-text-450 z-20 flex-1 p-2">
        <p>
          {{
            dayjs(props.startTime).isValid()
              ? starDateFormat(props.startTime)
              : $t("ui.time.invalid")
          }}
        </p>
      </div>
      <div class="text-text-450 z-20 p-2">
        <p>
          {{
            dayjs(props.endTime).isValid() ? starDateFormat(props.endTime) : $t("ui.time.invalid")
          }}
        </p>
      </div>
      <div
        class="bg-primary-700 absolute bottom-0 left-0 z-10 h-0.5 rounded-md"
        :style="{ width: barWidth }"
        aria-label=""
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@/components/star/atom/Icon";
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
