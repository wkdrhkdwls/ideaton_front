import dummy from "../../dummy";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="mx-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">
          {dummy.map((data) => (
            <div key={data.id}>
              <Link to={`/product/${data.id}`}>
                <img src={data.img} alt={data.img} />
              </Link>
              <div className="flex items-center flex-col">
                <p>{data.title}</p>
                <p>{data.description}</p>
                <p>{data.price}원</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
