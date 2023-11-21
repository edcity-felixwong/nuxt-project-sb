<template>
  <PMenubar :model="props.role === 'teacher' ? teacherItems : studentItems" :pt="{ root: root() }">
    <!-- <template #item="{ item, label, hasSubmenu }">
      <div>{{ item.label }}{{ hasSubmenu }}</div>
    </template> -->
    <template #itemicon="{ item, class: className }">
      <div v-if="item.icon">
        <Icon :icon="item.icon" width="24" :class="[className, 'mr-2']" />
      </div>
    </template>
  </PMenubar>
</template>
<script setup lang="ts">
import { header } from "./header-tv";
import { Icon } from "@iconify/vue";
import PMenubar from "primevue/menubar";
import { ref } from "vue";

type Props = {
  role: "teacher" | "student";
};
const { root } = header();
const props = withDefaults(defineProps<Props>(), {
  role: "teacher",
});

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
