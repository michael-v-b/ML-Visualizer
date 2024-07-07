import React, { useState } from "react";

export const changeBackgroundColor = (elementId: string, factor: number) => {
  const element = document.getElementById(elementId);
  const blackFactor = 10;
  const minDarkness = 15;
  let originalColor = "";

  if (element) {
    originalColor = window.getComputedStyle(element).backgroundColor;
  } else {
    console.error(`Element with id ${elementId} not found.`);
    return null;
  }

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
  element.style.backgroundColor = colorString;
};

export const setBackgroundColor = (elementId: string, color: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.backgroundColor = color;
  } else {
    console.error("element is null");
  }
};

export const scaleElement = (elementId: string, factor: number) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.transform = "scale(" + factor + ")";
  } else {
    console.error("element is null");
  }
};
