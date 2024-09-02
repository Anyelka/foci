import { AnimatePresence, motion } from "framer-motion";
import FieldBackground from "./../assets/FieldBackground";
import "./../formations.css";
import Starter from "./players/Starter";

const Field = ({ players, removePlayer }) => {
  const removeLastPlayer = () => {
    removePlayer(players[players.length - 1]);
  };

  const renderError = () => {
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
          <button onClick={() => removeLastPlayer()}>Vissza</button>
        </div>
      </motion.div>
    );
  };

  const renderPlayers = () => {
    return (
      players && (
        <div
          className={`players players-formation players-${players.length}-formation`}
        >
          {players.map((player) => (
            <Starter
              key={player.id}
              id={player.id}
              name={player.name}
              onRemove={() => removePlayer(player)}
            />
          ))}
          {
            <AnimatePresence>
              {players.length > 18 && renderError()}
            </AnimatePresence>
          }
        </div>
      )
    );
  };

  return (
    <div id="field" className="field">
      {renderPlayers()}
      <FieldBackground />
    </div>
  );
};

export default Field;
