<template>
  <div v-if="status === 'loading' || status === 'idle'">not ready</div>
  <div v-if="status === 'error'">error</div>
  <Component :is="role?.isTeacher ? TeacherMyPapers : StudentMyPapers" v-else />
</template>
<script setup lang="ts">
import { TeacherMyPapers, StudentMyPapers } from "#star/pages";
import { useJwt, useRole } from "@/services";

const { data: role, status } = useRole();
</script>
