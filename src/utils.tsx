export const changeBackgroundColor = (elementId: string, color: string) => {
  const element = document.getElementById(elementId);

  if (element) {
    let originalColor = element.style.backgroundColor;
  } else {
    console.error(`Element with id ${elementId} not found.`);
    return null;
  }
};
