import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//on load sets scroll bar to top of screen
const ScrollToTop = () => {
  const path = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return null;
};

export default ScrollToTop;
