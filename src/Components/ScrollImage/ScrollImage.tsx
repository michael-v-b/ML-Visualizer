import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import style from "./ScrollImage.module.css";

interface ScrollImageProp {
  images: ReactNode[];
  index: number;
}
const ScrollImage: React.FC<ScrollImageProp> = ({ images, index }) => {
  return (
    <motion.div className={style.main}>
      {images[Math.min(index, images.length - 1)]}
    </motion.div>
  );
};

export default ScrollImage;
