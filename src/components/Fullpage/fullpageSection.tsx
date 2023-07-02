import sea from "@assets/fullpage/sea.mp4";
import grape from "@assets/fullpage/grape.mp4";
import food from "@assets/fullpage/food.mp4";

const fullpageSection = () => {
  const videos = [sea, grape, food];

  return (
    <>
      {videos.map((video, index) => (
        <div className="section" id={`#section${index}`}>
          <video
            className="h-full w-full object-cover"
            data-autoplay
            muted
            loop
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      ))}
    </>
  );
};

export default fullpageSection;
