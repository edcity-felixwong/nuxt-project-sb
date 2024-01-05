<template>
  <div class="my-medium flex justify-between h-12 space-x-2">
    <div class="flex flex-1 space-x-2">
      <StarButton
        label="New"
        icon="material-symbols:add-rounded"
        variant="ghost"
        ariaLabel="Create a new paper"
      />
      <StarSearch class="flex-1" />
    </div>
    <div class="flex justify-end space-x-1">
      <StarMultipleSelect
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
      <StarMultipleSelect
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
      <StarMultipleSelect
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
      <StarMultipleSelect
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
</template>
<script setup lang="ts">
import { StarButton } from "@/components/star/atom/Button";
import { StarSearch } from "@/components/star/atom/Search";
import { StarMultipleSelect } from "@/components/star/atom/Filter";
</script>
