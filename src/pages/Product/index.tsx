import Layout from "@components/Layout/layout";

const Img1 = require("@assets/1.png");
const Img2 = require("@assets/2.png");
const Img3 = require("@assets/3.png");
const Img4 = require("@assets/4.jpg");

const Product = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div className="mx-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">
          <img src={Img1} alt="Img1" />
          <img src={Img2} alt="Img2" />
          <img src={Img3} alt="Img3" />
          <img src={Img4} alt="Img4" />
        </div>
      </div>
    </Layout>
  );
};

export default Product;
