import Layout from "@components/Layout/layout";
import dummy from "../../dummy";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div className="mx-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">
          {dummy.map((data) => (
            <div key={data.id}>
              <Link to={`/product/${data.id}`}>
                <img src={data.img} alt={data.img} />
              </Link>
              <div className="flex flex-col">
                <p>id:{data.id}</p>
                <p>des:{data.description}</p>
                <p>pri:{data.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
