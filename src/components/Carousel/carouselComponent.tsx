import dummy from "../../hooks/cmDummy";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface CarouselProps {
  currentIndex: number | undefined;
  handleChange: (index: number) => void;
}

const CarouselComponent: React.FC<CarouselProps> = ({
  currentIndex,
  handleChange,
}) => {
  const renderSlides = dummy.map((data) => (
    <div key={data.id}>
      <img src={data.img} alt={data.img} />
    </div>
  ));

  return (
    <div className="w-full sm:w-2/3 sm:mb-10 md:mb-1 md:w-[450px] lg:w-[550px] lg:mr-20 xl:w-[600px] xl:mr-20">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        selectedItem={currentIndex}
        onChange={handleChange}
      >
        {renderSlides}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
