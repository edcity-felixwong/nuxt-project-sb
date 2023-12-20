export type Project = "star";
export type BcVer = "bc_2000" | "";
export type BcaCode = "" | "nsp2020";
export type FeedbackStatus = "none" | "required" | "pending";
export type Acayear = "" | "2023/24";
export type ReportMode = "last";
export type Mode = "sequential";
export type SerializedJsonString = string;
export type SchType = "SEC";
export type CompiledBy = "myself" | "others";
export type Submission = "not_attempted" | "finished" | "attempted";

export interface School {
  nameE: string;
  nameC: string;
  schType: SchType;
  schoolCode: string;
}

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
  cityID: string;
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
  schLevelID: number;
  userID: number;
  roles: string[];
}

export interface Section {
  id: number;
  createAt: Date;
  createBy: string;
  modifyAt: Date;
  modifyBy: string;
  objectErrorList: any[];
  paperID: number;
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

export interface ACL {
  id: number;
  createAt: Date;
  createBy: string;
  modifyAt: Date;
  modifyBy: string;
  objectErrorList: any[];
  project: Project;
  entityType: string;
  entityID: number;
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

export interface Paper {
  id: number;
  createAt: Date;
  createBy: string;
  modifyAt: Date;
  modifyBy: string;
  objectErrorList: any[];
  project: Project;
  userID: number;
  schoolCode: string;
  acayear: Acayear;
  packageID: number;
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
  trials: any[];
  ownerModifyAt: Date;
  ownerInfo: OwnerInfo;
  feedbackStatus: FeedbackStatus;
  bcaCode: BcaCode;
  mySubmmitedTrialNo: number;
  acl: ACL[];
  status: Status;
  school?: School;
  isBca?: number;
  isBcaMock?: number;
  isBriefReport?: boolean;
}
