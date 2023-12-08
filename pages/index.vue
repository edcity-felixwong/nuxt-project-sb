<template>
  <StarPage>
    <section class="">
      <StarBanner :subject="route.query['subject']" />
      <div class="max-w-[1680px] px-5 m-auto">
        <StarBreadcrumbNav :model="[{ label: 'My Papers' }, { label: '中文' }]" />
        <StarDivider />
        <div class="flex justify-between">
          <div class="flex">
            <StarButton>New</StarButton>
            <StarButton label="New" class="enabled:focus:outline-offset-2" />
            <div class="card justify-content-center flex flex-wrap gap-3">
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <PInputText v-model="value1" placeholder="Search" />
              </span>
            </div>
          </div>
          <div class="flex justify-end">
            <StarFilterMultipleSelect
              :options="[
                {
                  items: [
                    { label: 'All years', value: 'all' },
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
              :options="[
                {
                  items: [
                    { label: 'All statuses', value: 'all' },
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
              :options="[
                {
                  items: [
                    { label: 'All owners', value: 'all' },
                    { label: 'You', value: 'you' },
                    { label: 'Others', value: 'other' },
                  ],
                },
              ]"
            />
            <StarFilterMultipleSelect
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
        <StarBreadcrumbNav :model="[{ label: '未完成' }]" />
        <section class="grid gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
          <a href="" class="rounded-medium border min-h-[320px] bg-default-100"></a>
          <a href="" class="rounded-medium border min-h-[320px] bg-default-100"></a>
          <a href="" class="rounded-medium border min-h-[320px] bg-default-100"></a>
          <a href="" class="rounded-medium border min-h-[320px] bg-default-100"></a>
        </section>
        <StarFooter />
      </div>
    </section>
  </StarPage>
</template>
<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import {
  StarFooter,
  StarPage,
  StarBanner,
  StarBreadcrumbNav,
  StarDivider,
  StarFilterMultipleSelect,
} from "#components";
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

watchEffect(() =>
  fetch("https://e.star.dev.hkedcity.net/jwt.php", {
    credentials: "include",
  })
    .then((r) => r.text())
    .then((r) => {
      console.log(`🚀 // DEBUG 🍔 ~ file: index.vue:25 ~ .then ~ r:`, r);
    })
);
const value1 = ref(null);
</script>
