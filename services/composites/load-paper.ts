import { computed } from "vue";
import type { UseQueryReturnType } from "vue-query";
import { useQueries, useQuery } from "vue-query";
import { useJwt } from "../api";
import { useRole } from "../api/load-meta";
import { loadStudentPaperQuery } from "../api/load-student-paper";
import { loadTeacherPaperQuery } from "../api/load-teacher-paper";
import { Paper } from "../models";
import { toRef, reactiveComputed } from "@vueuse/core";

export function useLoadPaperQuery(): UseQueryReturnType<Paper[], Error> {
  const { data: role } = useRole();
  const { data: token } = useJwt();
  return useQuery(
    ["loadPaper"],
    () =>
      role.value?.isTeacher
        ? loadTeacherPaperQuery({ token: token.value })
        : loadStudentPaperQuery({ token: token.value }),
    {
      enabled: computed(() => !!role.value && !!token.value),
    }
  );
}
