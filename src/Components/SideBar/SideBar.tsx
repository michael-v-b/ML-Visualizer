import "./Sidebar.css";
import UIElement from "../UIElement";
import { scaleElement } from "../../utils";

function SideBar() {
  const closeBar = () => {
    console.log("close the side bar");
    const sideBar = document.getElementById("side_bar");
    if (sideBar) {
      sideBar.style.width = "0px";
    } else {
      console.error("sidebar is null");
    }
  };

  const closeBarColor = "rgb(53, 18, 76)";
  return (
    <div id="side_bar">
      <div id="text_wrapper">
        <UIElement
          factor={0.9}
          onMouseEnter={() => {
            scaleElement("home_icon", 1.05);
          }}
          onMouseLeave={() => {
            scaleElement("home_icon", 1 / 1.05);
          }}
          id="home"
        >
          <i id="home_icon" className="icon glyphicon glyphicon-home"></i>
          <h2>Home</h2>
        </UIElement>
        <hr />
        <span className="category" id="Regression">
          <h2 id="category_title">REGRESSION</h2>
          <hr />
          <UIElement factor={0.9} className="chapter">
            Basics
          </UIElement>
          <UIElement factor={0.9} className="chapter">
            Expected Loss
          </UIElement>
          <UIElement factor={0.9} className="chapter">
            Gradient Descent
          </UIElement>

          <UIElement factor={0.9} className="chapter">
            Bias Variance Tradeoff
          </UIElement>
          <UIElement factor={0.9} className="chapter">
            Regularization
          </UIElement>
        </span>
      </div>
      <UIElement
        factor={0.9}
        onClick={closeBar}
        onMouseEnter={() => {
          scaleElement("close_arrow", 1.2);
        }}
        onMouseLeave={() => {
          scaleElement("close_arrow", 1 / 1.2);
        }}
        id="close_bar"
      >
        <i className="icon glyphicon glyphicon-chevron-left" id="close_arrow" />
      </UIElement>
    </div>
  );
}

export default SideBar;
