import React, {
  ReactNode,
  MouseEventHandler,
  useRef,
  useEffect,
  useState,
} from "react";

interface UIProps {
  children?: ReactNode;
  id?: string;
  className?: string;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
  factor: number;
  onClick?: MouseEventHandler<HTMLElement>;
}

const Button: React.FC<UIProps> = ({
  children,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  factor,
  id,
}) => {
  let [originalColor, setOriginalColor] = useState<string>("");
  const elementRef = useRef<HTMLDivElement>(null);
  const element = elementRef.current;
  //change the background color by factor////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const changeBGColor = (factor: number) => {
    const blackFactor = 10;
    const minDarkness = 15;

    //extract color values from string from string
    let colorValuesString = originalColor.match(/\d+/g) || ["0", "0", "0"];
    let rgbArr = colorValuesString.map((numStr) => parseInt(numStr));

    //set rgb values, with change if the color is dark enough that the factor wouldn't impact it
    for (let i = 0; i < rgbArr.length; i++) {
      if (rgbArr[i] < minDarkness) {
        rgbArr[i] = rgbArr[i] + blackFactor;
      } else {
        rgbArr[i] = rgbArr[i] * factor;
      }
    }
    let colorString =
      "rgb(" + rgbArr[0] + "," + rgbArr[1] + "," + rgbArr[2] + ")";
    //set color
    if (element) {
      element.style.backgroundColor = colorString;
    }
  };
  //return background color to original/////////////////////////////////////////////////////////////////////////////////
  const returnBGColor = () => {
    if (element) {
      element.style.backgroundColor = originalColor;
    }
  };

  //get Background color////////////////////////////////////////////////////////////////////////////////////////////////
  const getBGColor = () => {
    if (elementRef.current) {
      return window.getComputedStyle(elementRef.current).backgroundColor;
    } else {
      return "no element found";
    }
  };

  //use effect so that background is get after div is rendered and reference is mounted
  useEffect(() => {
    const bgColor = getBGColor();
    setOriginalColor(bgColor);
  });

  //get color
  originalColor = getBGColor();

  return (
    <div
      ref={elementRef}
      className={className}
      id={id}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (onMouseEnter) {
          onMouseEnter(e);
        }
        changeBGColor(factor);
      }}
      onMouseLeave={(e) => {
        if (onMouseLeave) {
          onMouseLeave(e);
        }
        returnBGColor();
      }}
    >
      {children}
    </div>
  );
};
export default Button;
