<template>
  <div>Published at {{ props.paper.publishDate }}</div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { Paper } from "@/services/models";
import { starDateFormat } from "@/composables";
</script>
