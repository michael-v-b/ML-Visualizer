import { motion, MotionValue, ResolvedValues } from "framer-motion";
import React, { useState, useEffect } from "react";

//have background color and an updateposition method
interface DotProps {
  bgColor?: string; //set background color to string
  onUpdatePosition: (position: { x: number; y: number }) => void; //method that updates position of dot
}

const headerHeight = 60; //used to account for header in collision

//set a random y for the dot to go to
function getRandomY() {
  return Math.random() * (window.innerHeight - headerHeight) + headerHeight;
}

//set a random x for the dot to go to
function getRandomX() {
  return Math.random() * window.innerWidth;
}

//random wall for dot to go to
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

//property that initializes the values of the dot components
const Dot: React.FC<DotProps> = ({ bgColor = "white", onUpdatePosition }) => {
  const [direction, setDirection] = useState({
    YStart: null as number | null, //y value of the starting coordinate of the dot
    YEnd: null as number | null, //y value of the ending coordinate of the dot
    XStart: null as number | null, //x avlue of the starting coordinate of the dot
    XEnd: null as number | null, //x value of the starting coordinate of the dot
    wall: null as string | null, //says which wall the dot will be heading to
    key: 0,
  });

  const minSpeed = 8; //minimum speed of dot (in seconds)
  const maxSpeed = 5; //maximum speed of dot (in seconds)
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //changes the direction of the dot to go to a random wall
  //it will not repeat walls
  const resetDirection = () => {
    let newWall = getRandomWall();
    while (direction.wall == newWall) {
      newWall = getRandomWall();
    }
    //set random starting coordinates
    let tempYStart = direction.YEnd ?? getRandomY();
    let tempXStart = direction.XEnd ?? getRandomX();

    //set random ending coordinates
    let tempYEnd = getRandomY();
    let tempXEnd = getRandomX();

    //set specific values depending on which wall the dot is heading towards
    if (newWall == "top") {
      tempYEnd = 0;
    } else if (newWall == "right") {
      tempXEnd = window.innerWidth;
    } else if (newWall == "left") {
      tempXEnd = 0;
    } else if ((newWall = "bottom")) {
      tempYEnd = window.innerHeight;
    }

    // set direction of dot, done by setting wall
    setDirection((prevDirection) => ({
      ...prevDirection, //previous goal point to set to starting point
      YStart: tempYStart, //starting y coordinate
      YEnd: tempYEnd, //ending y coordinates
      XStart: tempXStart, //starting x coordinates
      XEnd: tempXEnd, //ending x coordinates
      key: prevDirection.key + 1, //index of dot
      wall: newWall, //sets new wall to bounce too
    }));
  };

  //after the dot reaches the wall it will change direction to another wall
  function handleAnimationComplete() {
    resetDirection();
  }

  //every frame the program records the position of the dot (for drawing lines)
  const handleUpdate = (latest: ResolvedValues) => {
    let newPos = {
      x: latest.cx as number,
      y: latest.cy as number,
    };
    setPosition(newPos);
    onUpdatePosition(newPos);
  };

  //sets random direction at first load
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
