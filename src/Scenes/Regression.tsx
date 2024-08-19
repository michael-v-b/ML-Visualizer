import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import style from "./Regression.module.css";
import ScrollText from "../Components/ScrollText/ScrollText";
import React, { useEffect, useState, useRef } from "react";

const Regression = () => {
  return (
    <div className={style.main}>
      <Header />
      <SideBar />

      <div className={style.image}></div>
      <div className={style.main_wrapper}>
        <ScrollText
          backgroundColor="rgb(48, 48, 48)"
          borderColor="rgb(216, 94, 94)"
          text={["temp"]}
        />

        <div className={style.anim_wrapper}></div>
      </div>
    </div>
  );
};
export default Regression;
