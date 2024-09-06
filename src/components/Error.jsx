import { motion } from "framer-motion";
import BackButton from "./../assets/back-button.png";

const Error = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="error-container"
    >
      <div className="error-box">
        <h1>TÚL SOK JÁTÉKOS</h1>{" "}
        <h2>Nem gondolod hogy ennyien elférünk a pályán...</h2>
        <motion.button
          whileHover={{
            scale: 1.05,
            filter:
              "invert(8%) sepia(81%) saturate(5291%) hue-rotate(357deg) brightness(95%) contrast(111%)",
          }}
          className="back-button"
          onClick={onBack}
        >
          <img className="back-button-image" src={BackButton}></img>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Error;
