import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/function";
import { computed } from "vue";
import type { UseQueryOptions, UseQueryReturnType } from "vue-query";
import { useQuery } from "vue-query";

import { $http } from "../axios";
import type { Error, Meta } from "../models";
import { useJwt } from "./jwt";

type FetchParams = {
  meta: any;
  pageParam: any;
  queryKey: any[];
};
export function loadMetaQuery({ token }: { token: string }): Promise<Meta> {
  return $http
    .post("/api.php?action=load_meta", {
      token,
    })
    .then((_) => _.data)
    .then((_) => (_.success ? Promise.resolve(_.result) : Promise.reject(_.error)));
}
export function useLoadMetaQuery<TOption extends UseQueryOptions<Meta, Error, Meta, string[]>>(
  options?: TOption
) {
  const { data: token } = useJwt();
  return useQuery(["loadMeta"], () => loadMetaQuery({ token: token.value }), {
    enabled: computed(() => !!token.value),
    ...options,
  });
}
export function useSchool(): UseQueryReturnType<Meta["school"], Error> {
  return useLoadMetaQuery({ select: (_) => _.school });
}
/**
 * `load_meta`'s `role` selector, this attempt to fetch `load_meta`.
 * suitable for initialization or place that need latest update on role,
 * like sign out.
 *
 */
export function useRoleQuery(): UseQueryReturnType<Role, Error> {
  return useLoadMetaQuery({
    select: (meta) => {
      return pipe(
        O.fromNullable(meta),
        O.bind("isTeacher", (_) => O.some(_.aseRole.includes("Teacher"))),
        O.bind("isStudent", (_) => O.some(_.aseRole.includes("Student"))),
        O.bind("isOther", ({ isTeacher, isStudent }) => O.some(!isTeacher && !isStudent)),
        O.bind("role", ({ isTeacher, isStudent }) =>
          O.some(isTeacher ? "teacher" : isStudent ? "student" : "other")
        ),
        O.map(({ isTeacher, isStudent, isOther, role }) => ({
          isTeacher,
          isStudent,
          isOther,
          role,
        })),
        O.getOrElse(() => undefined)
      );
    },
  });
}

export function useNoticeQuery(): UseQueryReturnType<Meta["notice"], Error> {
  return useLoadMetaQuery({
    select: (_) => _.notice,
  });
}
