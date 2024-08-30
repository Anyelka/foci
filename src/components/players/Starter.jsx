import Player from "./Player";

const Starter = ({ name, onRemove: onClick }) => {
  return (
    <>
      <Player
        name={name}
        onHover={{
          cursor: "pointer",
          filter:
            "invert(13%) sepia(61%) saturate(7121%) hue-rotate(358deg) brightness(72%) contrast(96%)",
        }}
        onClick={onClick}
      />
    </>
  );
};

export default Starter;
