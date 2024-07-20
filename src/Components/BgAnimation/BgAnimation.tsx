import Dot from "./Dot";
import style from "./BgAnimation.module.css";

const BG = () => {
  const elementsArray = Array.from({ length: 50 });
  return (
    <div className={style.main}>
      {elementsArray.map((_, index) => (
        <Dot />
      ))}
    </div>
  );
};
export default BG;
