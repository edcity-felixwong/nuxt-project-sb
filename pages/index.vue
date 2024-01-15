<template>
  <div v-if="status === 'loading' || status === 'idle'">not ready</div>
  <div v-if="status === 'error'">error</div>
  <Component :is="role?.isTeacher ? TeacherMyPapers : StudentMyPapers" v-else />
</template>
<script setup lang="ts">
import { TeacherMyPapers, StudentMyPapers } from "#star/pages";
import { useJwt, useRole } from "@/services";
import { type InjectionKey, provide, reactive } from "vue";

const { data: role, status } = useRole();
const roleKey = Symbol("role") as InjectionKey<typeof role>;
provide(roleKey, reactive(role));
</script>
