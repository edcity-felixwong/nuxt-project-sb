<template>
  <StarChip :label="$t(`paper.packageId.${packageId}`)" size="xs" />
</template>
<script setup lang="ts">
import StarChip from "./Chip.vue";
import type { StarChipProps } from "./Chip.vue";

export type StarSharedItemTagProps = {};
</script>
