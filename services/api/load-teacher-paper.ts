import * as O from "fp-ts/Option";
import { academicYearZ, packageIdZ, typeZ } from "../models";
import type { TeacherPaper, Error } from "../models";
import { pipe } from "fp-ts/function";
import { $http } from "../axios";
import { useQuery } from "vue-query";
import type { UseQueryOptions, UseQueryReturnType } from "vue-query";
import { useJwt } from "./jwt";
import { useLoadMetaQuery } from "./load-meta";
import { computed } from "vue";
import { z } from "zod";

const loadTeacherPaperParams = z
  .object({
    id: z.number().array().optional(),
    packageId: packageIdZ.array().optional(),
    acayear: academicYearZ.array().optional(),
    type: typeZ.default("my"),
  })
  .optional();
export type LoadTeacherPaperParams = z.infer<typeof loadTeacherPaperParams>;

export function loadTeacherPaperQuery({
  token,
  para = {},
}: {
  token: string;
  para?: LoadTeacherPaperParams;
}): Promise<TeacherPaper> {
  return $http
    .post("/api.php?action=load_teacher_paper", {
      token,
      para: loadTeacherPaperParams.parse(para),
    })
    .then((_) => _.data)
    .then((_) =>
      _.success ? Promise.resolve(_.result) : Promise.reject(_.error)
    ) as unknown as Promise<TeacherPaper>;
}
export function useLoadTeacherPaperQuery<
  TOption extends UseQueryOptions<TeacherPaper, Error, TeacherPaper, string[]>
>(options?: TOption) {
  const { data: token } = useJwt();
  const { data: meta } = useLoadMetaQuery();
  return useQuery(["loadTeacherPaper"], () => loadTeacherPaperQuery({ token: token.value }), {
    enabled: computed(() => !!meta.value && !!token.value),
    ...options,
  });
}
type LoadTeacherFetch = (args: { token: string }) => Promise<TeacherPaper>;
export const loadTeacherPaperMyQuery: LoadTeacherFetch = ({ token }) => {
  return loadTeacherPaperQuery({ token, para: { type: "my" } });
};
export const loadTeacherPaperTeacherPresetQuery: LoadTeacherFetch = ({ token }) => {
  return loadTeacherPaperQuery({ token, para: { type: "teacher_preset" } });
};
export const loadTeacherPaperStudentPresetQuery: LoadTeacherFetch = ({ token }) => {
  return loadTeacherPaperQuery({ token, para: { type: "student_preset" } });
};
