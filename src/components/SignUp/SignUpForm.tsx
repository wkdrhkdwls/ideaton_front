import { useForm, SubmitHandler } from "react-hook-form";
import Layout from "@components/Layout/layout";
import { postSignUpDatas } from "../../services/api";
import type { FormValue } from "./SignUpFormRequirements";
import { nameRequirement, phoneRequirement } from "./SignUpFormRequirements";
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmitHandler: SubmitHandler<FormValue> = async (data) => {
    await postSignUpDatas(data);
  };
  return (
    <>
      <Layout>
        <h1 className="mt-20 text-5xl">회원가입</h1>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <label className="block">
            <p>이름 *</p>
            <input
              className="border-1 border-solid border-black"
              {...register("name", nameRequirement)}
              type="text"
            />
          </label>
          {errors.name?.message}
          <label className="block">
            <p>휴대전화 *</p>
            <input
              className="border-1 border-solid border-black"
              {...register("phone_number", phoneRequirement)}
              type="text"
            />

            {errors.phone_number?.message}
          </label>
          <label className="block">
            <p>주민등록번호 *</p>
            <input
              className="border-1 border-solid border-black"
              {...register("people")}
              type="text"
            />
          </label>
          기본배송지
          <label className="block">
            <p>주소</p>
            <input
              className="border-1 border-solid border-black"
              {...register("address")}
              type="text"
            />
          </label>
          <input
            className="border-1 border-solid border-black"
            {...register("detailAddress")}
            type="text"
            placeholder="상세주소(선택입력가능)"
          />
          <button>가입하기</button>
        </form>
      </Layout>
    </>
  );
};

export default SignUpForm;
