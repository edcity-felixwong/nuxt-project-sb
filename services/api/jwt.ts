import * as O from "fp-ts/Option";
import type { User, jwtResponse, jwtResult, Error } from "../models";
import { pipe } from "fp-ts/function";
import { $http } from "../axios";
import { useQuery } from "vue-query";
import type { UseQueryOptions, UseQueryReturnType } from "vue-query";

export function jwtQuery(): Promise<jwtResult> {
  return $http
    .get("/jwt.php")
    .then((_) => _.data)
    .then((_) => (_.success ? Promise.resolve(_.result) : Promise.reject(_.error)));
}
export function useJwtQuery<TOption extends UseQueryOptions<jwtResult, Error, jwtResult, string[]>>(
  options?: TOption
) {
  return useQuery(["jwt"], jwtQuery, options);
}
export function isTeacher(user: User): boolean {
  return pipe(
    user?.roles,
    O.fromNullable,
    O.map((_) => _ === "100000005"),
    O.getOrElse(() => false)
  );
}
export function useJwt() {
  return useJwtQuery({ select: (_) => _.token });
}
export function useUser(): UseQueryReturnType<User, Error> {
  return useJwtQuery({ select: (_) => _.payload.user });
}
