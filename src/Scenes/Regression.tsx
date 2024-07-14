import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import style from "./Regression.module.css";

const Regression = () => {
  return (
    <div className={style.main}>
      <Header />
      <SideBar />
      <div className={style.image}></div>
      <div className={style.main_wrapper}>
        <div className={style.text_wrapper} />
        <div className={style.anim_wrapper} />
      </div>
    </div>
  );
};
export default Regression;
