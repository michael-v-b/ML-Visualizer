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

//textbox to highlight text that is in the middle of the screen
interface ScrollTextProps {
  text: string[]; //array of text to be highlighted each entry is a different paragraph
  backgroundColor?: string; //background color of the text box
  borderColor?: string; //color of border, will change depending on which section is being done
  height?: string; // height of textbox
  getIndex: Function; //get index of text that's highlighted
}

const ScrollText: React.FC<ScrollTextProps> = ({
  text,
  backgroundColor,
  borderColor,
  height,
  getIndex,
}) => {
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
      //make a textline for each value in the text array
      {text.map((item, key) => (
        <TextLine key={key} index={key} content={item} getIndex={getIndex} />
      ))}
      <div className={style.padding}></div>
    </div>
  );
};

export default ScrollText;
