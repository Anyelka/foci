import FieldBackground from "../assets/FieldBackground";
import Player from "./Player";

const Field = ({ players }) => {
  const renderPlayers = () => {
    return (
      players && (
        <div className="players">
          {players.map((player) => (
            <Player name={player}></Player>
          ))}
        </div>
      )
    );
  };

  return (
    <div id="field" className="field">
      {/* {renderPlayers()} */}
      <FieldBackground />
      {/* <img className="field-background" src={FieldBackground} alt=""></img> */}
    </div>
  );
};

export default Field;
