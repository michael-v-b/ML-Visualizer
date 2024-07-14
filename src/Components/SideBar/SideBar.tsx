import "./Sidebar.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { scaleElement } from "../../utils";

function SideBar() {
  const closeBar = () => {
    const sideBar = document.getElementById("side_bar");
    if (sideBar) {
      sideBar.style.width = "0px";
    } else {
      console.error("sidebar is null");
    }
  };

  const closeBarColor = "rgb(53, 18, 76)";
  const navigate = useNavigate();
  return (
    <div id="side_bar">
      <div id="text_wrapper">
        <Button
          factor={0.9}
          onClick={() => {
            navigate("/");
          }}
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
        </Button>
        <hr />
        <span className="category" id="Regression">
          <Button
            onClick={() => {
              navigate("/regression");
            }}
            factor={0.9}
            className="chapter"
            id="category_title"
          >
            <h2>REGRESSION</h2>
          </Button>
          <hr />
          <Button factor={0.9} className="chapter">
            Basics
          </Button>
          <Button factor={0.9} className="chapter">
            Expected Loss
          </Button>
          <Button factor={0.9} className="chapter">
            Gradient Descent
          </Button>

          <Button factor={0.9} className="chapter">
            Bias Variance Tradeoff
          </Button>
          <Button factor={0.9} className="chapter">
            Regularization
          </Button>
        </span>
      </div>
      <Button
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
      </Button>
    </div>
  );
}

export default SideBar;
