import { motion, MotionValue, ResolvedValues } from "framer-motion";
import React, { useState, useEffect } from "react";

interface DotProps {
  bgColor?: string;
  onUpdatePosition: (position: { x: number; y: number }) => void;
}

const headerHeight = 60;

function getRandomY() {
  return Math.random() * (window.innerHeight - headerHeight) + headerHeight;
}

function getRandomX() {
  return Math.random() * window.innerWidth;
}
function getRandomWall() {
  const wallNum = Math.random();
  if (wallNum < 0.25) {
    return "top";
  } else if (wallNum < 0.5) {
    return "right";
  } else if (wallNum < 0.75) {
    return "bottom";
  } else {
    return "left";
  }
}

const Dot: React.FC<DotProps> = ({ bgColor = "white", onUpdatePosition }) => {
  const [direction, setDirection] = useState({
    YStart: null as number | null,
    YEnd: null as number | null,
    XStart: null as number | null,
    XEnd: null as number | null,
    wall: null as string | null,
    key: 0,
  });

  const minSpeed = 8;
  const maxSpeed = 5;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const resetDirection = () => {
    let newWall = getRandomWall();
    while (direction.wall == newWall) {
      newWall = getRandomWall();
    }

    let tempYStart = direction.YEnd ?? getRandomY();
    let tempXStart = direction.XEnd ?? getRandomX();

    let tempYEnd = getRandomY();
    let tempXEnd = getRandomX();

    if (newWall == "top") {
      tempYEnd = 0;
    } else if (newWall == "right") {
      tempXEnd = window.innerWidth;
    } else if (newWall == "left") {
      tempXEnd = 0;
    } else if ((newWall = "bottom")) {
      tempYEnd = window.innerHeight;
    }

    setDirection((prevDirection) => ({
      ...prevDirection,
      YStart: tempYStart,
      YEnd: tempYEnd,
      XStart: tempXStart,
      XEnd: tempXEnd,
      isHorizontal: Math.random() > 0.5 ? true : false,
      key: prevDirection.key + 1,
      wall: newWall,
    }));
  };

  function handleAnimationComplete() {
    resetDirection();
  }

  const handleUpdate = (latest: ResolvedValues) => {
    let newPos = {
      x: latest.cx as number,
      y: latest.cy as number,
    };
    setPosition(newPos);
    onUpdatePosition(newPos);
  };

  useEffect(() => {
    resetDirection();
  }, []);

  return (
    <>
      <svg
        width="100vw"
        height="100vh"
        style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
      >
        <motion.circle
          key={direction.key}
          fill={bgColor}
          cx={direction.XStart ?? 0}
          cy={direction.YStart ?? headerHeight}
          r="7"
          animate={{
            cx: direction.XEnd ?? 0,
            cy: direction.YEnd ?? headerHeight,
          }}
          transition={{
            duration: Math.random() * (maxSpeed - minSpeed) + minSpeed,
            ease: "linear",
          }}
          onUpdate={handleUpdate}
          onAnimationComplete={handleAnimationComplete}
          className="dot"
        ></motion.circle>
      </svg>
    </>
  );
};
export default Dot;
