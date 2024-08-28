import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import style from "./RegBasics.module.css";
import ScrollText from "../../Components/ScrollText/ScrollText";
import Footer from "../../Components/Footer/Footer";
import React, { useEffect, useState, useRef } from "react";

const RegBasics = () => {
  return (
    <div className={style.main}>
      <Header title={"Regression: Basics"} />
      <SideBar />

      <div className={style.image}></div>
      <div className={style.main_wrapper}>
        <ScrollText
          backgroundColor="rgb(48, 48, 48)"
          borderColor="rgb(216, 94, 94)"
          height="380vh"
          text={[
            "Linear regression is one of the simplest Machine learning models out there, making it a great introduction to the topic of machine learning.",
            "Essentially, the name “Linear Regression”, refers to a line of best fit for a series of data points. ",
            "Oftentimes it’s used with a 2d graph is an example, however it can be scaled to include 3, or 4 or any number of dimensions! (Even if it can’t be graphed)",
            "To illustrate Linear Regression, let’s make a hypothetical. Let’s say you’re an ice cream man and you serve delicious ice cream to many customers all year round.",
            "You have to buy your ice cream every day and you want to know how much ice cream you can expect to bring each day. How can you know how much to bring?",
            "You decide to start recording the temperature, and the number of customers for each day for a whole month, and when you graph it it looks like this!",
            "Here you can see the 2 data points are clearly correlated linearly, the higher the temperature, the more customers seem to come!",
            "Now you can try to make a line to make predictions of how many customers you’ll get given a certain temperature",
            "This line can be represented as mx +b, lines in 3 or more dimensions can be represented with more variables",
            "But how do you pick which line is the best? We’ll dive into that in the next section",
          ]}
        />

        <div className={style.anim_wrapper}></div>
      </div>
      <Footer
        content={"Expected Loss:"}
        nextPage={"/regression/expected-loss"}
      />
    </div>
  );
};
export default RegBasics;
