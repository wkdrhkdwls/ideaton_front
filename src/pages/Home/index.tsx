import Layout from "@components/Layout/layout";
import $ from "jquery";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";
import FullpageSection from "@components/Fullpage/fullpageSection";

const Home = () => {
  $(() => {
    $("#fullpage").fullpage({
      menu: "#menu",
      anchors: ["1", "2", "3"],
      sectionsColor: ["black", "black", "black"],
    });
  });

  return (
    <Layout>
      <div id="fullpage">
        <FullpageSection />
      </div>
    </Layout>
  );
};

export default Home;
