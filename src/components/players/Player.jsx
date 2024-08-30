import { AnimatePresence, motion } from "framer-motion";
import Shirt from "./../../assets/shirt-black.svg";

const Player = ({ name, onHover, onClick }) => {
  return (
    name && (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="player"
          whileHover={onHover}
          onClick={onClick}
          layout
        >
          <motion.img className="player-shirt" src={Shirt} alt="" />
          <div className="player-name">{name}</div>
        </motion.div>
      </AnimatePresence>
    )
  );
};

export default Player;
