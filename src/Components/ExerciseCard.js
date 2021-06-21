import ExerciseData from "./ExerciseData/ExerciseData";
import ExerciseStats from "./ExerciseStats/ExerciseStats";
import Button from "./Button";
import { Chart, Interval, Line, Tooltip, Point, Legend, multiLineData, DensityHeatmapChart } from "bizcharts";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

	const data = exerciseM.sessions.map((sesh, idx) => {
		return { session: `${idx + 1}`, totVol: sesh.totalVolume };
	});

	const data2 = exerciseM.sessions.map((sesh, idx) => {
		return { session: `session ${idx + 1}`, totalVolume: sesh.totalVolume };
	});

	console.log(data2);

	console.log(Line);

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
			{exerciseM.sessions.length > 1 && (
				<div className="chart-container">
					<Chart
						scale={{ value: { min: 0 } }}
						padding={[10, 20, 50, 40]}
						autoFit
						height={160}
						data={data2}
					>
						<Line
							shape=""
							position="session*totalVolume"
							color="l (270) 0:rgba(0, 255, 149, 1) .5:rgba(0, 255, 149, 1) 1:rgba(0, 255, 149, 1)"
							style={{
								stroke: "#00ff95",
								shadowColor: "#00ff95",
								shadowBlur: "20",
							}}
						/>
						<Tooltip
							hideMarkers={true}
							follow={false}
							style={{ opacity: 0 }}
						/>
					</Chart>
				</div>
			)}
		</div>
	);
};

export default ExerciseCard;
