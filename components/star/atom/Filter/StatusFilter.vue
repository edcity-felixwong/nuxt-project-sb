<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icon } from "#star/atom/Icon";
import { Submission } from "@/services/models";

type StarStatusFilterProps = {
  statuses: { label: Submission; value: Submission }[];
};
const props = defineProps<StarStatusFilterProps>();
</script>

<template>
  <Select>
    <SelectTrigger class="w-[128px] h-full space-x-1">
      <template #iconLeft>
        <Icon icon="material-symbols-light:vital-signs-rounded" class="w-5 h-5 shrink-0" />
      </template>
      <SelectValue placeholder="View by status" class="truncate" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{{ $t("paper.status.fieldName") }}</SelectLabel>
        <!-- <SelectItem value="all"> {{ $t("paper.status.all") }} </SelectItem>
        <SelectItem value="pending"> {{ $t("paper.status.pending") }} </SelectItem>
        <SelectItem value="ready"> {{ $t("paper.status.ready") }} </SelectItem>
        <SelectItem value="not_attempted"> {{ $t("paper.status.notAttempted") }}</SelectItem>
        <SelectItem value="attempted"> {{ $t("paper.status.attempted") }}</SelectItem>
        <SelectItem value="finished"> {{ $t("paper.status.finished") }}</SelectItem> -->
        <template v-for="status in props.statuses" :key="status.value">
          <SelectItem :value="status.value"> {{ status.label }}</SelectItem>
        </template>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
