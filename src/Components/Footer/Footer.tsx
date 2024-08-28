import React from "react";
import style from "./Footer.module.css";
import Button from "../Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface FooterProp {
  nextText?: string;
  prevText?: string;
  nextPage?: string;
  prevPage?: string;
}
const Footer: React.FC<FooterProp> = ({
  nextText,
  prevText,
  nextPage,
  prevPage,
}) => {
  const navigate = useNavigate();
  return (
    <div className={style.main}>
      {/* previous button*/}
      {prevText ? (
        <div className={style.nav_button_wrapper}>
          <div className={style.prev_text}>{prevText}</div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
            <Button
              onClick={() => {
                prevPage && navigate(prevPage);
              }}
              className={style.nav_button}
              factor={1.5}
            >
              Prev
              <i
                id={style.nav_icon}
                className="icon glyphicon glyphicon-backward"
              />
            </Button>
          </motion.div>
        </div>
      ) : (
        <div />
      )}
      {/* next button*/}
      {nextText ? (
        <div className={style.nav_button_wrapper}>
          <div className={style.next_text}>{nextText}</div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
            <Button
              onClick={() => {
                nextPage && navigate(nextPage);
              }}
              className={style.nav_button}
              factor={1.5}
            >
              Next
              <i
                id={style.nav_icon}
                className="icon glyphicon glyphicon-forward"
              />
            </Button>
          </motion.div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Footer;
