<template>
  <CardMoreButton @click="() => (open = !open)" />
  <DropdownMenu v-model:open="open">
    <DropdownMenuTrigger />
    <DropdownMenuContent align="end" class="w-[200px]">
      <DropdownMenuLabel>{{ $t("ui.action") }}</DropdownMenuLabel>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Icon icon="material-symbols:user-attributes-outline-rounded" class="mr-2 h-4 w-4" />
          {{ $t("paper.action.edit") }}
          <DropdownMenuShortcut>
            <Icon icon="material-symbols:arrow-outward-rounded" class="w-4 h-4" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="material-symbols:calendar-add-on" class="w-4 h-4 mr-2" />
          {{ $t("paper.action.preview") }}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="material-symbols:calendar-add-on" class="w-4 h-4 mr-2" />
          {{ $t("paper.action.publish") }}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="material-symbols:calendar-add-on" class="w-4 h-4 mr-2" />
          {{ $t("paper.action.recall") }}
        </DropdownMenuItem>
        <!-- <DropdownMenuItem>
          <Icon icon="material-symbols:calendar-add-on" class="mr-2" />
          刪除
        </DropdownMenuItem> -->
        <DropdownMenuItem>
          <Icon icon="material-symbols:calendar-add-on" class="w-4 h-4 mr-2" />
          {{ $t("paper.action.report") }}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon icon="material-symbols:calendar-add-on" class="w-4 h-4 mr-2" />
          {{ $t("paper.action.sharePaper") }}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="material-symbols:calendar-add-on" class="w-4 h-4 mr-2" />
          {{ $t("paper.action.shareReport") }}
        </DropdownMenuItem>
        <!-- <DropdownMenuSeparator /> -->
        <!-- <DropdownMenuItem>
          <Icon icon="material-symbols:calendar-add-on" class="mr-2" />
          分享連結
        </DropdownMenuItem> -->
        <!-- <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Icon icon="material-symbols:calendar-add-on" class="mr-2 h-4 w-4" />
            派發
          </DropdownMenuSubTrigger>
        </DropdownMenuSub> -->
        <!-- <DropdownMenuSeparator /> -->
        <!-- <DropdownMenuItem class="text-red-600">
          <Icon icon="material-symbols:delete-outline-rounded" class="mr-2 h-4 w-4" />
          刪除
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem> -->
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
