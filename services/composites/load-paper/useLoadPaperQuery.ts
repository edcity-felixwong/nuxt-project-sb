import { computed } from "vue";
import type { UseQueryReturnType, UseQueryOptions } from "vue-query";
import { useQueries, useQuery } from "vue-query";
import { useJwt, useRole } from "@/services/api";
// import { useRole } from "../api/load-meta";
import { loadStudentPaperQuery } from "@/services/api/load-student-paper";
import { loadTeacherPaperQuery, LoadTeacherPaperParams } from "@/services/api/load-teacher-paper";
import { Paper } from "@/services/models";
import { toRef, reactiveComputed } from "@vueuse/core";

export function useLoadPaperQuery<
  TOption extends UseQueryOptions<Paper[], Error, Paper[], string[]>
>(
  para?: LoadTeacherPaperParams = {},
  options?: TOption = undefined
): UseQueryReturnType<Paper[], Error> {
  const { data: role } = useRole();
  const { data: token } = useJwt();
  console.log(`🚀 // DEBUG 🍔 ~ para:`, para);
  return useQuery(
    [role.value?.isTeacher ? "loadTeacherPaper" : "loadStudentPaper", para],
    () =>
      (role.value?.isTeacher ? loadTeacherPaperQuery : loadStudentPaperQuery)({
        token: token.value,
        para: para.value,
      }),
    {
      enabled: computed(() => !!role.value && !!token.value),
      ...options,
    }
  );
}
