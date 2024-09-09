import { AnimatePresence, motion } from "framer-motion";
import FieldBackground from "./../assets/FieldBackground";
import "./../formations.css";
import Error from "./Error";
import Starter from "./players/Starter";

const Field = ({ players, removePlayer }) => {
  const removeLastPlayer = () => {
    removePlayer(players[players.length - 1]);
  };

  const renderPlayers = () => {
    return (
      players && (
        <div
          className={`players field-players players-formation players-${players.length}-formation`}
        >
          {players.map((player) => (
            <Starter
              key={player.id}
              id={player.id}
              name={player.name}
              onClick={() => removePlayer(player)}
            />
          ))}
          {
            <AnimatePresence>
              {players.length > 18 && <Error onBack={removeLastPlayer} />}
            </AnimatePresence>
          }
        </div>
      )
    );
  };

  return (
    <motion.div id="field" className="field" layout>
      {renderPlayers()}
      <FieldBackground />
    </motion.div>
  );
};

export default Field;
