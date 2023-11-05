import $ from "jquery";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";
import sea from "@assets/fullpage/sea.mp4";
import grape from "@assets/fullpage/grape.mp4";
import food from "@assets/fullpage/food.mp4";

import Header from "@components/Layout/header";

const Home = () => {
  const videos = [sea, grape, food];

  $(() => {
    $("#fullpage").fullpage({
      menu: "#menu",
      anchors: ["1", "2", "3", "4"],
      sectionsColor: ["black", "black", "black", "white"],
    });
  });

  return (
    <>
      <Header />
      <div id="fullpage">
        {/* {videos.map((video, index) => (
          <div className="section" id={`#section${index}`}>
            <video
              className="h-full w-full object-cover"
              data-autoplay
              muted
              loop
            >
              <source data-src={video} type="video/mp4" />
            </video>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default Home;
