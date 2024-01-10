<template>
  <CardMoreButton @click="() => (open = !open)" />
  <DropdownMenu v-model:open="open">
    <DropdownMenuTrigger />
    <DropdownMenuContent align="end" class="w-[200px]">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Icon icon="material-symbols:user-attributes-outline-rounded" class="mr-2 h-4 w-4" />
          Assign to...
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="material-symbols:calendar-add-on" class="mr-2 h-4 w-4" />
          Set due date...
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Icon icon="material-symbols:calendar-add-on" class="mr-2 h-4 w-4" />
            Apply label
          </DropdownMenuSubTrigger>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="text-red-600">
          <Icon icon="material-symbols:delete-outline-rounded" class="mr-2 h-4 w-4" />
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui";
import { ref } from "vue";

import { StarButton } from "#star/atom/Button";
import { Icon } from "#star/atom/Icon";

import CardMoreButton from "./CardMoreButton.vue";

// const labels = [
//   "feature",
//   "bug",
//   "enhancement",
//   "documentation",
//   "design",
//   "question",
//   "maintenance",
// ];

// const labelRef = ref("feature");
const open = ref(false);
</script>
