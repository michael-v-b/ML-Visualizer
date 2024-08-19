import React, { useRef, useState, useEffect } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import style from "./TextLine.module.css";

interface TextLineProps {
  content: string;
}

const TextLine: React.FC<TextLineProps> = ({ content }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 1]);

  return (
    <motion.div className={style.main} style={{ scale }}>
      {content}
    </motion.div>
  );
};

export default TextLine;
