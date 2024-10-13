import img from "./assets/image-tanya.jpg";
import nextIcon from "./assets/icon-next.svg";
import prevIcon from "./assets/icon-prev.svg";

const Slide1 = ({ prev, next }) => {
  return (
    <>
      <article className="flex flex-col items-center gap-10 text-center md:flex-row-reverse md:justify-center md:gap-0 md:text-left">
        <div className="flex flex-col items-center bg-pattern bg-contain bg-center bg-no-repeat ~md/xl:~p-8/20 md:w-1/2">
          <img className="w-3/4 object-contain md:w-full" src={img} />
          <div className="z-10 -mt-8 flex justify-center gap-4 rounded-full bg-white shadow-sm ~md/xl:~-ml-0/60 md:gap-3">
            <button className="p-3 md:p-5" onClick={prev}>
              <img className="h-4 object-contain md:h-5" src={prevIcon} />
            </button>
            <button className="p-3 md:p-5" onClick={next}>
              <img className="h-4 object-contain md:h-5" src={nextIcon} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:z-10 md:-mr-20 md:w-1/2 md:gap-6 md:p-0 lg:-mr-36 xl:-mr-48">
          <q className="md:bg-quarter md:bg-leftTop bg-quote bg-half bg-top bg-no-repeat p-4 font-light text-darkBlue ~sm/2xl:~text-lg/default md:p-0">
            I’ve been interested in coding for a while but never taken the jump,
            until now. I couldn’t recommend this course enough. I’m now in the
            job of my dreams and so excited about the future.
          </q>
          <div className="flex flex-col md:flex-row md:gap-3">
            <h1 className="font-bold text-darkBlue ~sm/xl:~text-base/2xl">
              Tanya Sinclair
            </h1>
            <span className="font-medium text-grayishBlue ~sm/xl:~text-base/2xl">
              UX Engineer
            </span>
          </div>
        </div>
      </article>
    </>
  );
};

export default Slide1;
