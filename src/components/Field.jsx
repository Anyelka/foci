import FieldBackground from "../assets/FieldBackground";
import Starter from "./players/Starter";

const Field = ({ players, removePlayer }) => {
  const renderPlayersInFormation = () => {
    if (players.length == 1) {
    }
    if (players.length == 2) {
    }

    return players.map((player) => (
      <Starter name={player} onRemove={() => removePlayer(player)}></Starter>
    ));
  };

  const renderPlayers = () => {
    return (
      players && (
        <div className="players">{renderPlayersInFormation(players)}</div>
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
