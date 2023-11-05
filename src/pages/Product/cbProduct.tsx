import Layout from "@components/Layout/layout";
import dummy from "@hooks/cbDummy";
import Banner from "@assets/CBucheo/CbBanner.png";

const CbProductPage = () => {
  return (
    <Layout>
      <div>
        <img className="w-full mb-10" src={Banner} alt="Banner" />
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">
            {dummy.map((data) => (
              <div key={data.id}>
                <img src={data.img} alt={data.img} />

                <div className="flex items-center flex-col">
                  <p>{data.title}</p>
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CbProductPage;
