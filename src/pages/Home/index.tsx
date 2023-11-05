import $ from "jquery";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";
import Business from "@components/Business";
import IntroPage from "@components/Intro";
import Header from "@components/Layout/header";
import MadePage from "@components/Made";
import SharePage from "@components/Share";

const Home = () => {
  $(() => {
    $("#fullpage").fullpage({
      menu: "#menu",
      anchors: ["main", "cm", "cb", "cs"],
      sectionsColor: ["white", "white", "white", "white"],
    });
  });

  return (
    <>
      <Header />
      <div id="fullpage" className="bg-white">
        <div className="section" id={`#section1`}>
          <IntroPage />
        </div>
        <div className="section" id={`#section2`}>
          <MadePage />
        </div>
        <div className="section" id={`#section2`}>
          <Business />
        </div>

        <div className="section" id={`#section2`}>
          <SharePage />
        </div>
      </div>
    </>
  );
};

export default Home;
