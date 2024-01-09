import dayjs from "dayjs";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";

export type DateLike = Parameters<typeof dayjs>[0];

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
