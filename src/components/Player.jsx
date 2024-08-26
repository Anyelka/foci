import Shirt from "./../assets/shirt-black.svg";

const Player = ({ name }) => {
  return (
    <div className="player">
      <img className="player-shirt" src={Shirt} alt="" />
      <div className="player-name">{name}</div>
    </div>
  );
};

export default Player;
