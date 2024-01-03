import { useLoadPaperQuery } from "./useLoadPaperQuery";
import type { UseQueryOptions } from "vue-query";
import { Foldable, zip } from "fp-ts/Array";
import { fromFoldableMap, keys } from "fp-ts/Record";
import { pipe, identity } from "fp-ts/function";
import { last } from "fp-ts/Semigroup";

export function usePaperTabs() {
  return useLoadPaperQuery({
    select: (papers) => {
      return pipe(
        fromFoldableMap(last<(typeof papers)[number]>(), Foldable)(papers, (paper) => [
          paper.tab,
          paper,
        ]),
        keys
      );
    },
  });
}
