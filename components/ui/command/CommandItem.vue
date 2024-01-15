<script setup lang="ts">
import type { ComboboxItemEmits, ComboboxItemProps } from "radix-vue";
import { ComboboxItem, useEmitAsProps } from "radix-vue";
import { cn } from "@/utils";

const props = defineProps<ComboboxItemProps>();
const emits = defineEmits<ComboboxItemEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <ComboboxItem
    v-bind="{ ...props, ...emitsAsProps }"
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-default-200 data-[highlighted]:text-default-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        $attrs.class ?? ''
      )
    "
    @select.prevent
  >
    <slot />
  </ComboboxItem>
</template>
