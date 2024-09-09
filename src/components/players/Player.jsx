import { motion } from "framer-motion";
import Add from "./../../assets/add.svg";
import Shirt from "./../../assets/shirt-black.svg";

const REMOVE_FILTER =
  /* "invert(13%) sepia(61%) saturate(7121%) hue-rotate(358deg) brightness(72%) contrast(96%)"; */
  "invert(75%) sepia(72%) saturate(2739%) hue-rotate(334deg) brightness(104%) contrast(99%)";
const ADD_FILTER =
  "invert(82%) sepia(35%) saturate(565%) hue-rotate(75deg) brightness(103%) contrast(101%)";

const Player = ({ id, name, onClick, action }) => {
  const getFilter = () => {
    if ("ADD" == action) {
      return ADD_FILTER;
    }
    if ("REMOVE" == action) {
      return REMOVE_FILTER;
    }
    return "";
  };

  const getRotation = () => {
    let defaultRotation = [0, 90];
    if ("REMOVE" == action) {
      return defaultRotation.map((position) => position + 45);
    }
    return defaultRotation;
  };

  const playerVariants = {
    initial: { scale: 1 },
    animateHover: {
      scale: 1.1,
      cursor: "pointer",
      filter: getFilter(action),
    },
  };

  const actionIconVariants = {
    initial: { scale: 0, rotateZ: getRotation()[0] },
    animateHover: { scale: 1, rotateZ: getRotation()[1] },
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
        <motion.img className="player-shirt-icon" src={Shirt} alt="" />
        <motion.img
          className="player-action-icon"
          variants={actionIconVariants}
          src={Add}
          alt=""
        />
      </div>

      <div className="player-name">{name}</div>
    </motion.div>
  );
};

export default Player;
