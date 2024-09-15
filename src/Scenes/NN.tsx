import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import style from "./NN.module.css";
import RiveComponent from "@rive-app/react-canvas";
import ComingSoon from "../Assets/coming_soon.riv";
const NN = () => {
  return (
    <>
      <Header />
      <SideBar />
      <div className={style.main}>
        <RiveComponent src={ComingSoon} />
      </div>
    </>
  );
};
export default NN;
