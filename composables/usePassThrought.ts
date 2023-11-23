import { tv } from "@/utils/tv";

export function extend<T extends { slots: Record<string, any> }, P extends T["slots"]>(
  style: T,
  props: P
) {
  return tv({
    extend: style,
    slots: props,
  });
}

sequenceS;

export function usePassThrough<T, P>(style: T, props: P) {
  return;
}
