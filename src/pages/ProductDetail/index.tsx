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
      <div className="">
        <div className="flex flex-row sm:flex-col justify-evenly h-screen mt-10 sm:mt-0">
          <div className="w-full sm:w-full sm:justify-center md:w-[450px] lg:w-[550px] xl:w-[600px] ">
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
        <div>
          <button>선물포장</button>
          <button>일반포장</button>
          <button>일반구매</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
