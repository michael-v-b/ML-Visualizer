import { useState } from "react";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import TitleCard from "../Components/TitleCard/TitleCard";
import SectionCard from "../Components/SectionCard/SectionCard";
import BG from "../Components/BGAnimation/BGAnimation";
import "./Home.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <Header />
      <BG numDots={9} color="#AAAAAA" />
      <SideBar />
      <TitleCard />

      <div className="main_wrapper">
        <div className="main_text">
          <h2>What is Machine Learning?</h2>
          <p>
            In this modern age machine learning and AI are more popular than
            ever. Many companies are implementing different forms of generative
            AI into their busniess models, both in terms of customer service,
            and improving the workflow of employees. However, the term AI refers
            to a smaller subset of the larger category of machine learning.
            Machine learning refers to any model or algorithm which improves as
            more data is entered into it, while AI refers to a subset of machine
            learning which generates can generate text or images, typically
            using neural networks.
          </p>
          <h2>Why Learn Machine Learning?</h2>
          <p>
            Machine learning algorithms are an extremely powerful tool for every
            trade. Whether you have a small business, a large company, or simply
            want to make an informed decision, yet don't want to comb through
            the data yourself, machine learning algorithms are very good at
            finding patterns and making predictions for certain types of data.
          </p>
          <h2>What Type of Machine Learning Algorithms Are There?</h2>
          <p>Machine Learning Algorithms typically fall under 3 camps:</p>{" "}
          <ul>
            <li>Prediction</li>
            <li>Classification</li>
            <li>Generation</li>
          </ul>
          <p>
            Each of these categories include a variety of different models for
            each purpose. For prediciton, some common models are Regression
            trees, Linear or NonLinear Regression. Classification uses Logistic
            Regression, Support Vector Machines and Decision Trees. While
            Generative algorithms often use models such as GPT for language
            models and Diffusion for images. Each algorithm has its use cases as
            well as its own unique positive and negative attributes.
          </p>
          <h2>What is this?</h2>
          <p>
            In this website I will try to explain and visualize different
            machine learning concepts in algorithms in an easy and
            understandable way. While understanding these deeper topics often
            isn't fully necessary, it's still important to understand how these
            algorithms work at a base level, and hopefully after exploring you
            will have a deeper understanding of these algorithms which affect so
            much of our life.
          </p>
        </div>
        <div className="card_wrapper">
          <SectionCard name="Regression" brdColor="#F305D3" />
        </div>
      </div>
    </div>
  );
}

export default Home;
