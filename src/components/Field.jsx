import FieldBackground from "../assets/FieldBackground";
import "./../formations.css";
import Starter from "./players/Starter";

const Field = ({ players, removePlayer }) => {
  const renderPlayers = () => {
    return (
      players && (
        <div
          className={`players players-formation players-${players.length}-formation`}
        >
          {players.map((player) => (
            <Starter name={player} onRemove={() => removePlayer(player)} />
          ))}
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
