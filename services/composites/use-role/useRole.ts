import { InjectionKey, inject, provide } from "vue";
import { toReactive } from "@vueuse/core";

import { useRoleQuery } from "../../api/load-meta";

export type Role = {
  isTeacher: boolean;
  isStudent: boolean;
  isOther: boolean;
  role: "teacher" | "student" | "other";
};
export const roleInjectionKey = Symbol("role") as InjectionKey<Role | undefined>;
/**
 *
 * @example
 * ```js
 * const { role } = useRole()
 * if (role === 'teacher') ...
 * ```
 * @example
 * ```js
 * const { isTeacher } = useRole()
 * if (isTeacher) ...
 * ```
 */
export function useRole(): Role {
  return inject(roleInjectionKey);
}
export function createRoleContext(initialValue) {
  const { data: role } = useRoleQuery();

  provide(roleInjectionKey, role.value ? toReactive(role) : initialValue);
}
