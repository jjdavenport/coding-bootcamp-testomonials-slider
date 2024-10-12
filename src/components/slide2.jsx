import img from "./assets/image-john.jpg";
import nextIcon from "./assets/icon-next.svg";
import prevIcon from "./assets/icon-prev.svg";

const Slide2 = ({ prev, next }) => {
  return (
    <>
      <article className="flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center bg-pattern bg-contain bg-center bg-no-repeat p-8">
          <img className="w-3/4 object-contain" src={img} />
          <div className="z-10 -mt-6 flex justify-center gap-4 rounded-full bg-white shadow-sm">
            <button className="p-3" onClick={prev}>
              <img className="h-4 object-contain" src={prevIcon} />
            </button>
            <button className="p-3" onClick={next}>
              <img className="h-4 object-contain" src={nextIcon} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <q className="bg-quote bg-half bg-top bg-no-repeat p-4 font-light text-darkBlue ~sm/2xl:~text-lg/default">
            If you want to lay the best foundation possible I’d recommend taking
            this course. The depth the instructors go into is incredible. I now
            feel so confident about starting up as a professional developer.
          </q>
          <div className="flex flex-col">
            <h2 className="font-bold text-darkBlue ~sm/2xl:~text-base/default">
              John Tarkpor
            </h2>
            <span className="font-medium text-grayishBlue ~sm/2xl:~text-base/default">
              Junior Front-end Developer
            </span>
          </div>
        </div>
      </article>
    </>
  );
};

export default Slide2;
