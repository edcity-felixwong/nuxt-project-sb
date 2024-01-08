import * as O from "fp-ts/Option";
import { StudentPaper, Error, academicYearZ, packageIdZ, studentPaperTypeZ } from "../models";
import { pipe } from "fp-ts/function";
import { $http } from "../axios";
import { useQuery } from "vue-query";
import type { UseQueryOptions, UseQueryReturnType } from "vue-query";
import { useJwt } from "./jwt";
import { useLoadMetaQuery } from "./load-meta";
import { computed } from "vue";
import { z } from "zod";

const loadStudentPaperParams = z.object({
  id: z.number().array().optional(),
  packageId: packageIdZ.array().optional(),
  acayear: academicYearZ.array().optional(),
  type: studentPaperTypeZ.default("teacher"),
});
export type LoadStudentPaperParams = z.infer<typeof loadStudentPaperParams>;
export function loadStudentPaperQuery({
  token,
  para = {},
}: {
  token: string;
  para?: LoadStudentPaperParams;
}): Promise<StudentPaper> {
  return $http
    .post("/api.php?action=load_student_paper", {
      token,
      para: loadStudentPaperParams.parse(para),
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
