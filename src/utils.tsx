export const scaleElement = (elementId: string, factor: number) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.transform = "scale(" + factor + ")";
  } else {
    console.error("element is null");
  }
};
