import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface DotProps {
  bgColor?: string;
}

const headerHeight = 60;

function getRandomY() {
  return Math.random() * (window.innerHeight - headerHeight) + headerHeight;
}

function getRandomX() {
  return Math.random() * window.innerWidth;
}

const Dot: React.FC<DotProps> = ({ bgColor = "white" }) => {
  const [direction, setDirection] = useState({
    YStart: null as number | null,
    YEnd: null as number | null,
    XStart: null as number | null,
    XEnd: null as number | null,
    isHorizontal: Math.random() > 0.5 ? true : false,
    key: 0,
  });

  const resetDirection = () => {
    let isHorizontal = Math.random() > 0.5 ? true : false;
    let isRight = Math.random() > 0.5 ? true : false;
    let tempYStart = getRandomY();
    let tempYEnd = getRandomY();
    let tempXStart = getRandomX();
    let tempXEnd = getRandomX();

    if (isHorizontal && isRight) {
      tempXStart = -50;
      tempXEnd = window.innerWidth;
    } else if (isHorizontal && !isRight) {
      tempXStart = window.innerWidth + 50;
      tempXEnd = 0;
    } else if (!isHorizontal && isRight) {
      tempYStart = -50;
      tempYEnd = window.innerHeight;
    } else {
      tempYStart = window.innerHeight + 50;
      tempYEnd = 0;
    }

    setDirection((prevDirection) => ({
      ...prevDirection,
      YStart: tempYStart,
      YEnd: tempYEnd,
      XStart: tempXStart,
      XEnd: tempXEnd,
      isHorizontal: Math.random() > 0.5 ? true : false,
      key: prevDirection.key + 1,
    }));
  };
  function handleAnimationComplete() {
    resetDirection();
  }

  useEffect(() => {
    resetDirection();
  }, []);

  return (
    <motion.div
      key={direction.key}
      style={{
        borderColor: bgColor,
        borderRadius: "100%",
        borderWidth: "3px",
        borderStyle: "solid",
        width: "10px",
        height: "10px",
        position: "absolute",
        top: 0,
      }}
      initial={{
        y: direction.YStart != null ? direction.YStart : headerHeight,
        x: direction.XStart != null ? direction.XStart : 0,
      }}
      animate={{
        x: direction.XEnd != null ? direction.XEnd : 0,
        y: direction.YEnd != null ? direction.YEnd : headerHeight,
      }}
      transition={{ delay: Math.random() * 5, duration: 5, ease: "linear" }}
      onAnimationComplete={handleAnimationComplete}
      className="dot"
    ></motion.div>
  );
};
export default Dot;
