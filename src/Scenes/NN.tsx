import BG from "../Components/BGAnimation/BGAnimation";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import style from "./NN.module.css";
const NN = () => {
  return (
    <>
      <Header />
      <SideBar />
      <div className={style.main}></div>
    </>
  );
};
export default NN;
