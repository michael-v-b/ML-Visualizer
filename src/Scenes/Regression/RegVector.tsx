import SceneTemplate from "../SceneTemplate/SceneTemplate";
import * as images from "../../Assets/Regression/Vector";
import Scatter from "../../Assets/Regression/Basics/ice_cream_draw_line.riv";
import MultiLine from "../../Assets/Regression/Basics/ice_cream_multi_line.riv";
import RiveComponent from "@rive-app/react-canvas";

const RegBasics = () => {
  return (
    <SceneTemplate
      height="380vh"
      title="Regression: Vectors and the Regression Line"
      mainImage={<RiveComponent src={images.TitleCard} />}
      text={[
        "Now is a good time to explain the dimensionality of our regression line.",
        "With only 1 dimension, the equation for our regression line looks the same as your typical linear equation, mx+b.",
        "However, as we record data with more dimensions, we can add more variables.",
        "For example, if we wanted to see how price as well as temperature affect the number of customers we can express the equation such x_0 is price, and x_1 is temperature.",
        "here it is in vector form.",
        "We can even take this one step further by incorporating the y-intercept (bias variable) into our vector.",
        "In this case the first entry of the input vector will always be 1 so that the bias variable will remain the same no matter the input.",
        "And that is how we get this line.",
        "But how do you pick which line is the best? We’ll dive into that in the next section.",
      ]}
      borderColor="rgb(216, 94, 94)"
      images={[
        <div />,
        <RiveComponent src={Scatter} />,
        <RiveComponent src={images.MXBTransition} />,
        <RiveComponent src={images.MXBDiv} />,
        <RiveComponent src={images.MXBChange} />,
        <RiveComponent src={images.MXBVec} />,
        <RiveComponent src={images.MXBVecFull} />,
        <RiveComponent src={images.MXBVecStay} />,
        <RiveComponent src={Scatter} />,
        <RiveComponent src={MultiLine} />,
      ]}
      nextText="Expected Loss:"
      nextPage="/regression/expected-loss"
      prevText="Basics: "
      prevPage="/regression/basics"
    />
  );
};
export default RegBasics;
