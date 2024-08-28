import React, { useRef, useState, useEffect, useCallback } from "react";

import { motion, useAnimation } from "framer-motion";

import style from "./TextLine.module.css";

interface TextLineProps {
  content: string;
}

const TextLine: React.FC<TextLineProps> = ({ content }) => {
  const controls = useAnimation();
  const divRef = useRef<HTMLDivElement>(null);
  const [isCentered, setIsCentered] = useState(false);
  const leeway = 100;

  //handleScroll detects if div is in the center
  const handleScroll = useCallback(() => {
    if (divRef.current) {
      const windowCenterY = (2 * window.innerHeight) / 3;
      const rect = divRef.current.getBoundingClientRect();
      const rectCenterY = rect.top + rect.height;
      setIsCentered(Math.abs(windowCenterY - rectCenterY) < leeway);
    }
  }, []);

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

  useEffect(() => {
    if (isCentered) {
      controls.start({
        scale: 1.1,
        color: "#FFFFFF",
        transition: { duration: 0.25 },
      });
    } else {
      //return it normal if not
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
