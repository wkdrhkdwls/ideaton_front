import dummy, { CouponSales } from "@hooks/csDummy";
import React, { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CarouselComponent from "@components/Carousel/carouselComponent";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Layout from "@components/Layout/layout";

interface PaymentState {
  quantity: number;
  totalAmount: number;
  productTitle: string | undefined;
  img: any;
}

const CsProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentIndex, setCurrentIndex] = useState<number | undefined>(
    undefined
  );
  const [showDiscountOptions, setShowDiscountOptions] =
    useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const [selectedCoupons, setSelectedCoupons] = useState<
    Array<{ name: string; percent: number }>
  >([]);
  const [totalDiscount, setTotalDiscount] = useState<number>(0);
  const [additionalValue, setAdditionalValue] = useState<number>(0);

  const productId: number = parseInt(id || "", 10);
  const product = dummy.find((data) => data.id === productId) || {
    id: 0,
    img: "",
    title: "",
    description: "",
    price: 0,
  };
  const boxRef = useRef<any>(null);
  const [ScrollY, setScrollY] = useState<any>(0);
  const [ScrollActive, setScrollActive] = useState<any>(0);

  function logit() {
    setScrollY(boxRef.current.scrollTop);
    if (boxRef.current.scrollTop > 30) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }
  useEffect(() => {
    function watchScroll() {
      const scrollBox = boxRef.current;
      scrollBox.addEventListener("scroll", logit);

      return () => {
        scrollBox.removeEventListener("scroll", logit);
      };
    }
    watchScroll();
  }, []);

  function handleChange(index: number) {
    setCurrentIndex(index);
  }

  function toggleDiscountOptions() {
    setShowDiscountOptions(!showDiscountOptions);
  }

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const increaseValue = () => {
    setAdditionalValue(additionalValue + 3000);
  };

  const decreaseValue = () => {
    if (additionalValue >= 3000) {
      setAdditionalValue(additionalValue - 3000);
    }
  };

  const handleCouponSelection = (coupon: {
    name: string;
    percent: number;
  }): void => {
    if (selectedCoupons.includes(coupon)) {
      setSelectedCoupons(selectedCoupons.filter((item) => item !== coupon));
    } else {
      setSelectedCoupons([...selectedCoupons, coupon]);
    }
  };

  const handleSelectionComplete = (): void => {
    const discountPercentages: number[] = selectedCoupons.map(
      (coupon) => coupon.percent
    );
    const totalDiscount: number = discountPercentages.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    setTotalDiscount(totalDiscount);

    setShowDiscountOptions(false);
  };

  const totalAmount =
    quantity * product.price +
    additionalValue -
    product.price * 0.01 * totalDiscount;
  // 값을 넘겨주는것은 아래 state에다가 추가하면된다.
  const state: PaymentState = {
    img: product.img,
    productTitle: product.title,
    quantity: quantity,

    totalAmount: totalAmount,
  };

  if (!product) {
    return (
      <div>
        <div>Item not found.</div>
      </div>
    );
  }

  return (
    <Layout>
      <div>
        <div className="">
          <div className="relative w-full flex flex-row sm:flex-col md:flex-col my-40 lg:mt-20 xl:mt-40 sm:items-center md:items-center">
            <div>
              <CarouselComponent
                currentIndex={currentIndex}
                handleChange={handleChange}
              />
            </div>
            <div
              ref={boxRef}
              className="w-2/3 h-[600px] overflow-y-auto flex flex-col mt-8 sm:mt-0 sm:mx-2"
            >
              <div>
                {/* 타이틀 */}
                <div className="flex flex-col font-semibold">
                  <span className="text-2xl mb-4 sm:text-xl">
                    {product.title}
                  </span>
                  <span className="text-2xl mb-4 sm:text-xl">
                    {Array.isArray(product.description) &&
                      product.description.map((item: string, index: number) => (
                        <p key={index}>{item}</p>
                      ))}
                  </span>
                  <span className="text-2xl  font-bold mb-4 sm:text-xl sm:text-start">
                    {product.price}원
                  </span>
                </div>
                {/* 타이틀 */}
                {/* 수량 */}
                <div className="flex justify-between">
                  <span>수량</span>
                  <div className="flex flex-row gap-1">
                    <button
                      onClick={decreaseQuantity}
                      className="border-2 border-black"
                    >
                      <FaArrowDown />
                    </button>
                    <p>{quantity}</p>
                    <button
                      onClick={increaseQuantity}
                      className="border-2 border-black"
                    >
                      <FaArrowUp />
                    </button>
                  </div>
                </div>
                {/* 수량 */}
                <div>
                  <div>
                    <div className="mb-10">
                      <button
                        className="w-full border-2 border-black p-6 rounded-xl"
                        onClick={toggleDiscountOptions}
                      >
                        {selectedCoupons.length > 0 ? (
                          <>
                            {selectedCoupons.map((coupon, index) => (
                              <span key={index}>{coupon.name} </span>
                            ))}
                            ({totalDiscount}%)
                          </>
                        ) : (
                          "할인 혜택"
                        )}
                      </button>
                    </div>
                    {showDiscountOptions && (
                      <div className="mb-10">
                        <div className="grid grid-cols-2 gap-4 mb-10">
                          {CouponSales.map((coupon, index) => (
                            <button
                              className={`border-2 border-black p-6 rounded-xl ${
                                selectedCoupons.includes(coupon)
                                  ? "bg-gray-200"
                                  : ""
                              }`}
                              key={index}
                              onClick={() => handleCouponSelection(coupon)}
                            >
                              {coupon.name} ({coupon.percent}%)
                            </button>
                          ))}
                        </div>
                        <div>
                          <button
                            className="border-2 border-black p-6 rounded-xl"
                            onClick={handleSelectionComplete}
                          >
                            쿠폰 선택하기
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between mb-10">
                    <button className="w-full border-2 border-black p-6 rounded-xl">
                      <div className="flex justify-between">
                        <span>적립금 사용</span>
                        {/* 적립금 가격이 들어갈 것 */}
                        <span>0원</span>
                        {/* 적립금 가격이 들어갈 것 */}
                      </div>
                    </button>
                  </div>
                  <div className="mb-10 w-full border-2 border-black p-6 rounded-xl">
                    <div className="flex justify-between">
                      <span>상품금액</span>
                      <div className="flex flex-row gap-1">
                        <p>{quantity * product.price}원</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <span>할인혜택</span>
                      <div className="flex flex-row gap-1">
                        <p>-{product.price * 0.01 * totalDiscount}</p>
                        {/* 만약 수량에 상관이 없이 할인이 들어가면 quntity 넣어줌되요 */}
                      </div>
                    </div>
                  </div>
                  <p className="text-right">총액 : {totalAmount}</p>
                  <div className="flex text-center justify-between mb-10">
                    <Link
                      to="/pay"
                      state={state}
                      className="w-1/3 border-2 bg-yellow-300 border-black p-6 rounded-xl"
                    >
                      <div>결제하기</div>
                    </Link>
                    <Link
                      to="#"
                      className="w-1/3 border-2 border-black p-6 rounded-xl"
                    >
                      <div>장바구니</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CsProductDetail;
