import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import style from "./Regression.module.css";
import React, { useEffect, useState, useRef } from "react";

const Regression = () => {
  const sectionRef = useRef(null);
  return (
    <div
      onWheel={() => {
        console.log("the wheel thing works!!");
      }}
      className={style.main}
    >
      <Header />
      <SideBar />
      <div className={style.image}></div>
      <div className={style.main_wrapper}>
        <div className={style.text_wrapper} />
        <div className={style.anim_wrapper}>
          <div
            ref={sectionRef}
            className={style.section}
            id={style.section_1}
          ></div>
          <div className={style.section} id={style.section_2}></div>
          <div className={style.section} id={style.section_3}></div>
          <div className={style.section} id={style.section_4}></div>
        </div>
      </div>
    </div>
  );
};
export default Regression;
