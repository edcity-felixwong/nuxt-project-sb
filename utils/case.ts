/** To cast different cases, mostly knbab/snake to camel */

export type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never;
export type Tail<T extends any[]> = T extends [infer _, ...infer L] ? L : never;
export type Push<T extends any[], V> = [...T, V];

export type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ""
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Split<U, D>]
  : [S];
export type TupleToString<T extends string[]> = T extends []
  ? ""
  : `${Head<T>}${TupleToString<Tail<T>>}`;

export type CapitalizeT<T extends string[], R extends string[] = []> = T extends []
  ? R
  : CapitalizeT<Tail<T>, Push<R, Capitalize<Head<T>>>>;

export type KnbabToCamel<T extends string | number> = TupleToString<
  [Head<Split<T, "-">>, ...CapitalizeT<Tail<Split<T, "-">>>]
>;
export type KnbabToCamelS<T extends Record<string | number, any>> = {
  [K in keyof T as KnbabToCamel<K>]: T[K];
};
