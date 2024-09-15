import SceneTemplate from "../SceneTemplate/SceneTemplate";
import * as images from "../../Assets/Regression/Basics";
import RiveComponent from "@rive-app/react-canvas";

const RegBasics = () => {
  return (
    <SceneTemplate
      height="378vh"
      title="Regression: Basics"
      mainImage={<RiveComponent src={images.TitleCard} />}
      text={[
        "Linear regression is one of the simplest Machine learning models out there, making it a great introduction to the topic of machine learning. ",
        "Essentially, the name “Linear Regression”, refers to a line of best fit for a series of data points. ",
        "Oftentimes it’s used with a 2d graph is an example, however it can be scaled to include 3, or 4 or any number of dimensions! (Even if it can’t be graphed.)",
        "To illustrate Linear Regression, let’s make a hypothetical. Let’s say you’re an ice cream man and you serve delicious ice cream to many customers all year round.",
        "You have to buy your ice cream every day and you want to know how much ice cream you can expect to bring each day. How can you know how much to bring?",
        "You decide to start recording the temperature, and the number of customers for each day for a whole month, and when you graph it it looks like this!",
        "Here you can see the 2 variables are clearly correlated linearly, the higher the temperature, the more customers seem to come!",
        "Now you can try to make a line to make predictions of how many customers you’ll get given a certain temperature.",
        "But how do you pick which line is the best? We’ll dive into that in the next section!",
      ]}
      borderColor="rgb(216, 94, 94)"
      images={[
        <div />,
        <RiveComponent src={images.ThumbsUp} />,
        <RiveComponent src={images.TitleCard} />,
        <RiveComponent src={images.RotatePlot} />,
        <RiveComponent src={images.IceCream} />,
        <RiveComponent src={images.IceCreamQuestion} />,
        <RiveComponent src={images.IceCreamGraph} />,
        <RiveComponent src={images.IceCreamPointer} />,
        <RiveComponent src={images.IceCreamDrawLine} />,
        <RiveComponent src={images.IceCreamStay} />,
      ]}
      nextText="Vectors and the Regression Line:"
      nextPage="/regression/vector"
    />
  );
};
export default RegBasics;
