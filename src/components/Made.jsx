import { Link } from "react-router-dom";
import Logo from "@assets/cukMade/cukMadeLogo.png";

const MadePage = () => {
  return (
    <div>
      <div className="lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">
        <div className="flex flex-row sm:flex-col mt-40 sm:mt-20 sm:mx-3 md:mx-4 lg:mt-20 xl:mt-40">
          <div className="sm:w-full sm:flex sm:justify-center  sm:mb-10 w-1/2 mr-10">
            <img className="sm:w-48" src={Logo} alt={Logo} />
          </div>
          <div className="flex flex-col w-full   gap-5 sm:mt-0 sm:mx-2">
            <h2 className="text-4xl font-bold sm:text-3xl">CM – CUK MADE</h2>
            <p className="text-xl sm:text-base">
              가톨릭대학교 학생들이 디자인한 상품과 교내 동아리에서 제작한
              프로젝트 상품을 판매하는 곳입니다. 온라인에서 학생들이 만든 다양한
              굿즈 및 제품을 구매할 수 있습니다. 실제로 제작한 상품을 판매하고
              입점을 통해 자신이 브랜딩을 해보는 경험을 쌓아보세요
              씨리얼라이즈는 언제나 학생의 활동를 환영하고 있습니다.
            </p>
            <div className="flex justify-center items-center p-6 bg-yellow-300 w-40 rounded-3xl">
              <Link to="/cmproduct">
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

export default MadePage;
