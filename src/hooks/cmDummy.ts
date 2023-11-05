const Img1 = require("@assets/cukMade/1.png");
const Img2 = require("@assets/cukMade/2.png");
const Img3 = require("@assets/cukMade/3.png");
const Img4 = require("@assets/cukMade/4.png");

const useProductDetail = [
  {
    id: 1,
    img: Img1,
    title: "구슬 그립톡",
    description: ["직접 제작"],
    price: 8000,
  },
  {
    id: 2,
    img: Img2,
    title: "리코그린 998 텀블러",
    description: [
      "'리코그린' : Recovery + Green",
      "'998' : 현재 원두의 99.8%가 커피박(커피찌꺼기)으로 폐기되고 있습니다.",
      "컵과 빨대 모두 100% 친환경 소재",
      "튼튼한 내구성과 깨질 위험, 음료 누출 위험 X",
      "텀블러 세척기, 식기세척기로 간편 세척가능",
      "다양한 음료 섭취를 위한 빨대 판매(세척솔 동봉)",
      "버려지는 원두 포대 자루를 수선하여 슬리브 제작",
    ],
    price: 9900,
  },
  {
    id: 3,
    img: Img3,
    title: "독희의 애착인형 키링",
    description: ["애착인형 키링"],
    price: 12000,
  },
  {
    id: 4,
    img: Img4,
    title: "쿠키",
    description: [
      "🍪누네띠네쿠키: 1500원",
      "🍪 초코칩쿠키: 1800원",
      "🍪 레드벨벳쿠키: 2000원",
      "🍪 초코나무숲쿠키: 2000원",
    ],
    price: 10000,
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
