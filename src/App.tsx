import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Scenes/Home";
import Regression from "./Scenes/Regression";
import NN from "./Scenes/NN";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/regression">Regression</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regression" element={<Regression />} />
        <Route path="/NN" element={<NN />} />
      </Routes>
    </Router>
  );
}

export default App;
