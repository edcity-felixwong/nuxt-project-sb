import { useRouteQuery } from "@vueuse/router";
import type { Ref, MaybeRefOrGetter } from "vue";
import { watch } from "vue";

/**
 * defaultValue?: Record<string, MaybeRefOrGetter<string>>,\
 * options?: ReactiveRouteOptionsWithTransform<string, string>
 *
 * @example
 * const query = useSearchParams({
 *  key : 'value'
 * })
 * query.key.value = 'updated'
 *
 * @example
 * const { key } = useSearchParams({
 *  key : 'value'
 * })
 * key.value = 'updated'
 */
export function useSearchParams<T extends Record<string, MaybeRefOrGetter<string>>>(
  defaultValue?: T,
  options?: Parameters<typeof useRouteQuery>[2]
): {
  [K in keyof T]: Ref<T[K]>;
} {
  const r = {};
  Object.entries(defaultValue).forEach(([k, v]) => {
    const _ = useRouteQuery(k, v, options);
    // trigger the SET on the ref to update the url.
    watch(
      () => _.value,
      () => {
        // eslint-disable-next-line no-self-assign
        _.value = _.value;
      },
      { immediate: true }
    );
    Reflect.set(r, k, _);
  });
  return r;
}
