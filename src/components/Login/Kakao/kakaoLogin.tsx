import React from "react";
import kakao_login from "@assets/kakao_login.png";

const kakaoLogin = () => {
  const REST_API_KEY = `${process.env.REACT_APP_REST_API_KEY}`;
  const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  console.log(REST_API_KEY);

  const loginHandler = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <button onClick={loginHandler} className=" sm:w-4/5 mx-auto flex">
        <img src={kakao_login} alt="kakao_login" />
      </button>
    </>
  );
};

export default kakaoLogin;
