<script setup lang="ts">
import { DropdownMenuSubTrigger, type DropdownMenuSubTriggerProps } from "radix-vue";
import { ChevronRight } from "lucide-vue-next";
import { cn } from "@/utils";

const props = defineProps<DropdownMenuSubTriggerProps & { class?: string }>();
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="props"
    :class="[
      cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-default-200 data-[state=open]:bg-default-200 focus:text-default-foreground data-[state=open]:text-default-foreground',
        props.class
      ),
    ]"
  >
    <slot />
    <ChevronRight class="ml-auto h-4 w-4" />
  </DropdownMenuSubTrigger>
</template>
