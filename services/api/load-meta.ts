import * as O from "fp-ts/Option";
import type { Error, Meta } from "../models";
import { pipe } from "fp-ts/function";
import { $http } from "../axios";
import { useQuery, useQueryClient } from "vue-query";
import type { UseQueryOptions, UseQueryReturnType } from "vue-query";
import { useJwt } from "./jwt";
import { computed } from "vue";
import { computedWithControl, toRefs } from "@vueuse/core";
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
export function useIsTeacher(): UseQueryReturnType<boolean, Error> {
  return useLoadMetaQuery({ select: (_) => _.aseRole.includes("Teacher") });
}
export function useIsStudent(): UseQueryReturnType<boolean, Error> {
  return useLoadMetaQuery({ select: (_) => _.aseRole.includes("Student") });
}
export function useSchool(): UseQueryReturnType<Meta["school"], Error> {
  return useLoadMetaQuery({ select: (_) => _.school });
}
type Role = Ref<
  | {
      isTeacher: boolean;
      isStudent: boolean;
      isOther: boolean;
      role: "teacher" | "student" | "other";
    }
  | undefined
>;
/** Tell if the user is a teacher, a student, or other */
export function useRole(): UseQueryReturnType<Role, Error> {
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
    select: (meta) => {
      return meta.notice;
    },
  });
}
