import type {
  School,
  Teacher,
  AcademicYear,
  PackageId,
  SuccessResponseWithTimeStamp,
} from "./common";

export type aseRole = "Teacher" | "Student";
export type Language = "zh" | "en";

export interface PackageConfig {
  periodStart: string;
  periodEnd: string;
  editableFields: string[];
}
export interface Notice {
  zh: string;
  en: string;
}

export interface SearchFieldsAllowedValues {
  lang?: Language[];
  difficulty?: ("low" | "medium" | "high")[];
  skill?: string[];
  keyStage?: ("KS1" | "KS2" | "KS3")[];
  langEXTCode?: string[];
}
export interface SearchField {
  searchFields: string[];
  searchFieldsAllowedValues: SearchFieldsAllowedValues;
}

export interface UserPreference {
  lang: Language;
  packageId: PackageId;
  uiVersion: string;
  needTourAcayear: boolean;
  /** Only teacher have this, student didn't  */
  acceptTos?: boolean;
}

export interface Package {
  id: number;
  createAt: Date;
  createBy: string;
  modifyAt: Date;
  modifyBy: string;
  objectErrorList: any[];
  project: string;
  code: string;
  titleE: string;
  titleC: string;
  descriptionE: string;
  descriptionC: string;
  metadataSet: string;
  publisherId: number;
  subjectId: number;
  status: string;
  seq: number;
  permittedFunctions: string[];
}
export interface PermittedEntities {
  package: { [key: string]: Package };
}
interface PaperPermittedFunctions {
  create: boolean;
  assign: boolean;
  attempt: boolean;
  review: boolean;
  report: boolean;
}
export interface PermittedFunctions {
  paper: PaperPermittedFunctions;
}

export interface Category {
  periodStart: string;
  periodEnd: string;
  periodMockStart: string;
  periodMockEnd: string;
  editableFields: any[];
  packageConfig: any[] | { [key: string]: PackageConfig };
  paperListTab: string;
  suppressMediaOverride: boolean;
  paperFrozen: boolean;
}

export interface Bca {
  [name: string]: Category;
  // blocked: number;
}
type QuestionContentDoc = {
  [key: string]: {
    count: number;
  };
};
export interface BcCodesQuestionContentDoc {
  bc2000: QuestionContentDoc;
  bc2017: QuestionContentDoc;
  cr2017: QuestionContentDoc;
}
export interface ProjectMeta {
  bcCodesQuestionContentDoc: BcCodesQuestionContentDoc;
}
export interface MetadataSet {
  default: SearchField;
  starChi: SearchField;
  starEng: SearchField;
  starMath: SearchField;
  starUser: SearchField;
}
export interface Meta {
  academicYears: AcademicYear[];
  groupHost: string;
  lastAccessAcademicYear: AcademicYear;
  userPreference: UserPreference;
  permittedFunctions: PermittedFunctions;
  permittedEntities: PermittedEntities;
  aseRole: aseRole[];
  bca: Bca;
  teachers?: { [key: string]: Teacher };
  notice: Notice[];
  school?: School;
  metadataSet?: MetadataSet;
  projectMeta?: ProjectMeta;
  bookmarkedQuestions?: any[];
}

export interface LoadMetaSuccessResponse extends SuccessResponseWithTimeStamp<Meta> {}
