<script setup lang="ts">
import { SelectItem, SelectItemIndicator, type SelectItemProps, SelectItemText } from "radix-vue";
import { Icon } from "#star/atom";
import { cn } from "@/utils";

const props = defineProps<SelectItemProps & { class?: string }>();
</script>

<template>
  <SelectItem
    v-bind="props"
    :class="
      cn(
        'relative flex w-full cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-default-200 focus:text-defbg-default-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class
      )
    "
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectItemIndicator>
        <Icon icon="material-symbols:done-rounded" class="h-4 w-4" />
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
