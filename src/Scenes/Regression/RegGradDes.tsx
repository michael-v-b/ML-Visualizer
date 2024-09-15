import SceneTemplate from "../SceneTemplate/SceneTemplate";
import * as images from "../../Assets/Regression/GradientDescent";
import RiveComponent from "@rive-app/react-canvas";
import TitleImage from "../../Assets/Regression/ExpectedLoss/gradient_descent.riv";
import EquationIntro from "../../Assets/Regression/ExpectedLoss/intro_equation.riv";
import EquationIdle from "../../Assets/Regression/ExpectedLoss/equation_idle.riv";
import ThumbsUp from "../../Assets/Regression/Basics/thumb_up.riv";
import ComingSoon from "../../Assets/coming_soon.riv";

const RegBasics = () => {
  return (
    <SceneTemplate
      height="950vh"
      title="Regression: Gradient Descent"
      mainImage={<RiveComponent src={TitleImage} />}
      text={[
        "Now how would you find the line that would minimize the loss function? The answer's simple...",
        "Just use calculus!",
        "I know calculus sounds scary, but it’s not so bad.",
        "So, in the last section we found our loss function, this equation.",
        "Now we have to find out how changing the regression line (or our model) affects the results of our loss function.",
        "In other words, we are finding the derivative of the loss function, with respect to our model, or the gradient if our loss function is a vector.",
        "So let’s find this together.",
        "Let’s rewrite this to include our model.",
        "W is the vector of weights for each dimension.",
        "x is the input vector of any given point.",
        "thus when we find their dot product it says the expected value.",
        "So we’re trying to find the derivative with respect to w.",
        "but first let's simplify this equation by seperating it into different equations.",
        "we'll start by declaring h(x) as the sum of all the distances, divided by the number of points, squared.",
        "Then we'll declare g(x) as the distance formula.",
        "So our new Loss Function can be written as so.",
        "So now we can use the chain rule:",
        "Next we find the derivatives of each function with respect to w.",
        "We’ll start with h(x)...",
        "Because of the rule of sums the summation stays the same.",
        "Then we use the exponent rule.",
        "Next we find the derivative of g(x).",
        "Because x is the only one affected by w, the derivative is only x.",
        "Now we put it all together to find the full gradient of the loss function.",
        "When w is a vector the gradient also becomes a vector that, when subtracted from our model, will decrease the value of our loss function the most.",
        "However, it’s possible for the loss function to overshoot its goal of minimization, and oscillate back and forth on either side of the true minimum of the function.",
        "We can fix this by incorporating a variable for learning rate, which will decrease the step size of our gradient function.",
        "Now let’s see how our random line gets better when we subtract our gradient.",
        "Perfect!",
        "The next section will be coming soon!",
      ]}
      borderColor="rgb(216, 94, 94)"
      images={[
        <div />,
        <RiveComponent src={images.Thinking} />,
        <RiveComponent src={images.Scare} />,
        <RiveComponent src={images.Calm} />,
        <RiveComponent src={EquationIntro} />,
        <RiveComponent src={EquationIdle} />,
        <RiveComponent src={images.DerivIntro} />,
        <RiveComponent src={images.DerivIdle} />,
        <RiveComponent src={images.WTX} />,
        <RiveComponent src={images.W} />,
        <RiveComponent src={images.X} />,
        <RiveComponent src={images.ExpectedValue} />,
        <RiveComponent src={images.DW} />,
        <RiveComponent src={images.SeperateEquations} />,
        <RiveComponent src={images.H} />,
        <RiveComponent src={images.G} />,
        <RiveComponent src={images.HGW} />,
        <RiveComponent src={images.DerivHGW} />,
        <RiveComponent src={images.DerivHGWTrans} />,
        <RiveComponent src={images.HPreDeriv} />,
        <RiveComponent src={images.HSumDeriv} />,
        <RiveComponent src={images.HDeriv} />,
        <RiveComponent src={images.GPreDeriv} />,
        <RiveComponent src={images.GDeriv} />,
        <RiveComponent src={images.DerivHGWNum} />,
        <RiveComponent src={images.DerivVector} />,
        <RiveComponent src={images.OvershootLoop} />,
        <RiveComponent src={images.StepValue} />,
        <RiveComponent src={images.GDLine} />,
        <RiveComponent src={ThumbsUp} />,
        <RiveComponent src={ComingSoon} />,
      ]}
      prevText="Expected Loss: "
      prevPage="/regression/expected-loss"
    />
  );
};
export default RegBasics;
