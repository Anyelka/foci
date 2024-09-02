import Player from "./Player";

const Sub = ({ id, name, onClick }) => {
  return (
    <Player
      id={id}
      name={name}
      onHover={{
        cursor: "pointer",
        filter:
          "invert(82%) sepia(35%) saturate(565%) hue-rotate(75deg) brightness(103%) contrast(101%)",
      }}
      onClick={onClick}
    />
  );
};

export default Sub;
