import Button from "../Button";

const ColumnMain = ({ setExerciseName, exerciseM, addNewSet, idx, deleteSet }) => {
  return (
    <div className={exerciseM.numSets.length <= 3 ? "column" : `column-${exerciseM.numSets.length}`}>
      <div className="col col-r-top-left">{`Exercise ${idx + 1}`}</div>
      <input
        className="input"
        type="text"
        placeholder="exercise"
        onChange={(e) => setExerciseName(e.target.value)}
        autoFocus
        value={exerciseM.name}
      ></input>

      {exerciseM.numSets.map((set, setIdx) => (
        // if last set, include delete button
        <div
          key={setIdx}
          className={
            setIdx + 1 === exerciseM.numSets.length && setIdx > 2 ? "col col-l-b col-last-set" : "col col-l-b"
          }
        >
          {setIdx + 1 === exerciseM.numSets.length && setIdx > 2 && (
            <Button text="-" className="btn-del-set" onClick={deleteSet} />
          )}

          <p>{`set ${setIdx + 1}`}</p>
        </div>
      ))}
      <Button className="btn-plus-set" text="+" onClick={addNewSet} />
    </div>
  );
};

export default ColumnMain;
