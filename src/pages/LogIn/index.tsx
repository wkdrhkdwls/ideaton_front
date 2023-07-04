import loadable from "@loadable/component";
import Layout from "@components/Layout/layout";
const KakaoLogin = loadable(() => import("@components/Login/Kakao/kakaoLogin"));
const NaverLogin = loadable(() => import("@components/Login/Naver/naverLogin"));

const LogIn = () => {
  return (
    <>
      <Layout>
        <h1>로그인</h1>

        <KakaoLogin />
        <NaverLogin />
      </Layout>
    </>
  );
};

export default LogIn;
