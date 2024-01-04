<template>
  <div v-if="$props.paper.published">
    Published at {{ starDateFormat(props.paper.publishDate) }}
  </div>
  <div v-else>Not published</div>
</template>
<script setup lang="ts">
import type { Paper } from "@/services/models";
import { starDateFormat } from "@/composables";
// import {Icon} from '@/components/star'
import { Predicate } from "fp-ts/Predicate";

export type PublishDateProps = {
  paper: Paper;
};
const props = withDefaults(defineProps<PublishDateProps>(), {});
</script>
