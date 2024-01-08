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
import { ref, type Component } from "vue";
import { useRoute } from "vue-router";
// import { useI18n } from "vue-i18n";
import { createBEM, computedWithReactive } from "@/composables";
import { useRole, useUser, type Tab } from "@/services";
import { useLoadPaperQuery } from "@/services/composites";
// import { triage } from "@/services/composites/load-paper/useTriagePaper";
// import { groupByTab } from "@/services/composites/load-paper/usePaperGroupByTab";
// import { pipe } from "fp-ts/function";

const bem = createBEM("my-papers");

const route = useRoute();
const subject = computedWithReactive(route, () => route.query.subject ?? "chinese");

const papers = useLoadPaperQuery();

const { data: role } = useRole();

const tab = ref<string>("");

const tabComponentMap: Partial<Record<Tab, Component>> = {
  "": MyPapersTabContent,
  shared: SharedPapersTabsContent,
  bca2021: BcaTabContent,
  bca2022: BcaTabContent,
  nsp2020: NspTabContent,
};
</script>
