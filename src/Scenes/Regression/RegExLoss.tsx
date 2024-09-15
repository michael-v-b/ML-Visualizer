import SceneTemplate from "../SceneTemplate/SceneTemplate";
import * as images from "../../Assets/Regression/ExpectedLoss";
import MultiLine from "../../Assets/Regression/Basics/ice_cream_multi_line.riv";
import ThumbsUp from "../../Assets/Regression/Basics/thumb_up.riv";
import RiveComponent from "@rive-app/react-canvas";

const RegBasics = () => {
  return (
    <SceneTemplate
      height="740vh"
      title="Regression: Expected Loss"
      mainImage={<RiveComponent src={images.ExpectedLoss} />}
      text={[
        "a couple sections ago, we graphed the relationship between temperature and customers. We also had a couple regression lines to model the plot.",
        "Now we have to figure out which line is best.",
        "We could just pick the line that looks most natural, but how can we be sure that it really is the best?",
        "We can create an equation to say how bad our line is!",
        "We can do this by measuring the distance of each real point, to the number predicted by the line (The expected loss). Then sum them all up for a loss value!",
        "However, we can’t just add all the distances, as including negatives would mess up our math.",
        "We can fix this by squaring the distances!",
        "After that we find the mean by summing all the distances and dividing it by the number of points. ",
        "This function is called a Loss Function! Specifically a Mean Squared Error Loss function, or Type 2 Loss.",
        "Type 1 Loss would take the absolute value instead of the square which has a similar, but slightly different effect.",
        "Now we can write out our loss function into mathematical terms.",
        "A quick explanation of this formula:",
        "Y is the real value from our data, i.e. the number of customers.",
        "Y-hat is the predicted (or expected) value from our regression line.",
        "Subtract the y from y-hat to find the distance, and square it to keep a positive value.",
        "Then find the mean distance by summing up all the distances, and dividing by the number of points.",
        "Here is what the loss function looks like when graphed.",
        "A line that does a poor job of predicting would be up here...",
        "While an optimal line would be down here.",
        "So how do we start with a line that’s from the top and bring it to the bottom? We’ll find out in the next section!",
      ]}
      borderColor="rgb(216, 94, 94)"
      images={[
        <div />,
        <RiveComponent src={MultiLine} />,
        <RiveComponent src={images.SelectLine} />,
        <RiveComponent src={images.EraseLine} />,
        <RiveComponent src={ThumbsUp} />,
        <RiveComponent src={images.Distances} />,
        <RiveComponent src={images.NegativeDistances} />,
        <RiveComponent src={images.SquareDistances} />,
        <RiveComponent src={images.SumDistances} />,
        <RiveComponent src={images.MSE} />,
        <RiveComponent src={images.AbsDistances} />,
        <RiveComponent src={images.EquationIntro} />,
        <RiveComponent src={images.EquationIdle} />,
        <RiveComponent src={images.EquationY} />,
        <RiveComponent src={images.EquationYHat} />,
        <RiveComponent src={images.EquationSquared} />,
        <RiveComponent src={images.EquationMean} />,
        <RiveComponent src={images.MSEGraph} />,
        <RiveComponent src={images.MSEPointer} />,
        <RiveComponent src={images.MSEPointerFloor} />,
        <RiveComponent src={images.GradientDescent} />,
      ]}
      nextText="Gradient Descent:"
      nextPage="/regression/gradient-descent"
      prevText="Vectors and the Regression Line: "
      prevPage="/regression/vector"
    />
  );
};
export default RegBasics;
