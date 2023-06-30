import Layout from "@components/Layout/layout";
import dummy from "../../dummy";
import { useParams } from "react-router-dom";
import React from "react";

const ProductDetail: React.FC = () => {
  const { id } = useParams();

  const productId = parseInt(id || "", 10);
  const product = dummy.find((data) => data.id === productId);

  if (!product) {
    return (
      <Layout>
        <div>상품을 찾을수없습니다.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div>
          <img className="w-96 h-96" src={product.img} alt={product.img} />
          <div className="flex items-center flex-col">
            <p>{product.description}</p>
            <p>{product.price} won</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
