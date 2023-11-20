<template>
  <StarPage>
    <div>test</div>
    <section class="flex flex-row">
      <StarSideNav />
      <div>
        <div>pos: {{ x }}, {{ y }}</div>
        <div>size: {{ width }}, {{ height }}</div>
        <PButton
          label="qweqwe"
          :pt="{
            root: { class: 'focus:active:scale-95 duration-300 ease-in-out' },
          }"
        >
          <template #icon>
            <Icon icon="material-symbols:settings-power-rounded" width="24" />
          </template>
        </PButton>
        <StarSideNavItem />

        <div class="text-primary-700/20">qweqweqwe</div>
        <StarMenuItem>qweqwe</StarMenuItem>
        <StarMenuItemSideNavItem />
        <PMenu :model="menuItems" :pt="{ menu: 'p-14', action: 'py-2.5 px-2' }"></PMenu>
        <div class="card justify-content-center flex">
          <POverlayPanel ref="op">
            <img
              src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg"
              alt="Bamboo Watch"
            />
          </POverlayPanel>
        </div>
        <div class="card justify-content-center flex flex-wrap gap-2">
          <PButton v-tooltip="'Enter your username'" />
          <PButton v-tooltip.top="'Enter your username'" />
          <PButton v-tooltip.bottom="'Enter your username'" />
          <PButton v-tooltip.left="'Enter your username'" />
        </div>
        <PMenubar :model="items"></PMenubar>
        <PToast />
        <PMenubar :model="items2" />
        <StarTest />
        <div class="h-[3000px]" />
      </div>
    </section>
  </StarPage>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
// import PCalendar from "primevue/calendar";
import StarTest from "@/components/star/organisms/Test.vue";

import {
  StarPage,
  StarSideNav,
  StarSideNavItem,
  StarMenuItem,
  StarMenuItemSideNavItem,
} from "#components";

const op = ref();

const toggle = (event) => {
  op.value.toggle(event);
};

const menuItems = ref([
  { label: "New", icon: "pi pi-plus" },
  { label: "Search", icon: "pi pi-search" },
]);

const { x, y } = useMouse();
const { width, height } = useWindowSize();

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
  },
  {
    label: "Features",
    icon: "pi pi-star",
  },
  {
    label: "Projects",
    icon: "pi pi-search",
    items: [
      {
        label: "Core",
        icon: "pi pi-bolt",
        shortcut: "⌘+S",
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
        shortcut: "⌘+B",
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
        shortcut: "⌘+U",
      },
      {
        separator: true,
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
        items: [
          {
            label: "Apollo",
            icon: "pi pi-palette",
            badge: 2,
          },
          {
            label: "Ultima",
            icon: "pi pi-palette",
            badge: 3,
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
    badge: 3,
  },
]);

const toast = useToast();

const items2 = ref([
  {
    label: "File",
    icon: "pi pi-file",
    items: [
      {
        label: "New",
        icon: "pi pi-plus",
        command: () => {
          toast.add({
            severity: "success",
            summary: "Success",
            detail: "File created",
            life: 3000,
          });
        },
      },
      {
        label: "Print",
        icon: "pi pi-print",
        command: () => {
          toast.add({
            severity: "error",
            summary: "Error",
            detail: "No printer connected",
            life: 3000,
          });
        },
      },
    ],
  },
  {
    label: "Search",
    icon: "pi pi-search",
    command: () => {
      toast.add({
        severity: "warn",
        summary: "Search Results",
        detail: "No results found",
        life: 3000,
      });
    },
  },
  {
    separator: true,
  },
  {
    label: "Sync",
    icon: "pi pi-cloud",
    items: [
      {
        label: "Import",
        icon: "pi pi-cloud-download",
        command: () => {
          toast.add({
            severity: "info",
            summary: "Downloads",
            detail: "Downloaded from cloud",
            life: 3000,
          });
        },
      },
      {
        label: "Export",
        icon: "pi pi-cloud-upload",
        command: () => {
          toast.add({
            severity: "info",
            summary: "Shared",
            detail: "Exported to cloud",
            life: 3000,
          });
        },
      },
    ],
  },
]);
</script>
