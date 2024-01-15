<template>
  <div>
    <ControlBar v-model:year="year" />
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
import { computed, ref } from "vue";
import { PaperCard, StarButton, StarBreadcrumbNav } from "#star/atom";
import type { Paper, Tab, AcademicYear } from "@/services/models";
import { triage } from "@/services/composites/load-paper/useTriagePaper";
import { groupByTab } from "@/services/composites/load-paper/usePaperGroupByTab";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as R from "fp-ts/Record";
import * as A from "fp-ts/Array";
import * as P from "fp-ts/Predicate";
// import {  } from "fp-ts/Array";

import ControlBar from "./ControlBar.vue";
import { isValidPaper } from "./utils";
import { yearIs, type PaperPredicate } from "./filtering";

export type MyPapersTabContentProps = {
  papers: Paper[];
  role: "teacher" | "student";
  isLoading?: boolean;
  isError?: boolean;
  tab?: Tab;
  // state?: "error" | "idle" | "loading" | "success";
};
const props = withDefaults(defineProps<MyPapersTabContentProps>(), {
  isLoading: false,
  isError: false,
  // state: "success",
});
const year = ref<AcademicYear>("2023/24");
const filterPredicate: Ref<PaperPredicate> = computed(() => {
  return pipe(
    yearIs(year.value) //
  );
});

const finalPapers = computed(() => {
  return pipe(
    props.papers, //
    isValidPaper,
    O.map(groupByTab),
    O.chain((_) => O.fromNullable(_[props.tab])),
    O.map(triage),
    O.map(R.map(A.filter(filterPredicate.value))),
    O.getOrElse(() => ({} as ReturnType<typeof triage>))
  );
});
</script>
