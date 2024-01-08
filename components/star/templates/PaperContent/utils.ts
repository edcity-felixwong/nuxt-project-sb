import * as O from "fp-ts/Option";
import * as A from "fp-ts/Array";
import { flow } from "fp-ts/function";

export const isValidPaper = flow(
  O.fromNullable, //
  O.fromPredicate(
    O.fold(
      () => false,
      (_) => Array.isArray(_) && A.isNonEmpty(_)
    )
  ),
  O.flatten
);
