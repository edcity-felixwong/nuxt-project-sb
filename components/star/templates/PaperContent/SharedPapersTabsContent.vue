<template>
  <div>
    <ControlBar />
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
import { computed } from "vue";
import { PaperCard, StarButton, StarBreadcrumbNav } from "#star/atom";
import type { Paper } from "@/services/models";
import { triage } from "@/services/composites/load-paper/useTriagePaper";
import { groupByTab } from "@/services/composites/load-paper/usePaperGroupByTab";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
// import {  } from "fp-ts/Array";

import ControlBar from "./ControlBar.vue";
import { isValidPaper } from "./utils";

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

const finalPapers = computed(() => {
  return pipe(
    props.papers, //
    isValidPaper,
    O.map(groupByTab),
    O.chain((_) => O.fromNullable(_.shared)),
    O.map(triage),
    O.getOrElse(() => ({} as ReturnType<typeof triage>))
  );
});
</script>
