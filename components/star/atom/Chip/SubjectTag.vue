<template>
  <StarChip :label="$t(`paper.packageId.${packageId}`)" size="xs" />
</template>
<script setup lang="ts">
import StarChip from "./Chip.vue";
import type { StarChipProps } from "./Chip.vue";
import { PackageId } from "@/services/models";

export type StarSubjectTagProps = {
  packageId: PackageId;
};
const props = withDefaults(defineProps<StarSubjectTagProps>(), {});
</script>
