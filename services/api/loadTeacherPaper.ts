import * as O from "fp-ts/Option";
import type { User, jwtResponse, jwtResult, Error } from "../models";
import { pipe } from "fp-ts/function";
import { $http } from "../axios";
import { useQuery } from "vue-query";
import type { UseQueryOptions, UseQueryReturnType } from "vue-query";
import { useJwt } from "./jwt";
import { useLoadMetaQuery } from "./loadMeta";
import { computed } from "vue";

export function loadTeacherPaperQuery(token: string): Promise<jwtResult> {
  return $http
    .post("/api.php?action=load_teacher_paper", {
      token,
    })
    .then((_) => _.data)
    .then((_) => (_.success ? Promise.resolve(_.result) : Promise.reject(_.error)));
}
export function useLoadTeacherPaperQuery<
  TOption extends UseQueryOptions<jwtResult, Error, jwtResult, string[]>
>(options?: TOption) {
  const { data: jwt } = useJwt();
  const { data: meta } = useLoadMetaQuery();
  return useQuery(["loadTeacherPaper"], () => loadTeacherPaperQuery(jwt.value), {
    enabled: computed(() => !!meta.value),
    ...options,
  });
}
