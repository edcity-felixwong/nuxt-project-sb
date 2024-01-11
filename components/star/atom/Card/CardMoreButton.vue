<template>
  <StarButton
    icon="material-symbols:more-horiz"
    size="sm"
    variant="light"
    radius="full"
    :isIconOnly="true"
    class="text-text-300"
    v-tooltip.bottom="$t('ui.action')"
  />
</template>
<script setup lang="ts">
import { StarButton } from "@/components/star/atom/Button";
</script>
