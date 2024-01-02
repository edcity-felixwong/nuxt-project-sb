import { ErrorResponse, SuccessResponse } from "../models";

export function triage<R>(res: Promise<ErrorResponse | SuccessResponse<R>>) {
  return res.then((_) => (_.success ? Promise.resolve(_.result) : Promise.reject(_.error)));
}
