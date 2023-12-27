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
