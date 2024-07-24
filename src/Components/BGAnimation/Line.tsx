import React from "react";
import { motion } from "framer-motion";

interface LineProps {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  strokeColor?: string;
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
