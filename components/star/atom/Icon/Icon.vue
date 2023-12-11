<template>
  <Icon v-bind="props" />
</template>
<script setup lang="ts">
import { Icon, type IconProps } from "@iconify/vue";

// type MyComponentProps = Omit<InstanceType<typeof Icon>, `$${string}`>
export type Props = IconProps;
const props = withDefaults(defineProps<Props>(), {});
</script>
