import React, { useRef, useState, useEffect, useCallback } from "react";

import { motion, useAnimation } from "framer-motion";

import style from "./TextLine.module.css";

//sets text property to be of content as text and index as an identifier
interface TextLineProps {
  content: string; //text of highlighted point
  index: number; //unique index for text
  getIndex: Function; //method to retrieve unique index
}

const TextLine: React.FC<TextLineProps> = ({ content, index, getIndex }) => {
  const controls = useAnimation(); //controls is animation
  const divRef = useRef<HTMLDivElement>(null); //reference for div
  const [isCentered, setIsCentered] = useState(false); //variable for if it's centered
  const leeway = 100; //the padding for what is considered the "middle" of the screen

  // returns true if text is in the middle of the screen
  const handleScroll = useCallback(() => {
    if (divRef.current) {
      const windowCenterY = (2 * window.innerHeight) / 3;
      const rect = divRef.current.getBoundingClientRect();
      const rectCenterY = rect.top + rect.height;
      setIsCentered(Math.abs(windowCenterY - rectCenterY) < leeway);
    }
  }, []);

  //on scroll test if text is in the center
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();
    // Animation if it's centered

    //removed for memory leakage
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  // if text is centered, grow it, highlight it and return index
  useEffect(() => {
    if (isCentered) {
      //return index
      getIndex(index + 1);
      //highlight text
      controls.start({
        scale: 1.1,
        color: "#FFFFFF",
        transition: { duration: 0.25 },
      });
    } else {
      //return it normal if not
      //highlight text
      controls.start({
        scale: 1,
        color: "#9A9A9A",
        transition: { duration: 0.25 },
      });
    }
  }, [isCentered, controls]);

  return (
    <motion.div ref={divRef} animate={controls} className={style.main}>
      {content}
    </motion.div>
  );
};
export default TextLine;
