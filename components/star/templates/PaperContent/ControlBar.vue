<template>
  <div class="my-medium flex justify-between h-12 space-x-2">
    <div class="flex flex-1 space-x-2">
      <StarButton
        :label="$t('ui.createPaper')"
        icon="material-symbols:add-rounded"
        variant="ghost"
        ariaLabel="Create a new paper"
      />
      <StarSearch class="flex-1" />
    </div>
    <div class="flex justify-end space-x-2">
      <!-- <YearFilter v-model="year" /> -->
      <YearFilterV2 v-model="year" />
      <StatusFilter v-model="submission" :statuses="props.statuses" />
      <OwnerFilter v-model="user" :users="props.users" />
      <StarButton
        v-tooltip.bottom="$t('ui.refresh')"
        icon="material-symbols-light:refresh-rounded"
        variant="ghost"
        isIconOnly
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
import { StarButton } from "#star/atom/Button";
import { StarSearch } from "#star/atom/Search";
import { StarMultipleSelect } from "#star/atom/Filter";
import YearFilter from "#star/atom/Filter/YearFilter.vue";
import YearFilterV2 from "#star/atom/Filter/YearFilterV2.vue";
import OwnerFilter from "#star/atom/Filter/OwnerFilter.vue";
import StatusFilter from "#star/atom/Filter/StatusFilter.vue";
import { ref, defineModel } from "vue";
import { AcademicYear, Submission } from "@/services/models";

const year = defineModel<AcademicYear>("year", { default: "2023/24", required: true, local: true });
const submission = defineModel<Submission | "all">("submission", {
  default: "submitted",
  required: true,
  local: true,
});
const user = defineModel("user", {
  // default: "submitted",
  // required: true,
  local: true,
});
export interface StarOwnerFilterProps {
  users: any[];
  statuses: Submission[];
}
const props = withDefaults(defineProps<StarOwnerFilterProps>(), {
  users: () => [],
});
// const emit = defineEmits(["update:submission"]);
// onMounted(async () => {
//   emit("update:submission", submission.value);
// });
</script>
