import img from "./assets/image-john.jpg";
import nextIcon from "./assets/icon-next.svg";
import prevIcon from "./assets/icon-prev.svg";

const Slide2 = ({ prev, next }) => {
  return (
    <>
      <article className="flex flex-col gap-10 text-center items-center">
        <div className="flex flex-col items-center">
          <img className="object-contain w-3/4" src={img} />
          <div className="-mt-6 bg-white justify-center shadow-sm flex gap-4 rounded-full z-10">
            <button className="p-2" onClick={prev}>
              <img src={prevIcon} />
            </button>
            <button className="p-2" onClick={next}>
              <img src={nextIcon} />
            </button>
          </div>
        </div>
        <div className="gap-4 flex flex-col">
          <q className="p-4 ~sm/2xl:~text-base/default">
            If you want to lay the best foundation possible I’d recommend taking
            this course. The depth the instructors go into is incredible. I now
            feel so confident about starting up as a professional developer.
          </q>
          <h2>John Tarkpor</h2>
          <span>Junior Front-end Developer</span>
        </div>
      </article>
    </>
  );
};

export default Slide2;
