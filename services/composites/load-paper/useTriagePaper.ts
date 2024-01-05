import { Paper } from "@/services/models";
import dayjs from "dayjs";
import type { OpUnitType } from "dayjs";
import { pipe } from "fp-ts/function";
import { groupBy } from "fp-ts/NonEmptyArray";

export type TriageState = "ended" | "notStarted" | "inProgress";

function getState(paper: Paper): TriageState {
  const precision: OpUnitType = "second";
  /** If paper has both startTime and endTime */
  if (dayjs().isBefore(paper.startTime, precision)) return "notStarted";
  if (dayjs().isAfter(paper.endTime, precision)) return "ended";
  /** The period should be inclusive,
   * but that requires the precision of the equality,
   */
  if (dayjs().isAfter(paper.startTime, precision) && dayjs().isBefore(paper.endTime, precision)) {
    return "inProgress";
  }
  /** If paper has only startTime */
  if (dayjs().isBefore(paper.startTime)) return "notStarted";
  if (dayjs().isAfter(paper.startTime)) return "inProgress";
  /** If paper has only endTime */
  if (dayjs().isBefore(paper.endTime)) return "inProgress";
  if (dayjs().isAfter(paper.endTime)) return "ended";
  /** If paper has nothing,
   * probably drafts, shared or scheduled
   */
  return "notStarted";
}

export function triage(papers: Paper[]): Partial<Record<TriageState, Paper[]>> {
  return pipe(papers, groupBy(getState));
}
