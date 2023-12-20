<template>
  <PMenu
    ref="menu"
    v-bind="props"
    :pt="{
      root: 'p-2 w-fit max-w-[-moz-available] max-w-[-webkit-fill-available] max-w-[fill-available]',
      action: 'p-2 text-sm text-default-700',
      content: 'rounded-small',
      label: 'text-sm leading-5',
      separator: 'my-2',
    }"
  >
    <template #start>
      <section
        class="text-default-700 bg-default-50 rounded-medium flex items-center gap-2 p-2 pr-4 mb-2"
      >
        <div
          class="border-[6px] w-20 h-20 flex-none bg-default-100 overflow-hidden border border-white rounded-full"
        >
          <img :src="props.user.avatar" alt="user-avatar" />
        </div>
        <div class="truncate">
          <span class="text-default-800 mb-1 text-sm font-semibold">
            {{ $props.user.fullname }}
          </span>
          <div class="flex gap-1">
            <Icon icon="material-symbols:kid-star-outline" class="flex-none" color="#FAB005" />
            <span class="text-xs truncate">{{ $props.user.schoolName }}</span>
          </div>
        </div>
      </section>
    </template>
    <template #itemicon="{ item }">
      <div v-if="item.icon" class="mr-1">
        <Icon :icon="item.icon" width="1.25rem" />
      </div>
      <Icon
        v-if="item.externalLink"
        icon="mynaui:arrow-up-right"
        width="1.25rem"
        class="order-last"
      />
    </template>
  </PMenu>
</template>
<script lang="ts">
import PMenu from "primevue/menu";
import type { MenuProps } from "primevue/menu";
import { defineExpose, ref } from "vue";
import { Icon } from "@iconify/vue";

export type User = {
  fullname: string;
  schoolName: string;
  avatar: string;
  email?: string;
  cityId?: string;
};
export type UserMenuItem = NonNullable<MenuProps["model"]>[number] & {
  externalLink?: boolean;
};

/** vue can't parse props type with "-" ... 🤡 */
export type ValidMenuProps = Omit<MenuProps, "aria-label" | "aria-labelledby" | "model">;
export type Props = ValidMenuProps & {
  user: User;
  model: UserMenuItem[];
};
const items: UserMenuItem[] = [
  {
    label: "Settings",
    icon: "material-symbols:settings-outline-rounded",
    externalLink: true,
  },
  { separator: true },
  {
    label: "Sign out",
    icon: "material-symbols:logout",
  },
];
</script>
<script setup lang="ts">
const menu = ref();
defineExpose({
  menu,
});

const props = withDefaults(defineProps<Props>(), {
  popup: true,
  model: () => items,
});
</script>
