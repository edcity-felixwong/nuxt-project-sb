<template>
  <div v-if="status === 'loading' || status === 'idle'">not ready</div>
  <div v-if="status === 'error'">error</div>
  <Component :is="role?.isTeacher ? TeacherMyPapers : StudentMyPapers" v-else />
</template>
<script setup lang="ts">
import { StudentMyPapers, TeacherMyPapers } from "#star/pages";
import { useRoleQuery } from "@/services";

const { data: role, status } = useRoleQuery();
// TODO role provider
</script>
