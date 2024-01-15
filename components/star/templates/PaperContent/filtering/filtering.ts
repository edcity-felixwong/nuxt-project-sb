import * as P from "fp-ts/Predicate";
import * as A from "fp-ts/Array";
import * as R from "fp-ts/Record";
import * as O from "fp-ts/Option";
import { pipe, flow } from "fp-ts/function";

import { Paper, AcademicYear, Status } from "@/services/models";

/* eslint indent:0 implicit-arrow-linebreak:0 */

type FilterableField = "title" | "year";
type MatchType = "exact" | "contain" | "regex";

export type PaperPredicate = P.Predicate<Paper>;

const contain =
  <T extends { includes: (y: T) => boolean }>(x: T) =>
  (y: T) =>
    y.includes(x);
const exactMatch =
  <T>(x: T) =>
  (y: T) =>
    x === y;
const regexMatch =
  <T extends string>(pattern: RegExp) =>
  (value: T) =>
    pattern.test(value);

/** A pass-through filter, like for 'all' */
export const identityPaperPredicate: PaperPredicate = () => true;

/**
 *
 * @example
 * ```js
 * papers.filter(yearIs('2023/24'))
 * ```
 */
export const yearIs =
  (year: AcademicYear): PaperPredicate =>
  (paper: Paper) =>
    pipe(
      paper, //
      O.of,
      O.chain((_) => O.fromNullable(_.acayear)),
      O.map(exactMatch(year)),
      O.getOrElse(() => false)
    );
export const getOwnerName = (paper: Paper) =>
  pipe(
    paper, //
    O.of,
    O.chain((_) => O.fromNullable(_?.ownerInfo?.fullnameC))
  );
export const ownerIs =
  (name: string): PaperPredicate =>
  (paper: Paper) =>
    pipe(
      paper,
      getOwnerName,
      O.map(exactMatch(name)),
      O.getOrElse(() => false)
    );
export const getStatus = (paper: Paper) =>
  pipe(
    paper, //
    O.of,
    O.chain((_) => O.fromNullable(_?.status?.submission))
  );
export const statusIs =
  (status: Status["submission"]): PaperPredicate =>
  (paper: Paper) =>
    pipe(
      paper,
      getStatus,
      O.map(exactMatch(status)),
      O.getOrElse(() => false)
    );
