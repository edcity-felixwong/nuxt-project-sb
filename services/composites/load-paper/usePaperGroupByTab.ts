import { Paper, Tab } from "@/services/models";
import { pipe } from "fp-ts/function";
import { groupBy, type NonEmptyArray } from "fp-ts/NonEmptyArray";

export function groupByTab(papers: NonEmptyArray<Paper>): Partial<Record<Tab, Paper[]>> {
  return pipe(
    papers,
    groupBy((_) => _.tab)
  );
}
