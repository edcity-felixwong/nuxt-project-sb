<template>
  <!-- <PMenubar :model="props.role === 'teacher' ? teacherItems : studentItems" :pt="pt">
    <template #start>
      <img :src="logo" alt="" />
    </template>
    <template #itemicon="{ item, class: className }">
      <div v-if="item.icon">
        <Icon :icon="item.icon" width="24" :class="[className, 'mr-2']" />
      </div>
    </template>
  </PMenubar> -->
  <HeaderTemplate :model="props.role === 'teacher' ? teacherItems : studentItems" />
</template>
<script setup lang="ts">
import HeaderTemplate, { type Props as HeaderProps } from "./HeaderTemplate.vue";
import { header } from "./header-tv";
import { Icon } from "@iconify/vue";
import PMenubar, { type MenubarPassThroughOptions } from "primevue/menubar";
import { ref, reactive } from "vue";
import logo from "@/assets/logo.png";

const { push } = useRouter();

type Props = {
  //   /** @default teacher */
  role?: "teacher" | "student";
  //   isMobile?: boolean;
  //   pt?: MenubarPassThroughOptions;
};
// // const { root, start } = header();
const props = withDefaults(defineProps<Props>(), {
  role: "teacher",
  //   ...header.defaultVariants,
});
// const pt = usePassThrough(header, props);
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
const teacherItems: Ref<HeaderProps["model"]> = ref<HeaderProps["model"]>([
  {
    label: "My Papers",
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
    label: "Preset Papers",
    icon: "material-symbols:book-4-outline-rounded",
    items: subjects,
  },
  {
    label: "Student's Corner",
    icon: "material-symbols:play-shapes-outline-rounded",
    items: subjects,
  },
  {
    label: "Report",
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
    label: "My Papers",
    icon: "material-symbols:article-outline-rounded",
    items: subjects,
  },
  {
    label: "Features",
    icon: "material-symbols:play-shapes-outline-rounded",
    items: subjects,
  },
  {
    label: "Report",
    icon: "material-symbols:timeline",
    items: subjects,
  },
]);
</script>
