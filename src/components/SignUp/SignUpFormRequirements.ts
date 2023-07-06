export interface FormValue {
  address: string;
  email: string;
  name: string;
  phone_number: string;
  referrer: string;
  type: string;
  zip_code: string;
  detailAddress: string;
  people: string;
}

export const nameRequirement = {
  required: {
    value: true,
    message: "이름을 입력해주세요",
  },
};

export const phoneRequirement = {
  required: {
    value: true,
    message: "휴대전화 번호를 입력해주세요",
  },
  pattern: {
    value: /^\d{3}-\d{3,4}-\d{4}$/,
    message: "올바른 전화번호 형식이 아닙니다. (000-0000-0000)",
  },
};
