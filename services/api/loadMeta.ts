import * as O from "fp-ts/Option";
import type { Error, LoadMetaResult } from "../models";
import { pipe } from "fp-ts/function";
import { $http } from "../axios";
import { useQuery } from "vue-query";
import type { UseQueryOptions, UseQueryReturnType } from "vue-query";
import { useJwt } from "./jwt";
import { computed } from "vue";

export function loadMetaQuery(token: string): Promise<LoadMetaResult> {
  return $http
    .post("/api.php?action=load_meta", {
      token,
    })
    .then((_) => _.data)
    .then((_) => (_.success ? Promise.resolve(_.result) : Promise.reject(_.error)));
}
export function useLoadMetaQuery<
  TOption extends UseQueryOptions<LoadMetaResult, Error, LoadMetaResult, string[]>
>(options?: TOption) {
  const { data: jwt } = useJwt();
  return useQuery(["loadMeta"], () => loadMetaQuery(jwt.value), {
    enabled: computed(() => !!jwt.value),
    ...options,
  });
}
export function useIsTeacher() {
  return useLoadMetaQuery({ select: (_) => _.aseRole.includes("Teacher") });
}
export function useIsStudent() {
  return useLoadMetaQuery({ select: (_) => _.aseRole.includes("Student") });
}
export function useSchool() {
  return useLoadMetaQuery({ select: (_) => _.school });
}
