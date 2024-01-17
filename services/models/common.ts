import { z } from "zod";

export interface School {
  nameE: string;
  nameC: string;
  schType: string;
  schoolCode: string;
}

export interface Teacher {
  cityId: string;
  schoolCode: string;
  schLevelId: number;
  class: string;
  classNo: number;
  fullnameC: string;
  fullnameE: string;
  nickname: null | string;
  alias: null | string;
  status: number;
  emailAddressHash: string;
  loginEmailHash: string;
}

export const packageIdZ = z.enum(["13", "14", "15", "16"]);
/** Subject 🤡\
 * 13: Chinese\
 * 14: English\
 * 15: Chinese math\
 * 16: English math
 * */
export type PackageId = z.infer<typeof packageIdZ>;

// export type AcademicYear =
//   | "2016/17"
//   | "2017/18"
//   | "2018/19"
//   | "2019/20"
//   | "2020/21"
//   | "2021/22"
//   | "2022/23"
//   | "2023/24";
export const academicYearZ = z.enum([
  "2016/17",
  "2017/18",
  "2018/19",
  "2019/20",
  "2020/21",
  "2021/22",
  "2022/23",
  "2023/24",
]);
export type AcademicYear = z.infer<typeof academicYearZ>;
/**
 * api
 */

export interface BasicApiParams {
  token: string;
}
export interface BasicApiResponse<R> {
  success: boolean;
  result: R;
}

export interface SuccessResponse<R> extends BasicApiResponse<R> {
  success: true;
  result: R;
}
export interface WithTimeStamp {
  timestamp: Date;
}
export interface SuccessResponseWithTimeStamp<R> extends SuccessResponse<R>, WithTimeStamp {}

export const packageCodeZ = z.enum(["chi", "eng", "math_zh", "math_en"]);
export type packageCode = z.infer<typeof packageCodeZ>;

export type Actions =
  | "view"
  | "edit"
  | "preview"
  | "share"
  | "report"
  | "accept"
  | "reject"
  | "attempt"
  | "retry"
  | "review"
  | "delete"
  | "assign";
