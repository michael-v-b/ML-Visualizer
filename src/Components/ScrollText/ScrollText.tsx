import React, {
  ReactNode,
  MouseEventHandler,
  useRef,
  useEffect,
  useState,
} from "react";

import { motion, useScroll } from "framer-motion";

import style from "./ScrollText.module.css";
import TextLine from "./TextLine";

interface ScrollTextProps {
  text: string[];
  backgroundColor?: string;
  borderColor?: string;
  height?: string;
}

const ScrollText: React.FC<ScrollTextProps> = ({
  text,
  backgroundColor,
  borderColor,
  height,
}) => {
  const getIndex = (idx: number) => {
    console.log("string " + idx + " is centered.");
  };

  return (
    <div
      className={style.main}
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        height: height,
      }}
    >
      <div className={style.padding}></div>
      {text.map((item, key) => (
        <TextLine key={key} index={key} content={item} getIndex={getIndex} />
      ))}
      <div className={style.padding}></div>
    </div>
  );
};

export default ScrollText;
