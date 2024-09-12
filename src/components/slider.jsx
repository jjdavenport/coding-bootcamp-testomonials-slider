import prev from "./assets/icon-prev.svg";
import next from "./assets/icon-next.svg";

const Slider = () => {
  return (
    <>
      <nav>
        <button>
          <img src={prev} />
        </button>
        <button>
          <img src={next} />
        </button>
      </nav>
    </>
  );
};

export default Slider;
