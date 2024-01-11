<template>
  <PMenu
    ref="menu"
    v-bind="props"
    :model="props.model ?? items"
    :pt="{
      /** `stretch` limits the menu size within the view,
       * in case the name is too long and cased overflow,
       * If it didn't work (may be browser compatibility), try fill-available,
       * Ignore the error: `Replace fill-available to stretch, because spec had been changed` */
      root: 'p-2 w-fit max-w-[stretch]',
      action: 'p-2 text-sm text-default-700',
      content: 'rounded-xs',
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
          <img :src="props.avatar" alt="user-avatar" />
        </div>
        <div class="truncate">
          <span class="text-default-800 mb-1 text-sm font-semibold">
            {{ locale === "en" ? $props.user.efullname : $props.user.cfullname }}
          </span>
          <div v-if="$props.school" class="flex gap-1">
            <Icon icon="material-symbols:kid-star-outline" class="flex-none" color="#FAB005" />
            <span class="text-xs truncate">{{
              locale === "en" ? $props.school.nameE : $props.school.nameC
            }}</span>
          </div>
        </div>
      </section>
    </template>
    <template #itemicon="{ item }">
      <div v-if="item.icon" class="mr-1">
        <Icon :icon="item.icon" width="1.25rem" />
      </div>
      <Icon v-if="item.externalLink" icon="mynaui:arrow-up-right" class="order-last w-4 h-4" />
    </template>
  </PMenu>
</template>
<script lang="ts">
import { Icon } from "#star/atom/Icon";
import { School, User } from "@/services/models";
import { computedWithControl } from "@vueuse/core";
import type { MenuProps } from "primevue/menu";
import PMenu from "primevue/menu";
import type { Ref } from "vue";
import { defineExpose, ref } from "vue";
import { useI18n } from "vue-i18n";

export type UserMenuItem = NonNullable<MenuProps["model"]>[number] & {
  externalLink?: boolean;
};

/** vue can't parse props type with "-" ... 🤡 */
export type ValidMenuProps = Omit<MenuProps, "aria-label" | "aria-labelledby" | "model">;
export type UserMenuProps = ValidMenuProps & {
  user: User;
  school?: School;
  model?: UserMenuItem[];
  avatar: string;
};
</script>
<script setup lang="ts">
const { t, locale } = useI18n();

const menu = ref();
defineExpose({
  menu,
});

const items: Ref<UserMenuItem[]> = computedWithControl(
  locale,
  () =>
    [
      {
        label: t("ui.identityBar.settings"),
        icon: "material-symbols:settings-outline-rounded",
        externalLink: true,
        command: () => window.open("https://www.dev.hkedcity.net/citizen/profile/", "_blank"),
      },
      { separator: true },
      {
        label: t("ui.identityBar.signOut"),
        icon: "material-symbols:logout",
        command: () => window.open("https://e.star.dev.hkedcity.net/logout.php", "_blank"),
      },
    ] satisfies UserMenuItem[]
);
const props = withDefaults(defineProps<UserMenuProps>(), {
  popup: true,
  // model: () => items,
  // avatar: (_) =>
  //   `https://www.dev.hkedcity.net/citizen/profile/profile_picture.php?size=80&user_id=${_.user?.userId}`,
});
</script>
