import "./Header.css";
import { scaleElement } from "../../utils";
import { motion } from "framer-motion";
import Button from "../Button";

//sets title of header
interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const bgColor = "rgb(15, 7, 35)"; //background color
  const sideBarWidth = 300; //width of side bar
  //method that sets sidebar to specific width
  const setSideBarWidth = (width: number) => {
    const side_bar = document.getElementById("side_bar");
    if (side_bar) {
      side_bar.style.width = "" + width + "px";
    }
  };

  return (
    <div className="header">
      <Button
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
      </Button>
      <h1 className="header_text">
        {title ? title : "Machine Learning Concepts"}
      </h1>
      <div></div>
    </div>
  );
};
export default Header;
