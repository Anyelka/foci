import Sub from "./players/Sub";

const Bench = ({ players, addPlayer }) => {
  const renderPlayers = () => {
    return (
      players && (
        <div className="players bench-players">
          {players.map((player) => (
            <Sub
              key={player.id}
              id={player.id}
              name={player.name}
              onClick={() => addPlayer(player)}
            />
          ))}
        </div>
      )
    );
  };

  return <div className="bench">{renderPlayers()}</div>;
};

export default Bench;
