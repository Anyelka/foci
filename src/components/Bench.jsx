import Player from "./Player";

const Bench = ({ players }) => {
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

  return <div className="bench">{/* {renderPlayers()} */}</div>;
};

export default Bench;
