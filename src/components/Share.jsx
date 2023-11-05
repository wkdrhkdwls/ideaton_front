import { Link } from "react-router-dom";

const SharePage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <p>CUK Share 페이지</p>
      <div className="flex justify-center items-center p-6 bg-yellow-300 w-40">
        <Link to="/cmproduct">구매하기</Link>
      </div>
    </div>
  );
};

export default SharePage;
