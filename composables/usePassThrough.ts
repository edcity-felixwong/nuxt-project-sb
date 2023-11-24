import { tv } from "@/utils/tv";
import { sequence } from "fp-ts/Record";
import * as IO from "fp-ts/IO";
import { pipe } from "fp-ts/function";
import { reactive, computed, ref, watch, watchEffect, toRefs } from "vue";
import { reactify, reactiveComputed } from "@vueuse/core";

type PassThroughPropsType<S> = {
  /** The pass through name to go through component tree,
   * eg. classNames, cx, css, etc
   */
  pt?: S;
};

/** Read slot from props */
export function extend<T extends { slots: any }, P extends PassThroughPropsType<T["slots"]>>(
  style: T,
  props: P
) {
  return tv({
    extend: style,
    slots: props?.pt,
  });
}

export const evaluate = sequence(IO.io);

/** Read slots and variants from props, with slots go first */
export function read<T extends { slots: any }, P extends PassThroughPropsType<T["slots"]>>(
  style: T,
  props: P
): IO.IO<T["slots"]> {
  return pipe(
    extend(style, props),
    (fn) => fn(props) as Record<string, IO.IO<string>>, // apply variants from props
    evaluate // sequence Record<string, IO<string>> into IO<Record<string,string>
  );
}

export function usePassThrough<
  T extends { slots: any },
  P extends PassThroughPropsType<T["slots"]>
>(style: T, props: P) {
  // const propsRef = toRefs(props);
  const pt = ref(read(style, props)());
  watch(
    () => props,
    (newProps) => {
      pt.value = read(style, newProps)();
    },
    {
      deep: true,
    }
  );
  // return pipe(read(style, reactive(props)))();
  return pt;
}
