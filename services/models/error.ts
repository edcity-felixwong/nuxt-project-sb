import { WithTimeStamp, BasicApiResponse } from "./common";

/** The error body.
 * @example
 * {
    "code": 101,
    "name": "login_required",
    "message": "login required or expired"
  }
 */
export interface Error {
  code: number;
  name: string;
  message: string;
}
/** The api response if fail.
 * @example
 * {
    "success": false,
    "error": {
        "code": 101,
        "name": "login_required",
        "message": "login required or expired"
    },
    "result": null
  }
*/
export interface ErrorResponse extends BasicApiResponse<null> {
  success: false;
  error: Error;
  result: null;
}
export interface ErrorResponseWithTimeStamp extends ErrorResponse, WithTimeStamp {}
