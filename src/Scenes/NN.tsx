import BgAnimation from "../Components/BgAnimation/BgAnimation";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import style from "./NN.module.css";
const NN = () => {
  return (
    <>
      <Header />
      <SideBar />
      <div className={style.main}>
        <BgAnimation />
      </div>
    </>
  );
};
export default NN;
