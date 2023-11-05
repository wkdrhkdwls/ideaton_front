const Img1 = require("@assets/cukShare/1.jpg");
const Img2 = require("@assets/cukShare/2.jpg");
const Img3 = require("@assets/cukShare/3.jpg");
const Img4 = require("@assets/cukShare/4.jpg");
const Img5 = require("@assets/3.png");
const Img6 = require("@assets/cukShare/6.jpg");

const useProductDetail = [
  {
    id: 1,
    img: Img1,
    title: "수제비 정처기 실기",
    description: [""],
    price: 0,
  },
  {
    id: 2,
    img: Img2,
    title: "칼하트 백팩",
    description: [""],
    price: 0,
  },
  {
    id: 3,
    img: Img3,
    title: "노트북",
    description: [""],
    price: 0,
  },
  {
    id: 4,
    img: Img4,
    title: "당근",
    description: [""],
    price: 0,
  },
  {
    id: 5,
    img: Img5,
    title: "토끼",
    description: [""],
    price: 0,
  },
  {
    id: 6,
    img: Img6,
    title: "앨범커버",
    description: [""],
    price: 0,
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
