import Dot from "./Dot";
import style from "./BgAnimation.module.css";
import React, { useState } from "react";
import Line from "./Line";

interface Position {
  x: number;
  y: number;
}

interface BGProps {
  numDots?: number;
  color?: string;
}

const BG: React.FC<BGProps> = ({ numDots = 12, color = "#FFFFFF" }) => {
  const elementsArray = Array.from({ length: numDots });

  const [dotPositions, setDotPositions] = useState<Position[]>(
    Array(numDots).fill({ x: 0, y: 0 })
  );

  const handleDotPositionUpdate = (
    index: number,
    position: { x: number; y: number }
  ) => {
    setDotPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[index] = position;
      return newPositions;
    });
  };

  return (
    <>
      <div className={style.main}>
        {dotPositions.map((_, index) =>
          dotPositions.map((_, index2) => (
            <Line
              x1={dotPositions[index].x}
              x2={dotPositions[index2].x}
              y1={dotPositions[index].y}
              y2={dotPositions[index2].y}
              strokeColor={color}
            />
          ))
        )}
        ;
        {elementsArray.map((_, index) => (
          <Dot
            key={index}
            bgColor={color}
            onUpdatePosition={(position) =>
              handleDotPositionUpdate(index, position)
            }
          />
        ))}
      </div>
    </>
  );
};
export default BG;
