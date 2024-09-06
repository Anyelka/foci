import { motion } from "framer-motion";
import Shirt from "./../../assets/shirt-black.svg";

const Player = ({ id, name, onHoverFilter, onClick }) => {
  return (
    <motion.div
      id={`player-${id}`}
      className="player"
      whileHover={{
        scale: 1.1,
        cursor: "pointer",
        filter: onHoverFilter,
      }}
      onClick={onClick}
      layoutId={`player-${id}`}
      layout
    >
      <motion.img className="player-shirt" src={Shirt} alt="" />
      <div className="player-name">{name}</div>
    </motion.div>
  );
};

export default Player;
