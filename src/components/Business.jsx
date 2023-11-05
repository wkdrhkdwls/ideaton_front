import { Link } from "react-router-dom";
import Logo from "@assets/CBucheo/cbLogo.jpg";

const BusinessPage = () => {
  return (
    <div>
      <div className="lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">
        <div className="flex flex-row sm:flex-col mt-40 sm:mt-20 sm:mx-3 md:mx-4 lg:mt-20 xl:mt-40">
          <div className="sm:w-full sm:flex sm:justify-center  sm:mb-10 w-1/2 mr-10">
            <img className="sm:w-48" src={Logo} alt={Logo} />
          </div>
          <div className="flex flex-col w-full   gap-5 sm:mt-0 sm:mx-2">
            <h2 className="text-4xl font-bold sm:text-3xl">
              CB – COLLABORATION BUCHEON
            </h2>
            <p className="text-xl sm:text-base">
              부천 지역 내 소상공인 및 중소기업의 제품을 판매하고 있습니다.
              제로웨이스트 상품 , 흔하지 않은 핸드메이드 상품들이 여기 있습니다
              잘 알려지지 않은 ‘보물같은’ 소상공인의 다양한 상품들이,
              가톨릭대학교 학생들의 관심을 기다리고 있습니다. 지역 경제 활성화를
              씨리얼라이즈는 언제나 응원하고 있습니다.
            </p>
            <div className="flex justify-center items-center p-6 bg-yellow-300 w-40 rounded-3xl">
              <Link to="/cbproduct">
                <button className="flex justify-center items-center">
                  자세히 보기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
