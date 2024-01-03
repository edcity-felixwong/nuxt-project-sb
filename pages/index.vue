<template>
  <StarPage>
    <section class="">
      <StarBanner :subject="route.query['subject']" />
      <div class="max-w-[1680px] px-5 m-auto">
        <StarBreadcrumbNav :model="[{ label: 'My Papers' }, { label: '中文' }]" />
        <StarPaperTabs />
        <TabOption />
        <PDivider />
        <div class="flex justify-between h-12">
          <div class="flex space-x-2">
            <StarButton label="New" icon="material-symbols:add-rounded" variant="ghost" />

            <div class="card justify-content-center flex flex-wrap gap-3">
              <span class="p-input-icon-left">
                <Icon
                  icon="mynaui:search"
                  width="24px"
                  color="currentColor"
                  class="top-1/2 left-3 [&_*]:text-text-300 absolute m-0 -translate-y-1/2"
                />
                <PInputText v-model="value1" placeholder="Search" class="h-full border-none" />
              </span>
            </div>
          </div>
          <div class="flex justify-end space-x-1">
            <StarFilterMultipleSelect
              class="border-none"
              :options="[
                {
                  items: [
                    { label: 'All years', value: 'all', default: true },
                    { label: '2023/24', value: '2023/24' },
                    { label: '2022/23', value: '2022/23' },
                    { label: '2021/22', value: '2021/22' },
                    { label: '2020/21', value: '2020/21' },
                    { label: '2019/20', value: '2019/20' },
                  ],
                },
              ]"
            />
            <StarFilterMultipleSelect
              class="border-none"
              :options="[
                {
                  items: [
                    { label: 'All statuses', value: 'all', default: true },
                    { label: 'Pending', value: 'pending' },
                    { label: 'Ready', value: 'ready' },
                    { label: 'Not attempted', value: 'notAttempted' },
                    { label: 'Attempted', value: 'attempted' },
                    { label: 'Finished', value: 'finished' },
                  ],
                },
              ]"
            />
            <StarFilterMultipleSelect
              class="border-none"
              :options="[
                {
                  items: [
                    { label: 'All owners', value: 'all', default: true },
                    { label: 'You', value: 'you' },
                    { label: 'Others', value: 'other' },
                  ],
                },
              ]"
            />
            <StarFilterMultipleSelect
              class="border-none"
              placeholder="Sort by"
              :options="[
                {
                  label: 'Sort by',
                  ariaLabel: 'Sort by',
                  items: [
                    { label: 'Marking', value: 'marking' },
                    { label: 'Title', value: 'title' },
                    { label: 'Date started', value: 'dateStarted' },
                    { label: 'Date ended', value: 'dateEnded' },
                    { label: 'Status', value: 'status' },
                    { label: 'Owner', value: 'owner' },
                    { label: 'Date updated', value: 'dateUpdated' },
                  ],
                },
                {
                  separator: true,
                },
                {
                  label: 'Order',
                  ariaLabel: 'Order',
                  items: [
                    { label: 'Older first', value: 'olderFirst' },
                    { label: 'Newest first', value: 'newestFirst' },
                    { label: 'Z-A', value: 'z-a' },
                    { label: 'A-Z', value: 'a-z' },
                  ],
                },
              ]"
            />
          </div>
        </div>
        <div class="relative">
          <div>
            <!-- <div>{{ papers }}</div> -->
            <StarBreadcrumbNav :model="[{ label: '未完成' }]" />
            <section
              class="grid gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]"
              v-if="papers.data"
            >
              <div v-if="papers.isLoading.value">
                loading?{{ papers.status }}{{ papers.isLoading }}
              </div>
              <template v-for="paper in p2.data.value" v-else>
                <!-- <template v-for="p in paper"> -->
                <!-- <div>{{ JSON.stringify(p, null, 4) }}</div> -->
                <!-- <StarCardPaperCard :role="item.role" :paper="item.paper" v-for="item in papers" /> -->
                <PaperCard :role="role.role" :paper="paper" />
                <!-- </template> -->
              </template>
            </section>
          </div>
          <div>
            <StarBreadcrumbNav :model="[{ label: '已完成' }]" />
            <section class="grid gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
              <!-- <StarCardPaperCard ownerName="John Doe" status="ready" />
              <StarCardPaperCard ownerName="John Doe" status="ready" /> -->
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
import { Icon, PaperCard, StarPaperTabs } from "@/components/star";
import { TabOption } from "@/components/star/atom/Option";
import { ref } from "vue";
import { useRoute } from "vue-router";
// import { useI18n } from "vue-i18n";
import { createBEM } from "@/composables";
import { useRole, useUser } from "@/services";
import { useLoadPaperQuery } from "@/services/composites";

// const { t, locale } = useI18n();
const bem = createBEM("my-papers");
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
const p2 = useLoadPaperQuery();
// console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:169 ~ p2:`, p2);
// console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:169 ~ p2:`, p2.data);
// // console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:169 ~ p2:`, p2.data.value);
// console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:183 ~ p2.data.data:`, p2.data.data);
// // console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:169 ~ p2:`, p2.data.value[0]);
// console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:185 ~ p2.data.value:`, p2.data.value[2]);
const { data: role } = useRole();
</script>
