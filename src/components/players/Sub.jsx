import Player from "./Player";

const Sub = ({ id, name, onClick }) => {
  return <Player id={id} name={name} onClick={onClick} action="ADD" />;
};

export default Sub;
