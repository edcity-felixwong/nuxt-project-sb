<template>
  <StarPage>
    <section class="">
      <StarBanner :subject="subject" />
      <div class="max-w-[1680px] px-5 m-auto">
        <StarBreadcrumbNav
          :model="[
            { label: 'My Papers' },
            { label: $t(`paper.subject.${subject}`) },
            { label: $t(tab ? `paper.tab.${tab}` : 'paper.tab.empty') },
          ]"
        />
        <StarPaperTabs v-model="tab" />
        <div v-if="papers.status.value !== 'success'">
          loading?{{ papers.isLoading }}{{ papers.status }}
        </div>
        <Component
          v-else
          :is="tabComponentMap[tab]"
          :role="role.role"
          :papers="papers.data.value"
          :isLoading="['idle', 'loading'].includes(papers.status.value)"
          :isError="papers.status.value === 'error'"
          :tab="tab"
        />
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
import {
  Icon,
  PaperCard,
  StarPaperTabs,
  StarSearch,
  StarControlBar,
  MyPapersTabContent,
  SharedPapersTabsContent,
  NspTabContent,
  BcaTabContent,
} from "@/components/star";
// import { TabOption } from "@/components/star/atom/Option";
import { ref, type Component, isReactive, computed } from "vue";
import { useRoute } from "vue-router";
// import { useI18n } from "vue-i18n";
import { createBEM, computedWithReactive, useSearchParams } from "@/composables";
import { useRole, useUser, useJwt, type Tab } from "@/services";
import { getPackageId } from "@/services/api/utils";
import { useLoadPaperQuery } from "@/services/composites";

// import { triage } from "@/services/composites/load-paper/useTriagePaper";
// import { groupByTab } from "@/services/composites/load-paper/usePaperGroupByTab";
// import { pipe } from "fp-ts/function";
import { useUrlSearchParams, toRefs, reactiveComputed, reactivePick } from "@vueuse/core";
import { useRouteQuery } from "@vueuse/router";

// // : ReturnType<typeof useUrlSearchParams> & { subject?: string }
// const params = useUrlSearchParams("history", { initialValue: { subject: "chinese" } });
// // params.subject ??= "chinese";

// // const route = useRoute();
// // route.query.subject = "chinese";
// // // Reflect.set(route.query, key, value);
// // console.log(`🚀 // DEBUG 🍔 ~ route:`, isReactive(route));
// // const query = reactivePick(route.query, "subject");
// // const { subject } = toRefs(computedWithReactive(route, () => route.query));
const { data: role } = useRole();
const { subject } = useSearchParams({
  subject: computed(() => (role.value?.isTeacher ? "chinese" : undefined)),
});

const bem = createBEM("my-papers");

const papers = useLoadPaperQuery(
  computed(() => ({
    /** An array is needed */
    packageId: role.value?.isTeacher ? [getPackageId(subject.value)] : undefined,
  }))
);

const { data: token } = useJwt();

// const papers=role.value?.isTeacher?

const tab = ref<string>("");

const tabComponentMap: Partial<Record<Tab, Component>> = {
  "": MyPapersTabContent,
  shared: SharedPapersTabsContent,
  bca2021: BcaTabContent,
  bca2022: BcaTabContent,
  nsp2020: NspTabContent,
};
</script>
