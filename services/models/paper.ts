import { z } from "zod";

import type { School, AcademicYear } from "./common";
import { PackageId } from "./common";

export type FunctionType = "attempt";
export type RuleSet = "user";
export type RuleType = "user_id" | "group" | "school_level_class";
export type Project = "star";
export type BcVer = "bc_2000" | "bc_2017" | "cr_2017" | "";
export const teacherPaperTypeZ = z.enum(["teacher_preset", "my", "student_preset"]);
export const studentPaperTypeZ = z.enum(["self_study", "teacher", "student_preset"]);
export type TeacherPaperType = z.infer<typeof teacherPaperTypeZ>;
export type StudentPaperType = z.infer<typeof studentPaperTypeZ>;
export const bcaCodeZ = z.enum(["", "bca2021", "bca2022", "shared", "nsp2020"]);
export type BcaCode = z.infer<typeof bcaCodeZ>;
export type Tab = BcaCode;
export type FeedbackStatus = "none" | "required" | "pending";
export type ReportMode = "last";
export type Mode = "sequential";
export type SerializedJsonString = string;
export type SchType = "SEC";
export type CompiledBy = "myself" | "others";
export type TeacherSubmission = "pending" | "ready" | "not_attempted" | "finished" | "attempted";
export type StudentSubmission = "submitted" | "not_submitted";
export type Submission = TeacherSubmission | StudentSubmission;
export type EntityType = "paper";

export interface Status {
  isFrozen: boolean;
  canStart: boolean;
  canPreview: boolean;
  canView: boolean;
  canModify: boolean;
  canDelete: boolean;
  canAssign: boolean;
  canReview: boolean;
  canReport: boolean;
  reportSharedNum: number;
  reportSharedAccepted: boolean;
  canPublish: boolean;
  canRecall: boolean;
  canSharePaper: boolean;
  canShareReport: boolean;
  canAccept: boolean;
  canReject: boolean;
  compiledBy: CompiledBy;
  submission: Submission;
}

export interface OwnerInfo {
  cityId: string;
  schoolCode: string | null;
  gradeLevel: null | string;
  schoolClass: null | string;
  class: null | string;
  classNo: number | null;
  fullnameC: string;
  fullnameE: string;
  nickname: null | string;
  emailAddress: string;
  status: number;
  schLevelId: number;
  userId: number;
  roles: string[];
}

export interface Section {
  id: number;
  createAt: string;
  createBy: string;
  modifyAt: string;
  modifyBy: string;
  objectErrorList: any[];
  paperId: number;
  seq: number;
  title: string;
  content: string;
  noOfQuestions: number;
  suggestedTime: number;
  mode: Mode;
  criteria: string;
  setting: SerializedJsonString;
  sectionQuestions: any[];
}

export interface Trial {
  paperId: number;
  userId: number;
  schoolCode: string;
  submitted: number;
  marked: number;
  timeElapsed: number;
  submitTime: string;
  forceSubmit: number;
  score: number;
  scoreBasic: number;
  token: string;
  resourceLinkPk: number;
  ltiUserId: string;
  state: string;
  id: number;
}

export interface ACL {
  id: number;
  createAt: Date;
  createBy: string;
  modifyAt: Date;
  modifyBy: string;
  objectErrorList: any[];
  project: Project;
  entityType: string;
  entityId: number;
  functionType: string;
  ruleSet: string;
  ruleType: string;
  ruleValue1: string;
  ruleValue2: string;
  ruleValue3: string;
  ruleValue4: string;
  status: string;
  remarks: string;
}

/**
 * @abstract Basic type, use `TeacherPaper` or `StudentPaper` instead.
 */
export interface Paper {
  id: number;
  // createAt: Date;
  // createBy: string;
  // modifyAt: Date;
  // modifyBy: string;
  objectErrorList: any[];
  project: Project;
  userId: number;
  schoolCode: string;
  acayear: AcademicYear;
  packageId: PackageId;
  source: number;
  title: string;
  content: string;
  description: string;
  closeURL: string;
  leaderboardCode: string;
  leaderboardMode: string;
  reportMode: ReportMode;
  startTime: string;
  endTime: string;
  publishDate: string;
  published: number;
  bcVer: BcVer;
  attempted: number;
  ended: number;
  timeAllowed: number;
  timeBonus: number;
  maxTrialNo: number;
  maxTrialScore: number;
  autoSaveInterval: number;
  submitOnce: number;
  cannotGoPrev: number;
  forceAnswer: number;
  showFeedback: number;
  viewAfterSubmit: number;
  preserveLastSubmitAns: number;
  suppressMedia: number;
  trialsAssigned: number;
  trialsSubmitted: number;
  trialsMarked: number;
  trialsTotal: number;
  sections: Section[];
  trials: Trial[];
  ownerModifyAt: string;
  ownerInfo: OwnerInfo;
  bcaCode: BcaCode;
  status: Status;
  tab: Tab;
  school?: School;
  isBca?: number;
  isBcaMock?: number;
}
export interface StudentPaper extends Paper {
  mySubmmitedTrialNo: number;
  bcaBlocked: number;
}
export interface TeacherPaper extends Paper {
  isBriefReport: boolean;
  feedbackStatus: FeedbackStatus;
  acl: ACL[];
}
/**
 * There would be a `type` field if fetching with `para[type]` 🤡.
 */
export interface TypedPaper extends Paper {
  type: TeacherPaperType | StudentPaperType;
}
export interface TeacherPresetPaper extends TypedPaper {
  type: "teacher_preset";
}
export interface StudentPresetPaper extends TypedPaper {
  type: "student_preset";
}
export interface MyPaper extends TypedPaper {
  type: "my";
}
