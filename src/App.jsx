import Footer from "./components/footer";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "./components/slide-1";
import Slide2 from "./components/slide2";

function App() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <div className="relative flex h-full min-h-screen flex-col bg-curve bg-left-bottom bg-no-repeat font-custom text-default">
        <main className="flex flex-1 flex-col justify-center py-4">
          <Slider ref={sliderRef} {...settings}>
            <div>
              <Slide1 prev={prev} next={next} />
            </div>
            <div>
              <Slide2 prev={prev} next={next} />
            </div>
          </Slider>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
