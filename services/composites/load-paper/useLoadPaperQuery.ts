import { computed } from "vue";
import type { UseQueryReturnType, UseQueryOptions } from "vue-query";
import { useQueries, useQuery } from "vue-query";
import { useJwt, useRole } from "@/services/api";
// import { useRole } from "../api/load-meta";
import { loadStudentPaperQuery } from "@/services/api/load-student-paper";
import { loadTeacherPaperQuery } from "@/services/api/load-teacher-paper";
import { Paper } from "@/services/models";
import { toRef, reactiveComputed } from "@vueuse/core";

export function useLoadPaperQuery<
  TOption extends UseQueryOptions<Paper[], Error, Paper[], string[]>
>(options?: TOption): UseQueryReturnType<Paper[], Error> {
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
      ...options,
    }
  );
}
