import Layout from "@components/Layout/layout";
import $ from "jquery";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";

const Home = () => {
  $(() => {
    $("#fullpage").fullpage({
      menu: "#menu",
      anchors: ["1", "2", "3", "4"],
      sectionsColor: ["black", "blue", "red", "orange"],
    });
  });

  return (
    <Layout>
      <div id="fullpage">
        <div className="section" id="#section1">
          1번
        </div>
        <div className="section" id="#section2">
          2번
        </div>
        <div className="section" id="#section3">
          3번
        </div>
        <div className="section" id="#section4">
          4번
        </div>
      </div>
    </Layout>
  );
};

export default Home;
