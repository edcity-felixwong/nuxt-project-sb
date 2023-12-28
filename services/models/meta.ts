import type { School, Teacher } from "./common";

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
  lang?: ("zh" | "en")[];
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
  lang: string;
  packageId: number;
  uiVersion: string;
  needTourAcayear: boolean;
  acceptTos: boolean;
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
interface Paper {
  create: boolean;
  assign: boolean;
  attempt: boolean;
  review: boolean;
  report: boolean;
}
export interface PermittedFunctions {
  paper: Paper;
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
export interface BcCodesQuestionContentDoc {
  bc2000: {
    [key: string]: {
      count: number;
    };
  };
  bc2017: {
    [key: string]: {
      count: number;
    };
  };
  cr2017: {
    [key: string]: {
      count: number;
    };
  };
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

export interface LoadMetaResult {
  academicYears: string[];
  groupHost: string;
  lastAccessAcademicYear: string;
  userPreference: UserPreference;
  permittedFunctions: PermittedFunctions;
  permittedEntities: PermittedEntities;
  aseRole: string[];
  bca: Bca;
  teachers?: { [key: string]: Teacher };
  notice: Notice[];
  school?: School;
  metadataSet?: MetadataSet;
  projectMeta?: ProjectMeta;
  bookmarkedQuestions?: any[];
}

export interface LoadMetaSuccessResponse {
  success: boolean;
  result: LoadMetaResult;
  timestamp: Date;
}
