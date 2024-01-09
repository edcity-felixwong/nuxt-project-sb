<template>
  <div></div>
</template>

<script setup lang="ts">
import { Paper } from "@/services/models";
import type { CardButtonProps } from "./CardButton.vue";

export type StarCardActionBarProps = {
  allowList?: string[];
  blockList?: string[];
};
const props = withDefaults(defineProps<StarCardActionBarProps>(), {});
</script>
