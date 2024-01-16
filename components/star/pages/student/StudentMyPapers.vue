<template>
  <StarPage>
    <section class="">
      <StarBanner subject="generic" />
      <div class="max-w-[1680px] px-5 m-auto">
        <StarBreadcrumbNav
          :model="[
            { label: $t('header.my_papers') },
            { label: $t(tab ? `paper.tab.${tab}` : 'paper.tab.empty') },
          ]"
        />
        <div v-if="papers.isIdle.value || papers.isLoading.value">not ready</div>
        <StarPaperTabs v-else v-model="tab" :tabs="tabs" />
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
import { StarBanner, StarBreadcrumbNav, StarFooter, StarPage } from "#star/atom";
import {
  BcaTabContent,
  MyPapersTabContent,
  NspTabContent,
  SharedPapersTabsContent,
  StarPaperTabs,
} from "@/components/star";
import { useRoleQuery, type Tab } from "@/services";
import { useLoadPaperQuery, usePaperTabs } from "@/services/composites";
import { ref, type Component, inject } from "vue";

const { data: role } = useRoleQuery();

const papers = useLoadPaperQuery();
const tabs = usePaperTabs(papers.data);
// watch(tabs, (tab) => {
//   console.log(`🚀 // DEBUG 🍔 ~ watch ~ tab:`, tab);
// });

// const { data: token } = useJwt();

// const papers=role.value?.isTeacher?

const tab = ref<string>("");
const tabModels = computed(() => {
  return tabs?.value?.map((_) => ({ trigger: _, default: tab.value === _ }));
});

const tabComponentMap: Partial<Record<Tab, Component>> = {
  "": MyPapersTabContent,
  shared: SharedPapersTabsContent,
  bca2021: BcaTabContent,
  bca2022: BcaTabContent,
  nsp2020: NspTabContent,
};
</script>
