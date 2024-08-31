import { motion } from "framer-motion";
const RedSquare = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "linear", duration: 0.5 }}
      width="800px"
      height="800px"
      viewBox="0 0 72 72"
      id="emoji"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="color">
        <path
          fill="#ea5a47"
          d="M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z"
        />
      </g>
      <g id="line">
        <path
          fill="none"
          stroke="#000000"
          stroke-linejoin="round"
          stroke-width="2"
          d="M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z"
        />
      </g>
    </motion.svg>
  );
};
export default RedSquare;
