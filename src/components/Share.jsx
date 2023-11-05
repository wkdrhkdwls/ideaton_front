import { Link } from "react-router-dom";
import Logo from "@assets/cukShare/csLogo.png";

const SharePage = () => {
  return (
    <div>
      <div className="lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">
        <div className="flex flex-row sm:flex-col mt-40 sm:mt-20 sm:mx-3 md:mx-4 lg:mt-20 xl:mt-40">
          <div className="sm:w-full sm:flex sm:justify-center  sm:mb-10 w-1/2 mr-10">
            <img className="sm:w-48" src={Logo} alt={Logo} />
          </div>
          <div className="flex flex-col w-full   gap-5 sm:mt-0 sm:mx-2">
            <h2 className="text-4xl font-bold sm:text-3xl">CS - CUK SHARE</h2>
            <p className="text-xl sm:text-base">
              가톨릭대학교 학생들이 나눔하고 기증한 제품입니다. 본 제품은 의뢰한
              학생의 의견에 따라 무료 나눔, 적절한 중고 가격을 설정하여 기존보다
              저렴하게 판매하고 있습니다. ‘나에게는 당장은 필요 없지만 다른
              사람이 의미있게 사용했으면 하는 따뜻한 그 마음’, 씨리얼라이즈는 잘
              알고 있습니다. 학교 내 따뜻한 녹색 소비 문화를 함께 만들어봐요
            </p>
            <Link to="/csproduct">
              <div className="flex justify-center items-center p-6 bg-yellow-300 w-40 rounded-3xl">
                <button className="flex justify-center items-center">
                  자세히 보기
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePage;
