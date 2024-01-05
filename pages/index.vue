<template>
  <StarPage>
    <section class="">
      <StarBanner :subject="route.query['subject']" />
      <div class="max-w-[1680px] px-5 m-auto">
        <StarBreadcrumbNav
          :model="[{ label: 'My Papers' }, { label: '中文' }, { label: 'Preset Papers' }]"
        />
        <StarPaperTabs v-model="pageTab" />
        <StarControlBar />
        <div class="relative">
          <div>
            <StarBreadcrumbNav :model="[{ label: '未完成' }]" />
            <section
              class="grid gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]"
              v-if="papers.data"
            >
              <div v-if="papers.isLoading.value">
                loading?{{ papers.status }}{{ papers.isLoading }}
              </div>
              <!-- <template v-for="paper in p2.data.value" v-else>
                <PaperCard :role="role.role" :paper="paper" />
              </template> -->
              <template v-for="paper in finalPapers.inProgress" v-else>
                <PaperCard :role="role.role" :paper="paper" />
              </template>
            </section>
          </div>
          <div>
            <StarBreadcrumbNav :model="[{ label: '即將開始' }]" />
            <section
              class="grid gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]"
              v-if="papers.data"
            >
              <div v-if="papers.isLoading.value">
                loading?{{ papers.status }}{{ papers.isLoading }}
              </div>
              <!-- <template v-for="paper in p2.data.value" v-else>
                <PaperCard :role="role.role" :paper="paper" />
              </template> -->
              <template v-for="paper in finalPapers.notStarted" v-else>
                <PaperCard :role="role.role" :paper="paper" />
              </template>
            </section>
          </div>
          <div>
            <StarBreadcrumbNav :model="[{ label: '已完成' }]" />
            <section class="grid gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
              <!-- <StarCardPaperCard ownerName="John Doe" status="ready" />
              <StarCardPaperCard ownerName="John Doe" status="ready" /> -->
              <template v-for="paper in finalPapers.ended">
                <PaperCard :role="role.role" :paper="paper" />
              </template>
            </section>
          </div>
          <StarButton
            :label="$t('ui.showMore')"
            variant="ghost"
            class="min-w-[256px] absolute left-2/4 mt-8 mb-4 -translate-x-1/2"
          />
        </div>
        <StarFooter />
      </div>
    </section>
  </StarPage>
</template>
<script setup lang="ts">
import {
  StarBanner,
  StarBreadcrumbNav,
  StarFilterMultipleSelect,
  StarFooter,
  StarPage,
} from "#components";
import { Icon, PaperCard, StarPaperTabs, StarSearch, StarControlBar } from "@/components/star";
import { TabOption } from "@/components/star/atom/Option";
import { ref } from "vue";
import { useRoute } from "vue-router";
// import { useI18n } from "vue-i18n";
import { createBEM } from "@/composables";
import { useRole, useUser } from "@/services";
import { useLoadPaperQuery } from "@/services/composites";
import { triage } from "@/services/composites/load-paper/useTriagePaper";
import { groupByTab } from "@/services/composites/load-paper/usePaperGroupByTab";
import { pipe } from "fp-ts/function";

// const { t, locale } = useI18n();
const bem = createBEM("my-papers");
watchEffect(() => {
  console.log(
    `🚀 // DEBUG 🍔 ~ file: index.vue:155 ~ watchEffect ~ bem('tst'):`,
    bem("tst").toString()
  );
});
const route = useRoute();

// const fetchSomething = () =>
//   fetch("https://e.star.dev.hkedcity.net/jwt.php", {
//     credentials: "include",
//   })
//     .then((r) => r.text())
//     .then((r) => {
//       return r;
//     });
const value1 = ref(null);

// const { data, isLoading, isError, error, isFetching } = useQuery(["jwt"], fetchSomething);
// const { data, isLoading, isError, error, isFetching } = useJwtQuery();
// const { data: jwt } = useJwtQuery({ select: (_) => _.token });
// const meta = useLoadMetaQuery();
// const { data: teacherPaper } = useLoadTeacherPaperQuery();
const { data: user } = useUser();

const papers = useLoadPaperQuery();
const triagedPapers = computed(() => {
  console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:118 ~ triagedPapers ~ papers:`, papers.data);
  if (!papers.data.value) return {};
  return triage(papers.data.value);
});
const myPapers = computed(() => {
  if (!papers.data.value) return {};
  return pipe(papers.data.value, groupByTab);
});
const finalPapers = computed(() => {
  if (!papers.data.value) return {};
  return pipe(
    papers.data.value, //
    groupByTab,
    (_) => _[""],
    triage
  );
});
watchEffect(() => {
  // watch(papers.data, () => {
  console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:178 ~ papers:`, papers.data.value);
  console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:185 ~ watch ~ triagedPapers:`, triagedPapers.value);
  console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:132 ~ //watch ~ myPapers.value:`, myPapers.value);
  // });
  console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:139 ~ //watch ~ finalPapers:`, finalPapers.value);
});
const p2 = useLoadPaperQuery();
// console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:169 ~ p2:`, p2);
// console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:169 ~ p2:`, p2.data);
// // console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:169 ~ p2:`, p2.data.value);
// console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:183 ~ p2.data.data:`, p2.data.data);
// // console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:169 ~ p2:`, p2.data.value[0]);
// console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:185 ~ p2.data.value:`, p2.data.value[2]);
const { data: role } = useRole();

const pageTab = ref();
</script>
