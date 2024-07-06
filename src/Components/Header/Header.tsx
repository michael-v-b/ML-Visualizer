import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="list_wrapper" id="list_button">
        <i className="icon glyphicon glyphicon-list"> </i>
      </div>
      <h1 className="header_text">Machine Learning Concepts</h1>
    </div>
  );
}
export default Header;
