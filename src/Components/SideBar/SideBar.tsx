import "./Sidebar.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { scaleElement } from "../../utils";
//A side navigational bar that shows a list of all sections

function SideBar() {
  //method that sets side bar width to 0 when closed
  const closeBar = () => {
    const sideBar = document.getElementById("side_bar");
    if (sideBar) {
      sideBar.style.width = "0px";
    } else {
      console.error("sidebar is null");
    }
  };

  const closeBarColor = "rgb(53, 18, 76)"; //color of close sidebar button
  const navigate = useNavigate(); //navigate object for links
  return (
    //full sidebar
    <div id="side_bar">
      //text wrapper
      <div id="text_wrapper">
        //Button for Home Screen
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
        <span className="category" id="Regression">
          <Button
            onClick={() => {
              navigate("/regression/basics");
            }}
            factor={0.9}
            className="category_title"
          >
            <h2>REGRESSION</h2>
          </Button>
          <Button
            onClick={() => {
              navigate("/regression/basics");
            }}
            factor={0.9}
            className="chapter regression_section"
          >
            Basics
          </Button>
          <Button
            onClick={() => {
              navigate("/regression/vector");
            }}
            factor={0.9}
            className="chapter regression_section"
          >
            Vectors and the Regression Line
          </Button>
          <Button
            onClick={() => {
              navigate("/regression/expected-loss");
            }}
            factor={0.9}
            className="chapter regression_section"
          >
            Expected Loss
          </Button>
          <Button
            onClick={() => {
              navigate("/regression/gradient-descent");
            }}
            factor={0.9}
            className="chapter regression_section"
          >
            Gradient Descent
          </Button>
        </span>
        <span className="Deep Learning">
          <Button
            factor={0.9}
            onClick={() => {
              navigate("/NN");
            }}
          >
            <h2>DEEP LEARNING</h2>
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
