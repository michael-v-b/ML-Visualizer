import "./Header.css";
import { changeBackgroundColor, setBackgroundColor } from "../../utils";

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
      <div
        className="list_wrapper"
        onMouseEnter={() => changeBackgroundColor("list_button", 1.2)}
        onMouseLeave={() => setBackgroundColor("list_button", bgColor)}
        onClick={() => {
          setSideBarWidth(sideBarWidth);
        }}
        id="list_button"
      >
        <i className="icon glyphicon glyphicon-list" />
      </div>
      <h1 className="header_text">Machine Learning Concepts</h1>
      <div></div>
    </div>
  );
}
export default Header;
