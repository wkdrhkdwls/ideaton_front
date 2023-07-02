import loadable from "@loadable/component";
const KakaoLogin = loadable(() => import("@components/Login/Kakao/kakaoLogin"));
const NaverLogin = loadable(() => import("@components/Login/Naver/naverLogin"));

const LogIn = () => {
  return (
    <>
      <h1>로그인</h1>
      <KakaoLogin />
      <NaverLogin />
    </>
  );
};

export default LogIn;
