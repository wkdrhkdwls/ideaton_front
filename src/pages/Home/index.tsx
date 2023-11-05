import $ from "jquery";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";
import Business from "@components/Business";
import IntroPage from "@components/Intro";
import Header from "@components/Layout/header";
import MadePage from "@components/Made";
import SharePage from "@components/Share";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    $("#fullpage").fullpage({
      menu: "#menu",
      anchors: ["", "", "", ""],
      sectionsColor: ["white", "white", "white", "white"],
    });

    return () => {
      if ($.fn.fullpage.destroy) {
        $.fn.fullpage.destroy("all");
      }
    };
  }, []);

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
        <div className="section" id={`#section3`}>
          <Business />
        </div>
        <div className="section" id={`#section4`}>
          <SharePage />
        </div>
      </div>
    </>
  );
};

export default Home;
