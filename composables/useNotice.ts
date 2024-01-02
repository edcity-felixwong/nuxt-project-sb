import { useNoticeQuery } from "@/services/api";
import { useI18n } from "vue-i18n";
import { computedWithControl } from "@vueuse/core";

export function useNotice() {
  const { locale } = useI18n();
  const { data: notice } = useNoticeQuery();
  return computedWithControl([locale, notice], () =>
    notice.value?.map((_) => ({ html: _[locale.value] }))
  );
}
