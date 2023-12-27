import type { ErrorResponse } from "./error";

export interface User {
  cityId: string;
  gradeLevel: null;
  schoolClass: null;
  classNo: null;
  nickname: string;
  emailAddress: string;
  status: number;
  schLevelId: number;
  userId: number;
  roles: string;
  groups: string;
  cfullname: string;
  efullname: string;
  schoolcode: string;
  schClass: null;
}
export interface Payload {
  iat: number;
  exp: number;
  user: User;
}

export interface GtagCFG {
  edcityDomain: string;
  edcity: string;
  star: string;
}
export interface jwtResult {
  token: string;
  payload: Payload;
  gtagUserId: string;
  gtagCFG: GtagCFG;
}
export interface jwtSuccessResponse {
  success: true;
  error: null;
  result: jwtResult;
}
export type jwtResponse = jwtSuccessResponse | ErrorResponse;
