import { Paper } from "@/services/models";
import { Foldable } from "fp-ts/Array";
import { fromFoldableMap, keys } from "fp-ts/Record";
import { last } from "fp-ts/Semigroup";
import { pipe } from "fp-ts/function";
import { type Ref } from "vue";
import { computedWithControl } from "@vueuse/core";

import { useLoadPaperQuery } from "./useLoadPaperQuery";

export function getAvailableTabs(papers: Paper[]): Paper["tab"][] {
  return pipe(
    fromFoldableMap(last<(typeof papers)[number]>(), Foldable)(papers, (paper) => [
      paper.tab,
      paper,
    ]),
    keys
  );
}

export function usePaperTabs(papers: Ref<Paper[] | undefined>) {
  return computedWithControl(papers, () => {
    if (!papers.value) return undefined;

    return getAvailableTabs(papers.value);
  });
}
