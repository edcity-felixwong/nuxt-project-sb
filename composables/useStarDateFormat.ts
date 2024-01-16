import dayjs from "dayjs";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";

export type DateLike = Parameters<typeof dayjs>[0];

/**
 * @example
 * starDateFormat("2023-04-12 09:34:01")
 * // '2023-04-12 09:34'
 *
 * @example
 * input: 2023-04-12T09:34:01Z+0800, new Date(...)
 */
export function starDateFormat(date: DateLike): string {
  return dayjs(date).format("YYYY[-]MM[-]DD[ ]HH:mm");
}
/** Return the Maybe of the formatted date,
 * Handling fail:
 * @example
 * pipe(
 *  starDateFormatMaybe(""),
 *  O.getOrElse(()=>'something fallback')
 * )
 * // returns 'something fallback'
 */
export function starDateFormatMaybe(date: DateLike): O.Option<string> {
  return pipe(
    date,
    O.fromPredicate((_) => dayjs(_).isValid()),
    O.map(starDateFormat)
  );
}
