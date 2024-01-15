<template>
  <div>
    <ControlBar
      v-model:year="year"
      v-model:submission="submission"
      v-mode:user="user"
      :users="owners"
      :statuses="statuses"
    />
    <div class="relative">
      <div data-sui-section="papers">
        <StarBreadcrumbNav :model="[{ label: '未完成' }]" />
        <section
          v-if="props.papers"
          class="grid gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]"
        >
          <template v-for="paper in finalPapers.inProgress" :key="paper.id">
            <PaperCard :role="role" :paper="paper" />
          </template>
        </section>
      </div>
      <div data-sui-section="papers">
        <StarBreadcrumbNav :model="[{ label: '即將開始' }]" />
        <section
          v-if="props.papers"
          class="grid gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]"
        >
          <template v-for="paper in finalPapers.notStarted" :key="paper.id">
            <PaperCard :role="role" :paper="paper" />
          </template>
        </section>
      </div>
      <div data-sui-section="papers">
        <StarBreadcrumbNav :model="[{ label: '已完成' }]" />
        <section
          v-if="props.papers"
          class="grid gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]"
        >
          <template v-for="paper in finalPapers.ended" :key="paper.id">
            <PaperCard :role="role" :paper="paper" />
          </template>
        </section>
      </div>
      <StarButton
        :label="$t('ui.showMore')"
        variant="ghost"
        class="min-w-[256px] absolute left-2/4 mt-8 mb-4 -translate-x-1/2"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, type Ref } from "vue";
import { PaperCard, StarButton, StarBreadcrumbNav } from "#star/atom";
import type { Paper, AcademicYear } from "@/services/models";
import { triage } from "@/services/composites/load-paper/useTriagePaper";
import { groupByTab } from "@/services/composites/load-paper/usePaperGroupByTab";
import { useI18n } from "vue-i18n";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as R from "fp-ts/Record";
import * as A from "fp-ts/Array";
import * as P from "fp-ts/Predicate";
// import {  } from "fp-ts/Array";

import ControlBar from "./ControlBar.vue";
import { isValidPaper } from "./utils";
import { yearIs, statusIs, identityPaperPredicate, type PaperPredicate } from "./filtering";
import { usePaperOwners } from "@/services/composites/load-paper/useOwner";
import { computedWithControl } from "@vueuse/core";

export type MyPapersTabContentProps = {
  papers: Paper[];
  role: "teacher" | "student";
  isLoading?: boolean;
  isError?: boolean;
  state?: "error" | "idle" | "loading" | "success";
};
const props = withDefaults(defineProps<MyPapersTabContentProps>(), {
  isLoading: false,
  state: "success",
});
const { t, locale } = useI18n();
const owners = usePaperOwners(ref(props.papers));
const statuses = computedWithControl(
  () => [locale.value, props.role],
  () => {
    return props.role === "teacher"
      ? [
          { label: t("paper.status.all"), value: "all" },
          { label: t("paper.status.pending"), value: "pending" },
          { label: t("paper.status.ready"), value: "ready" },
          { label: t("paper.status.notAttempted"), value: "not_attempted" },
          { label: t("paper.status.attempted"), value: "attempted" },
          { label: t("paper.status.finished"), value: "finished" },
        ]
      : [
          { label: t("paper.status.all"), value: "all" },
          { label: t("paper.status.submitted"), value: "submitted" },
          { label: t("paper.status.not_submitted"), value: "not_submitted" },
        ];
  }
);

const year = ref<AcademicYear | "all">("2023/24");
const submission = ref<Paper["status"]["submission"] | "all">("all");
const user = ref();
const yearPredicate: Ref<PaperPredicate> = computed(() => {
  return pipe(
    year.value === "all" ? identityPaperPredicate : yearIs(year.value) //
  );
});
const submissionPredicate: Ref<PaperPredicate> = computed(() => {
  return pipe(
    submission.value === "all" ? identityPaperPredicate : statusIs(submission.value) //
  );
});
const filterPredicate: Ref<PaperPredicate> = computed(() => {
  return pipe(
    yearPredicate.value, //
    P.and(submissionPredicate.value)
  );
});

const finalPapers = computed(() => {
  return pipe(
    props.papers, //
    isValidPaper,
    O.map(groupByTab),
    O.chain(R.lookup("")),
    O.map(triage),
    O.map(R.map(A.filter(filterPredicate.value))),
    O.getOrElse(() => ({} as ReturnType<typeof triage>))
  );
});
watch(finalPapers, (v) => {
  console.log(`🚀 // DEBUG 🍔 ~ v:`, v);
});
</script>
