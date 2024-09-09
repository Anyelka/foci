import Player from "./Player";

const Starter = ({ id, name, onClick }) => {
  return <Player id={id} name={name} onClick={onClick} action="REMOVE" />;
};

export default Starter;
