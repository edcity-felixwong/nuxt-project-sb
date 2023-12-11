<template>
  <HeaderTemplate :model="props.role === 'teacher' ? teacherItems : studentItems" />
</template>
<script setup lang="ts">
import HeaderTemplate from "./HeaderTemplate.vue";
// import { type Props as HeaderProps } from "./HeaderTemplate.vue";
import { ref, type Ref } from "vue";
import { useI18n } from "vue-i18n";
import { computedWithControl } from "@vueuse/core";
import { useRouter } from "vue-router";

const { t, locale } = useI18n();
const { push } = useRouter();

type Props = {
  //   /** @default teacher */
  role?: "teacher" | "student";
  //   isMobile?: boolean;
  //   pt?: MenubarPassThroughOptions;
};
// // // const { root, start } = header();
const props = withDefaults(defineProps<Props>(), {
  role: "teacher",
  //   ...header.defaultVariants,
});
// // const pt = usePassThrough(header, props);
const subjects: HeaderProps["model"] = [
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
const teacherItems: Ref<HeaderProps["model"]> = computedWithControl(locale, () => [
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
const studentItems = ref([
  {
    label: t("header.my_papers"),
    icon: "material-symbols:article-outline-rounded",
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
    items: subjects,
  },
]);
</script>
