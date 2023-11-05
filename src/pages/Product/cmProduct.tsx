import Layout from "@components/Layout/layout";
import dummy from "../../hooks/cmDummy";
import { Link } from "react-router-dom";

const CmProductPage = () => {
  return (
    <Layout>
      <div>
        <div className="flex justify-center items-center h-screen">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">
            {dummy.map((data) => (
              <div key={data.id}>
                <Link to={`/cmproduct/${data.id}`}>
                  <img
                    className="w-[400px] h-[300px] sm:w-[150px] sm:h-[150px]"
                    src={data.img}
                    alt={data.img}
                  />
                </Link>
                <div className="flex items-center flex-col">
                  <p>{data.title}</p>
                  {/* <p>{data.description}</p> */}
                  <p>{data.price}원</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CmProductPage;
