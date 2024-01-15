import { Paper } from "@/services/models";
import { Foldable } from "fp-ts/Array";
import { fromFoldableMap, keys } from "fp-ts/Record";
import { last } from "fp-ts/Semigroup";
import { pipe } from "fp-ts/function";
import { type Ref } from "vue";
import { computedWithControl } from "@vueuse/core";
import * as A from "fp-ts/Array";
import * as O from "fp-ts/Option";
import * as EQ from "fp-ts/Eq";

import { useLoadPaperQuery } from "./useLoadPaperQuery";

type Owner = Paper["ownerInfo"];
/** Define how ownerInfo are equal */
const ownerEq: EQ.Eq<Owner> = {
  equals: (x, y) => x.cityId === y.cityId,
};

export function getAvailableOwners(papers: Paper[]): Paper["ownerInfo"][] {
  return pipe(
    papers,
    A.map((_) => _.ownerInfo),
    A.uniq(ownerEq)
  );
}

export function usePaperOwners(papers: Ref<Paper[] | undefined>) {
  return computedWithControl(papers, () => {
    if (!papers.value) return undefined;

    return getAvailableOwners(papers.value);
  });
}
