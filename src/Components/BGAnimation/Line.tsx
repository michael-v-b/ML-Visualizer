import React from "react";
import { motion } from "framer-motion";

//draw a line from x1,y1 to y1,y2 of color strokeColor
interface LineProps {
  x1: number; //x coordinate for startint point of line
  x2: number; //x coordinate for ending point of line
  y1: number; //y coordinate for starting point of line
  y2: number; //y coordinates for ending point of line
  strokeColor?: string; //color of line
}

const Line: React.FC<LineProps> = ({
  x1,
  x2,
  y1,
  y2,
  strokeColor = "white",
}) => {
  return (
    <motion.svg
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        transition: "transform ease 1s",
      }}
    >
      <line
        x1={x1}
        x2={x2}
        y1={y1}
        y2={y2}
        stroke={strokeColor}
        strokeWidth="2"
      />
      <circle>x=</circle>
    </motion.svg>
  );
};

export default Line;
