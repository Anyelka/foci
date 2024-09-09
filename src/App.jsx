import { useState } from "react";
import Title from "./components/Title";
import Stadium from "./components/stadium/Stadium";
import { DUMMY_PLAYERS } from "./dummyData";

function App() {
  const [players, setPlayers] = useState(DUMMY_PLAYERS);

  return (
    <>
      <div className="stadium-container">
        <Title />
        <Stadium players={players} />
      </div>
    </>
  );
}

export default App;
