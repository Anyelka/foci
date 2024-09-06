import { AnimatePresence } from "framer-motion";
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
              {players.length > 18 && <Error onBack={removeLastPlayer} />}
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
