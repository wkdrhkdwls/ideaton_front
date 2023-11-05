const Img1 = require("@assets/CBucheo/1.jpg");
const Img2 = require("@assets/CBucheo/2.jpg");
const Img3 = require("@assets/CBucheo/3.jpg");

const useProductDetail = [
  {
    id: 1,
    img: Img1,
    title: "덕분애",
    description: ["제로웨이스트 생활용품점"],
    price: 20000,
  },
  {
    id: 2,
    img: Img2,
    title: "지구샵",
    description: ["제로웨이스트 생활용품점"],
    price: 50200,
  },
  {
    id: 3,
    img: Img3,
    title: "제로마켓",
    description: ["제로웨이스트 매장"],
    price: 14000,
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
