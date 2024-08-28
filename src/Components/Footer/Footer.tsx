import React from "react";
import style from "./Footer.module.css";
import Button from "../Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface FooterProp {
  content?: string;
  nextPage?: string;
}
const Footer: React.FC<FooterProp> = ({ content, nextPage }) => {
  const navigate = useNavigate();
  return (
    <div className={style.main}>
      <div className={style.next_text}>{content}</div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
        <Button
          onClick={() => {
            nextPage && navigate(nextPage);
          }}
          className={style.next_button}
          factor={1.5}
        >
          Next
          <i id="next_icon" className="icon glyphicon glyphicon-forward" />
        </Button>
      </motion.div>
    </div>
  );
};

export default Footer;
