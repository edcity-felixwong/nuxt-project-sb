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
import HeaderTemplate from "./HeaderTemplate.vue";
import { header } from "./header-tv";
import { Icon } from "@iconify/vue";
import PMenubar, { type MenubarPassThroughOptions } from "primevue/menubar";
import { ref, reactive } from "vue";
import logo from "@/assets/logo.png";

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
const subjects = [
  {
    label: "中文",
    // icon: "pi pi-bolt",
    // shortcut: "⌘+S",
  },
  {
    label: "English",
  },
  {
    label: "數學",
  },
  {
    label: "Mathematics",
  },
];
const teacherItems = ref([
  {
    label: "My Paper",
    icon: "material-symbols:article-outline-rounded",
    items: subjects,
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
    label: "Projects",
    icon: "material-symbols:timeline",
    items: subjects,
  },
]);
const studentItems = ref([
  {
    label: "My Paper",
    icon: "material-symbols:article-outline-rounded",
    items: subjects,
  },
  {
    label: "Features",
    icon: "material-symbols:play-shapes-outline-rounded",
    items: subjects,
  },
  {
    label: "Projects",
    icon: "material-symbols:timeline",
    items: subjects,
  },
]);
</script>
