import Footer from "./components/footer";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "./components/nav";
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
      <main>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <Slide1 />
          </div>
          <div>
            <Slide2 />
          </div>
        </Slider>
      </main>
      <Nav prev={prev} next={next} />
      <Footer />
    </>
  );
}

export default App;
