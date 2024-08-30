import { motion } from "framer-motion";
import Shirt from "./../../assets/shirt-black.svg";

const Player = ({ name, onHover, onClick }) => {
  return (
    <motion.div className="player" whileHover={onHover} onClick={onClick}>
      <motion.img className="player-shirt" src={Shirt} alt="" />
      <div className="player-name">{name}</div>
    </motion.div>
  );
};

export default Player;
