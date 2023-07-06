const Img1 = require("@assets/1.png");
const Img2 = require("@assets/2.png");
const Img3 = require("@assets/3.png");
const Img4 = require("@assets/4.jpg");

const useProductDetail = [
  {
    id: 1,
    img: Img1,
    title: "진경옥 15ml * 30",
    description: "시간과 전통의 가치를 담아 삶에 건강을 더하다",
    price: 20000,
  },
  {
    id: 2,
    img: Img2,
    description: "2번 상품입니다.",
    price: 50200,
  },
  {
    id: 3,
    img: Img3,
    description: "3번 상품입니다.",
    price: 14000,
  },
  {
    id: 4,
    img: Img4,
    description: "4번 상품입니다.",
    price: 112310,
  },
];

export const PackageSales = {
  gift: 3000,
  eco: 0,
};

export const CouponSales = [
  { name: "1번 쿠폰", percent: 1 },
  { name: "2번 쿠폰", percent: 5 },
  { name: "3번 쿠폰", percent: 10 },
  { name: "4번 쿠폰", percent: 15 },
  { name: "5번 쿠폰", percent: 20 },
];

export default useProductDetail;
