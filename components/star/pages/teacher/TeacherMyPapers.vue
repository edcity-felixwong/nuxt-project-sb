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
        <div v-if="papers.isIdle.value || papers.isLoading.value">not ready</div>
        <StarPaperTabs v-model="tab" v-else />
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
import { createBEM, useSearchParams } from "@/composables";
import { useJwt, useRole, type Tab } from "@/services";
import { getPackageId } from "@/services/api/utils";
import { useLoadPaperQuery, usePaperTabs } from "@/services/composites";
import { usePaperOwners } from "@/services/composites/load-paper/useOwner";
import { computed, ref, type Component } from "vue";
import { z } from "zod";

import { toRefs } from "@vueuse/core";

const { data: role } = useRole();

const query = useSearchParams(
  {
    subject: computed(
      () =>
        (role.value?.isTeacher ? undefined : undefined) as "chinese" | "english" | "cmath" | "emath"
    ),
    // key2: undefined,
  },
  {
    transform: (_) => {
      return z
        .object({
          subject: z.enum(["chinese", "english", "cmath", "emath"]).catch(() => "english"),
          key2: z
            .enum(["key2default"])
            // .optional()
            .catch(() => "key2default"),
        })
        .parse(_);
    },
  }
);
const { subject } = toRefs(query);
const bem = createBEM("my-papers");

const papers = useLoadPaperQuery(
  computed(() => ({
    /** An array is needed */
    packageId: role.value?.isTeacher ? [getPackageId(subject.value)] : undefined,
  }))
);
const tabs = usePaperTabs(papers.data);
const owners = usePaperOwners(papers.data);

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
