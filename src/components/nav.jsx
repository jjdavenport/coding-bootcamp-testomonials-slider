import nextIcon from "./assets/icon-next.svg";
import prevIcon from "./assets/icon-prev.svg";

const Nav = ({ prev, next }) => {
  return (
    <>
      <nav>
        <button onClick={prev}>
          <img src={prevIcon} />
        </button>
        <button onClick={next}>
          <img src={nextIcon} />
        </button>
      </nav>
    </>
  );
};

export default Nav;
