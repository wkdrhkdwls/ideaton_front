import Layout from "@components/Layout/layout";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  return (
    <Layout>
      <div>
        <p>{id}</p>
      </div>
    </Layout>
  );
};

export default ProductDetail;
