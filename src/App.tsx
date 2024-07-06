import { useState } from "react";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import TitleCard from "./Components/TitleCard/TitleCard";
import SectionCard from "./Components/SectionCard/SectionCard";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <Header />
      <video autoPlay muted loop id="bg_video">
        <source src="public/pink-dots.mp4" type="video/mp4" />
      </video>
      <SideBar />
      <TitleCard />
      <div className="card_wrapper">
        <SectionCard name="Regression" brdColor="#F305D3" />
      </div>
    </div>
  );
}

export default App;
