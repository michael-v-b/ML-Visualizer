import SceneTemplate from "../SceneTemplate/SceneTemplate";
import * as images from "../../Assets";

const RegBasics = () => {
  return (
    <SceneTemplate
      height="380vh"
      title="Regression: Basics"
      text={[
        "In the previous section we mentioned recorded data on how temperature relates to number of customers on a given day, and graphed it like this!",
        "Now we have to figure out how to make a line of best fit, or linearly regress, this data.",
        "Maybe we can just draw a line that looks like it’s the best! That would work? But how can we tell if it really is the best option?",
        "What we can do is create a function that says how bad the line is by measuring the distance of each real point, to the number predicted by the line. Then sum them all up for a loss value!",
        "However, we can’t just subtract the value on the line from the value, as that would allow for negative numbers",
        "We can fix this by squaring the final value then summing that! ",
        "This function is called a Loss Function! Specifically a Mean Squared Error Loss function, or Type 2 Loss",
        "Type 1 Loss would take the absolute value instead of the square",
        "Now that we have a function that measures how bad our line is, how do we minimize that value?",
        "We’ll find out in the next section",
      ]}
      borderColor="rgb(216, 94, 94)"
      images={[<images.BlueSquare />, <images.RedSquare />]}
      nextText="Expected Loss:"
      nextPage="/regression/expected-loss"
    />
  );
};
export default RegBasics;
