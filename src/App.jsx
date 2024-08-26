import { useState } from "react";
import Stadium from "./components/Stadium";
import { DUMMY_PLAYERS } from "./dummyData";

function App() {
  const [players, setPlayers] = useState(DUMMY_PLAYERS);

  return (
    <>
      {/* <h1>Foci</h1> */}
      <div className="stadium-container">
        <Stadium players={players} />
      </div>
    </>
  );
}

export default App;
