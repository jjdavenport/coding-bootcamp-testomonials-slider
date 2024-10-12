import img from "./assets/image-tanya.jpg";

const Slide1 = () => {
  return (
    <>
      <article>
        <img src={img} />
        <p>
          I’ve been interested in coding for a while but never taken the jump,
          until now. I couldn’t recommend this course enough. I’m now in the job
          of my dreams and so excited about the future.
        </p>
        <h1>Tanya Sinclair</h1>
        <span>UX Engineer</span>
      </article>
    </>
  );
};

export default Slide1;
