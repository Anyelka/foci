import Bench from "./Bench";
import Field from "./Field";

const Stadium = ({ players }) => {
  return (
    <div className="stadium">
      <Field players={players} />
      <Bench players={players} />
    </div>
  );
};

export default Stadium;
