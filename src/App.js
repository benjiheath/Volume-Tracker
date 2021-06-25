import Header from "./Components/Header";
import ExerciseCard from "./Components/ExerciseCard";

import { useState, useEffect } from "react";

function App() {
  const newExerciseTemplate = { id: 0, sessions: [{ reps: [0, 0, 0] }], numSets: [0, 0, 0] };
  const [exercises, setExercises] = useState([newExerciseTemplate]);

  // display local storage on page load
  const data = JSON.parse(localStorage.getItem("exercises"));
  useEffect(() => {
    if (!data) return;
    if (data[0].name) {
      setExercises(data);
      setShowFirstAdd(true);
    }
  }, []);

  // set local storage on re-render
  useEffect(() => {
    localStorage.setItem("exercises", JSON.stringify(exercises));
    console.log("LOCAL STORAGE:", localStorage);
  });

  // state for rendering card on first 'Add Excercise' click
  const [showFirstAdd, setShowFirstAdd] = useState(false);

  // for Add Exercise onClick
  const addExercise = () => {
    // render card on first click
    !showFirstAdd && setShowFirstAdd(true);

    // add additional exercise once first click has already happened
    showFirstAdd && setExercises([...exercises, newExerciseTemplate]);
  };

  return (
    <div className="App">
      <Header addExercise={addExercise} setShowFirstAdd={setShowFirstAdd} />
      <div className="exercises-master-container">
        {showFirstAdd &&
          exercises.map((exerciseM, idx) => (
            <ExerciseCard
              key={exerciseM.id}
              exercises={exercises}
              setExercises={setExercises}
              exerciseM={exerciseM}
              idx={idx}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
