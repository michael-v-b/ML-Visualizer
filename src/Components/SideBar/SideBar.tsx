import "./Sidebar.css";
import {
  changeBackgroundColor,
  setBackgroundColor,
  scaleElement,
} from "../../utils";

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
        <span id="home">
          <i className="icon glyphicon glyphicon-home"> </i>
          <h2>Home</h2>
        </span>
        <span className="category" id="Regression">
          <hr />
          <h2>REGRESSION</h2>
          <hr />
          <span className="chapter">Basics</span>
          <span className="chapter">Expected Loss</span>
          <span className="chapter">Gradient Descent</span>
          <span className="chapter">Bias Variance Tradeoff</span>
          <span className="chapter">Regularization</span>
        </span>
      </div>
      <div
        onMouseEnter={() => {
          changeBackgroundColor("close_bar", 0.9);
          scaleElement("close_arrow", 1.2);
        }}
        onMouseLeave={() => {
          setBackgroundColor("close_bar", closeBarColor);
          scaleElement("close_arrow", 1 / 1.2);
        }}
        onClick={closeBar}
        id="close_bar"
      >
        <i className="icon glyphicon glyphicon-chevron-left" id="close_arrow" />
      </div>
    </div>
  );
}

export default SideBar;
