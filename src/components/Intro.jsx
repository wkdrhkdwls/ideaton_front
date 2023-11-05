const IntroPage = () => {
  return (
    <div>
      <div className="lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto sm:justify-center sm:flex md:flex md:justify-center">
        {/* <h2 className="text-center text-7xl sm:hidden">C - REALIZE</h2> */}
        <div className="flex flex-row gap-5 text-white text-2xl sm:flex-col md:flex-col sm:mt-20 sm:mx-3 md:mx-4 lg:mt-20 xl:mt-40">
          <div className="animate-fadeIn w-1/3 flex flex-col justify-center items-center rounded-full bg-blue-500 h-96 sm:w-48 sm:h-48 md:w-[280px] md:h-[280px]">
            <p className="text-4xl text-center sm:text-3xl mt-1">Cuk Made</p>
            <div className="border-[1px] border-white w-1/4 my-4"></div>
            <p className="sm:text-xl">CM</p>
            <p className="text-xl sm:text-[12px]">학생들이 직접 만든 굿즈</p>
          </div>
          <div className="animate-fadeIn w-1/3  flex flex-col justify-center items-center rounded-full bg-green-500 h-96 sm:w-48 sm:h-48 md:w-[280px] md:h-[280px]">
            <p className="text-4xl text-center sm:text-3xl mt-1">Cuk Share</p>
            <div className="border-[1px] border-white w-1/4 my-4"></div>
            <p className="sm:text-xl">CS</p>
            <p className="text-xl sm:text-[12px]">학생들의 기증과 나눔</p>
          </div>
          <div className="animate-fadeIn w-1/3 flex flex-col justify-center items-center rounded-full bg-yellow-500 h-96 sm:w-48 sm:h-48 md:w-[280px] md:h-[280px]">
            <p className="text-4xl text-center sm:text-2xl">
              Collaboration Bucheon
            </p>
            <div className="border-[1px] border-white w-1/4 my-4"></div>
            <p className="sm:text-xl">CB</p>
            <p className="text-xl sm:text-[12px]">부천 소상공인과 협업</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
