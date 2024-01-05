<template>
  <PBreadcrumb :model="props.model" :pt="{ root: 'my-5 p-0 text-sm border-0' }">
    <template #item="{ item, props: p }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a :href="href" v-bind="p.action" @click="navigate">
          <span :class="[item.icon, 'text-color']" />
          <span class="text-primary font-semibold">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="p.action">
        <span class="text-color">{{ item.label }}</span>
      </a>
    </template>
    <template #separator> / </template>
  </PBreadcrumb>
</template>
<script setup lang="ts">
import { ref } from "vue";
import PBreadcrumb, { type BreadcrumbProps } from "primevue/breadcrumb";

export type Props = BreadcrumbProps;
const props = withDefaults(defineProps<Props>(), {});
const items = ref([
  { label: "Components" },
  { label: "Form" },
  // { label: "InputText", route: "/inputtext" },
]);
</script>
