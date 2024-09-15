import Dot from "./Dot";
import style from "./BgAnimation.module.css";
import React, { useState } from "react";
import Line from "./Line";

//position for initial dots
interface Position {
  x: number; // sets x value in dot coordinates
  y: number; // sets y value in dot coordinates
}

//tells number of dots and color
interface BGProps {
  numDots?: number; //sets number of dots
  color?: string; //sets color of dot
}

const BG: React.FC<BGProps> = ({ numDots = 12, color = "#FFFFFF" }) => {
  const elementsArray = Array.from({ length: numDots });

  //initialize each dot position
  const [dotPositions, setDotPositions] = useState<Position[]>(
    Array(numDots).fill({ x: 0, y: 0 })
  );

  //update dot position to make animation
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
        //initialize each line associated with dots
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
        ; //initialize dot array
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
