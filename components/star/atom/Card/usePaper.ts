import { InjectionKey, type Ref, computed } from "vue";
import { TeacherPaper, StudentPaper, Paper } from "@/services/models";
import { provideLocal, injectLocal } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import { Locale } from "~/i18n";

import { useActionLink } from "~/services/composites/edit-paper";

const paperKey = Symbol("paper") as InjectionKey<TeacherPaper | StudentPaper | Paper>;
export const usePaper = () => {
  return injectLocal(paperKey);
};
export function createPaperContext(paper: TeacherPaper | StudentPaper | Paper) {
  provideLocal(paperKey, paper);
}

export const useAttempt = () => {
  const { locale }: { locale: Ref<Locale> } = useI18n();
  const paper = injectLocal(paperKey);
  if (paper) {
    window.open(useAttemptLink({ paper, locale: locale.value }), "_blank");
  }
};
/**  */
export const useCardButtonAction = (
  action:
    | "edit"
    | "preview"
    | "share"
    | "report"
    | "accept"
    | "reject"
    | "attempt"
    | "retry"
    | "review"
) => {
  const { locale }: { locale: Ref<Locale> } = useI18n();
  const paper = usePaper();
  if (!paper) return undefined;
  if (action === "share") {
    return computed(() => {
      return () => console.log(`🚀 // DEBUG 🍔 ~ returncomputed ~ "not done":`, "not done");
    });
  }
  return () => window.open(useActionLink(action)({ paper, locale: locale.value }), "_blank");
};
