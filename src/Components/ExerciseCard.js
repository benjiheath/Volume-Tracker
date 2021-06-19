import ExerciseData from "./ExerciseData/ExerciseData";
import ExerciseStats from "./ExerciseStats/ExerciseStats";
import Button from "./Button";
import Chart from "react-google-charts";

import { useState } from "react";

const ExerciseCard = ({ exercises, setExercises, exerciseM, idx }) => {
	// listening to this state in SessionColumnStats with useEffect to update exercise stats whenever reps are changed
	const [repChanged, setRepChanged] = useState(false);

	// TODO set to true when add new session, setting 'weight' input to autoFocus? (probably need to use useRef/focus())
	const [newSessionAdded, setNewSessionAdded] = useState(false);

	// onClick for adding new session
	const addNewSession = () => {
		const newSessionTemplate = { reps: [0, 0, 0] };
		const copy = exercises.map((ex) => ex);
		copy[idx].sessions.push(newSessionTemplate);
		setExercises(copy);
	};

	// onClick for deleting exercise
	const deleteExercise = () => {
		const copy = exercises.filter((ex) => ex !== exerciseM);
		setExercises(copy);
	};

	return (
		<div className="exercise-card">
			<div className="card-inc-btns-container">
				<ExerciseData
					exercises={exercises}
					setExercises={setExercises}
					exerciseM={exerciseM}
					setRepChanged={setRepChanged}
					repChanged={repChanged}
					idx={idx}
					newSessionAdded={newSessionAdded}
				/>
				<div className="plus-container">
					<Button
						className="btn-plus-session"
						text="+"
						onClick={addNewSession}
					/>
				</div>
			</div>
			<ExerciseStats
				exercises={exercises}
				setExercises={setExercises}
				exerciseM={exerciseM}
				idx={idx}
				repChanged={repChanged}
			/>
			<Button
				className="btn btn-delete-exercise"
				text="delete"
				onClick={deleteExercise}
			/>
		</div>
	);
};

export default ExerciseCard;
