import * as O from "fp-ts/Option";
import type { StudentPaper, Error } from "../models";
import { pipe } from "fp-ts/function";
import { $http } from "../axios";
import { useQuery } from "vue-query";
import type { UseQueryOptions, UseQueryReturnType } from "vue-query";
import { useJwt } from "./jwt";
import { useLoadMetaQuery } from "./load-meta";
import { computed } from "vue";

export function loadStudentPaperQuery({ token }: { token: string }): Promise<StudentPaper> {
  return $http
    .post("/api.php?action=load_student_paper", {
      token,
    })
    .then((_) => _.data)
    .then((_) => (_.success ? Promise.resolve(_.result) : Promise.reject(_.error)));
}
export function useLoadStudentPaperQuery<
  TOption extends UseQueryOptions<StudentPaper, Error, StudentPaper, string[]>
>(options?: TOption) {
  const { data: token } = useJwt();
  const { data: meta } = useLoadMetaQuery();
  return useQuery(["loadStudentPaper"], () => loadStudentPaperQuery({ token: token.value }), {
    enabled: computed(() => !!meta.value),
    ...options,
  });
}
