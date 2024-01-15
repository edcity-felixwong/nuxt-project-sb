<script setup lang="ts">
import { SelectIcon, SelectTrigger, type SelectTriggerProps } from "radix-vue";
import { Icon } from "#star/atom";
// import { ChevronDown } from "lucide-vue-next";
import { cn } from "@/utils";

const props = withDefaults(
  defineProps<SelectTriggerProps & { class?: string; invalid?: boolean }>(),
  {
    class: "",
    invalid: false,
  }
);
</script>

<template>
  <SelectTrigger
    v-bind="props"
    :class="[
      cn(
        'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      ),
      props.invalid ? '!ring-destructive ring-2 placeholder:!text-destructive' : '',
    ]"
  >
    <SelectIcon v-if="$slots.iconLeft" as-child>
      <slot name="iconLeft" />
    </SelectIcon>
    <slot />
    <SelectIcon as-child>
      <slot name="iconRight">
        <!-- <ChevronDown class="w-4 h-4 opacity-50" /> -->
        <!-- <Icon icon="material-symbols:unfold-more-rounded" /> -->
        <Icon icon="material-symbols:expand-more-rounded" />
      </slot>
    </SelectIcon>
  </SelectTrigger>
</template>
