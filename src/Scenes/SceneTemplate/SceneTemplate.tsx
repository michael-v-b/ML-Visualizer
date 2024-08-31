import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import ScrollText from "../../Components/ScrollText/ScrollText";
import ScrollImage from "../../Components/ScrollImage/ScrollImage";
import Footer from "../../Components/Footer/Footer";
import React, { useEffect, useState, useRef, ReactNode } from "react";
import * as images from "../../Assets";
import style from "./SceneTemplate.module.css";

interface SceneTemplateProps {
  height?: string;
  title?: string;
  text: string[];
  borderColor?: string;
  images: ReactNode[];
  nextText?: string;
  prevText?: string;
  nextPage?: string;
  prevPage?: string;
}

const SceneTemplate: React.FC<SceneTemplateProps> = ({
  height,
  title,
  text,
  borderColor,
  images,
  nextText,
  prevText,
  nextPage,
  prevPage,
}) => {
  const [index, setIndex] = useState(0);
  const getIndex = (idx: number) => {
    setIndex(idx);
  };

  return (
    <div className={style.main}>
      <Header title={title} />
      <SideBar />

      <div className={style.image}></div>
      <div className={style.main_wrapper} style={{ height: height }}>
        <ScrollText
          getIndex={getIndex}
          backgroundColor="rgb(48, 48, 48)"
          borderColor={borderColor}
          height={height}
          text={text}
        />

        <div className={style.anim_wrapper} style={{ height: height }}>
          <ScrollImage images={images} index={index}></ScrollImage>
        </div>
      </div>
      <Footer
        nextText={nextText}
        nextPage={nextPage}
        prevText={prevText}
        prevPage={prevPage}
      />
    </div>
  );
};
export default SceneTemplate;
