import { motion } from "framer-motion";
import Add from "./../../assets/add.svg";
import Shirt from "./../../assets/shirt-black.svg";

const Player = ({ id, name, onHoverFilter, onClick }) => {
  const playerVariants = {
    initial: { scale: 1 },
    animateHover: {
      scale: 1.1,
      cursor: "pointer",
      filter: onHoverFilter,
    },
  };

  const actionIconVariants = {
    initial: { scale: 1, rotateY: 0 },
    animateHover: { scale: 1, rotateY: 360 },
  };

  return (
    <motion.div
      id={`player-${id}`}
      className="player"
      onClick={onClick}
      variants={playerVariants}
      initial="initial"
      whileHover="animateHover"
      layoutId={`player-${id}`}
      layout
    >
      <div className="player-icon-container">
        <motion.img
          className="player-shirt-icon"
          src={Shirt}
          alt=""
        ></motion.img>
        <img
          className="player-action-icon"
          /* variants={actionIconVariants} */ src={Add}
          alt=""
        ></img>
      </div>

      <div className="player-name">{name}</div>
    </motion.div>
  );
};

export default Player;
