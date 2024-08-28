import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Scenes/Home";
import RegBasics from "./Scenes/Regression/RegBasics";
import RegExLoss from "./Scenes/Regression/RegExLoss";
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
        <Route path="/regression/basics" element={<RegBasics />} />
        <Route path="/regression/expected-loss" element={<RegExLoss />} />

        <Route path="/NN" element={<NN />} />
      </Routes>
    </Router>
  );
}

export default App;
