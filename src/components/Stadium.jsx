import { useState } from "react";
import Bench from "./Bench";
import Field from "./Field";

const INCLUDE_FIRST_N_PRECONFIG = 1;

const Stadium = ({ players }) => {
  const initStarters = players.slice(0, INCLUDE_FIRST_N_PRECONFIG);
  const initSubs = players.slice(INCLUDE_FIRST_N_PRECONFIG + 1, players.length);

  const [starters, setStarters] = useState(initStarters);
  const [subs, setSubs] = useState(initSubs);

  const addPlayer = (player) => {
    setStarters([...starters, player]);
    setSubs(subs.filter((sub) => sub !== player));
  };

  const removePlayer = (player) => {
    setSubs([...subs, player]);
    setStarters(starters.filter((starter) => starter !== player));
  };

  return (
    <div className="stadium">
      <Field players={starters} removePlayer={removePlayer} />
      <Bench players={subs} addPlayer={addPlayer} />
    </div>
  );
};

export default Stadium;
