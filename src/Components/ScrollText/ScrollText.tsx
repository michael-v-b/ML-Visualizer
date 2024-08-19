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
}

const ScrollText: React.FC<ScrollTextProps> = ({
  text,
  backgroundColor,
  borderColor,
}) => {
  return (
    <div
      className={style.main}
      style={{ backgroundColor: backgroundColor, borderColor: borderColor }}
    >
      {text.map((item, key) => (
        <TextLine key={key} content={item} />
      ))}
    </div>
  );
};

export default ScrollText;
