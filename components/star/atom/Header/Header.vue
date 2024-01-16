<template>
  <HeaderTemplate :model="props.role === 'teacher' ? teacherItems : studentItems" />
</template>
<script setup lang="ts">
import { computedWithControl } from "@vueuse/core";
import { type Ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

import type { StarHeaderProps } from "./HeaderTemplate.vue";
import HeaderTemplate from "./HeaderTemplate.vue";

const { t, locale } = useI18n();
const { push } = useRouter();

type Props = {
  role?: "teacher" | "student";
  isLoading?: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  role: "teacher",
  isLoading: false,
});

const subjects: StarHeaderProps["model"] = [
  {
    label: "中文",
    command: () => push("/?subject=chinese"),
  },
  {
    label: "English",
    command: () => push("/?subject=english"),
  },
  {
    label: "數學",
    command: () => push("/?subject=cmath"),
  },
  {
    label: "Mathematics",
    command: () => push("/?subject=emath"),
  },
];
const teacherItems: Ref<StarHeaderProps["model"]> = computed(() => [
  {
    label: t("header.my_papers"),
    icon: "material-symbols:article-outline-rounded",
    items: [
      {
        label: "中文",
        command: () => push("/?subject=chinese"),
      },
      {
        label: "English",
        command: () => push("/?subject=english"),
      },
      {
        label: "數學",
        command: () => push("/?subject=cmath"),
      },
      {
        label: "Mathematics",
        command: () => push("/?subject=emath"),
      },
    ],
  },
  {
    label: t("header.presest_papers"),
    icon: "material-symbols:book-4-outline-rounded",
    items: subjects,
  },
  {
    label: t("header.students_corner"),
    icon: "material-symbols:play-shapes-outline-rounded",
    items: subjects,
  },
  {
    label: t("header.report"),
    icon: "material-symbols:timeline",
    items: [
      {
        label: "中文",
        command: () => push("/report?subject=chinese"),
      },
      {
        label: "English",
        command: () => push("/report?subject=english"),
      },
      {
        label: "數學",
        command: () => push("/report?subject=cmath"),
      },
      {
        label: "Mathematics",
        command: () => push("/report?subject=emath"),
      },
    ],
  },
]);
const studentItems: Ref<StarHeaderProps["model"]> = computed(() => [
  {
    label: t("header.my_papers"),
    icon: "material-symbols:article-outline-rounded",
    // items: subjects,
  },
  {
    label: t("header.students_corner"),
    icon: "material-symbols:play-shapes-outline-rounded",
    items: [
      {
        label: "中文",
        command: () => push("/?subject=chinese"),
      },
      {
        label: "English",
        command: () => push("/?subject=english"),
      },
      {
        label: "數學",
        command: () => push("/?subject=cmath"),
      },
      {
        label: "Mathematics",
        command: () => push("/?subject=emath"),
      },
    ],
  },
  {
    label: t("header.report"),
    icon: "material-symbols:timeline",
    // items: subjects,
  },
]);
</script>
