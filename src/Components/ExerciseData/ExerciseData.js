import SessionColumn from "./DataColumnSessions";
import ColumnMain from "./DataColumnMain";

const ExerciseData = ({
	exercises,
	setExercises,
	exerciseM,
	idx,
	setRepChanged,
	repChanged,
	newSessionAdded,
}) => {
	// link exercise input to state
	const setExerciseName = (exName) => {
		const copy = exercises.map((ex) => ex);
		copy[idx].name = exName;
		setExercises(copy);
	};

	// link weight input to state (passed to SessionColumn component)
	const setSessionWeight = (seshWeight, seshId) => {
		const copy = exercises.map((ex) => ex);
		copy[idx].sessions[seshId].weight = Number(seshWeight);
		setExercises(copy);
		setRepChanged(!repChanged);
	};

	// link reps input to state (passed to SessionColumn component)
	const setReps = (reps, seshId, setId) => {
		const copy = exercises.map((ex) => ex);
		copy[idx].sessions[seshId].reps[setId] = Number(reps);
		setExercises(copy);
		setRepChanged(!repChanged);
	};

	// onClick for adding new Set (passed to ColumnMain component)
	const addNewSet = () => {
		const copy = exercises.map((ex) => ex);
		copy[idx].numSets.push(0);
		setExercises(copy);
	};

	// onClick for deleting last set (passed to ColumnMain component)
	const deleteSet = () => {
		const copy = exercises.map((ex) => ex);
		copy[idx].numSets.pop();
		setExercises(copy);
	};

	// onClick for deleting last session (passed to SessionColumn component)
	const deleteSession = () => {
		const copy = exercises.map((ex) => ex);
		copy[idx].sessions.pop();
		setExercises(copy);
	};

	// determine grid class
	const getGridClass = () => {
		if (exerciseM.sessions.length === 1) {
			return "data-grid-1";
		}

		if (exerciseM.sessions.length === 2) {
			return "data-grid-2";
		}
		if (exerciseM.sessions.length === 3) {
			return "data-grid-3";
		}
		if (exerciseM.sessions.length === 4) {
			return "data-grid-4";
		}
	};

	return (
		<div className="column-container">
			<ColumnMain
				setExerciseName={setExerciseName}
				exerciseM={exerciseM}
				addNewSet={addNewSet}
				idx={idx}
				deleteSet={deleteSet}
			/>
			{exerciseM.sessions.map((sesh, seshIdx) => (
				<SessionColumn
					key={seshIdx + 1}
					setSessionWeight={setSessionWeight}
					exerciseM={exerciseM}
					idx={idx}
					seshIdx={seshIdx}
					setReps={setReps}
					deleteSession={deleteSession}
					newSessionAdded={newSessionAdded}
				/>
			))}
		</div>
	);
};

export default ExerciseData;
