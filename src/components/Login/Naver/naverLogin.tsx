import naver_login from "@assets/login/naver_login.png";

const naverLogin = () => {
  return (
    <button className=" sm:w-4/5 mx-auto flex">
      <img src={naver_login} alt="naver_login" />
    </button>
  );
};

export default naverLogin;
