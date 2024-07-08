import "./Header.css";
import Button from "react-bootstrap/Button";
import { scaleElement } from "../../utils";
import UIElement from "../UIElement";

function Header() {
  const bgColor = "rgb(15, 7, 35)";
  const sideBarWidth = 300;
  const setSideBarWidth = (width: number) => {
    const side_bar = document.getElementById("side_bar");
    if (side_bar) {
      side_bar.style.width = "" + width + "px";
    }
  };

  return (
    <div className="header">
      <UIElement
        factor={1.2}
        className="list_wrapper"
        onClick={() => {
          setSideBarWidth(sideBarWidth);
        }}
        onMouseEnter={() => {
          scaleElement("list_icon", 1.05);
        }}
        onMouseLeave={() => {
          scaleElement("list_icon", 1 / 1.05);
        }}
      >
        <i id="list_icon" className="icon glyphicon glyphicon-list" />
      </UIElement>
      <h1 className="header_text">Machine Learning Concepts</h1>
      <div></div>
    </div>
  );
}
export default Header;
