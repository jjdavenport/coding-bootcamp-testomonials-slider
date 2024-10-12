import img from "./assets/image-tanya.jpg";
import nextIcon from "./assets/icon-next.svg";
import prevIcon from "./assets/icon-prev.svg";

const Slide1 = ({ prev, next }) => {
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
            I’ve been interested in coding for a while but never taken the jump,
            until now. I couldn’t recommend this course enough. I’m now in the
            job of my dreams and so excited about the future.
          </q>
          <h1>Tanya Sinclair</h1>
          <span>UX Engineer</span>
        </div>
      </article>
    </>
  );
};

export default Slide1;
