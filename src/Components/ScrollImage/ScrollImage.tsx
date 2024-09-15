import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import style from "./ScrollImage.module.css";
//scroll images uses image array and a unique index number.
interface ScrollImageProp {
  images: ReactNode[]; //array of images (RiveComponents)
  index: number; //index of image that should be set
}
const ScrollImage: React.FC<ScrollImageProp> = ({ images, index }) => {
  //if index is larger than index array, set to last image
  return (
    <motion.div key={index} className={style.main}>
      {images[Math.min(index, images.length - 1)]}
    </motion.div>
  );
};

export default ScrollImage;
