import "./Sidebar.css";

function SideBar() {
  return (
    <div className="side_bar">
      <span className="menu_option" id="home">
        Home
      </span>
      <span className="category">
        <h2>REGRESSION</h2>
        <span className="chapter menu_option">Basics</span>
        <span className="chapter menu_option">Expected Loss</span>
        <span className="chapter menu_option">Gradient Descent</span>
        <span className="chapter menu_option">Bias Variance Tradeoff</span>
        <span className="chapter menu_option">Regularization</span>
      </span>
    </div>
  );
}

export default SideBar;
