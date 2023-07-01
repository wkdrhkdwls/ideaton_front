import dummy from "../../dummy";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import React, { useState } from "react";

const renderSlides = dummy.map((data) => (
  <div key={data.id}>
    <img src={data.img} alt={data.img} />
  </div>
));

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState<number | undefined>(
    undefined
  );

  const productId = parseInt(id || "", 10);
  const product = dummy.find((data) => data.id === productId);

  if (!product) {
    return (
      <div>
        <div>상품을 찾을수없습니다.</div>
      </div>
    );
  }

  function handleChange(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <div className="lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">
        <div className="flex flex-row sm:flex-col md:flex-col  h-screen mt-40  lg:mt-20 xl:mt-40   sm:items-center md:items-center">
          <div className="w-full sm:w-2/3 sm:mb-10 md:mb-10 md:w-[450px] lg:w-[550px] lg:mr-20 xl:w-[600px] xl:mr-20 ">
            <Carousel
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              selectedItem={currentIndex}
              onChange={handleChange}
            >
              {renderSlides}
            </Carousel>
          </div>
          <div className="flex flex-col mt-8 sm:mt-0 sm:mx-2">
            <span className="text-3xl text-start font-semibold mb-2 sm:text-xl ">
              {product.title}
            </span>
            <span className="text-3xl text-start font-semibold mb-2 sm:text-xl lg:hidden xl:hidden ">
              {product.description}
            </span>
            <span className="text-2xl text-right font-bold sm:text-xl sm:text-start">
              {product.price}원
            </span>
          </div>
        </div>
        <div className="flex justify-between mb-10">
          <button className="w-1/3 border-2 border-black p-6 rounded-xl">
            선물포장
          </button>
          <button className="w-1/3 border-2 border-black p-6 rounded-xl">
            에코포장
          </button>
        </div>
        <div className="mb-10">
          <button className="w-1/3 border-2 border-black p-6 rounded-xl">
            수량
          </button>
        </div>
        <div className="flex justify-between mb-10">
          <button className="w-1/3 border-2 border-black p-6 rounded-xl">
            정기배송
          </button>
          <button className="w-1/3 border-2 border-black p-6 rounded-xl">
            정기배송안함
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
