import naver_login from "@assets/login/naver_login.png";
import { Link } from "react-router-dom";

const naverLogin = () => {
  const REACT_APP_CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`;
  const REACT_APP_SERVER_IP = `${process.env.REACT_APP_SERVER_IP}`;

  return (
    <Link
      to={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${REACT_APP_CLIENT_ID}&state=JINGYEOUNGOK_NAVER_LOGIN&redirect_uri=http://${REACT_APP_SERVER_IP}:8080/login/naverLoginCallback`}
    >
      <img src={naver_login} alt="naver_login" />
    </Link>
  );
};

export default naverLogin;
