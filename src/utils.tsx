export const scaleElement = (elementId: string, factor: number) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.transform = "scale(" + factor + ")";
  } else {
    console.error("element is null");
  }
};

export const getBGColor = (elementRef: HTMLElement) => {
  if (elementRef.current) {
    return window.getComputedStyle(elementRef.current).backgroundColor;
  }
  return "no element found";
};
