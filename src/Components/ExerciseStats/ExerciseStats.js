import ColumnMainStats from "./StatsColumnMain";
import SessionColumnStats from "./StatsColumnSessions";

const ExerciseStats = ({ exercises, exerciseM, idx, setExercises, repChanged }) => {
	return (
		<div className="column-container stats">
			<ColumnMainStats />
			{exerciseM.sessions.map((sesh, seshIdx) => (
				<SessionColumnStats
					exercises={exercises}
					exerciseM={exerciseM}
					idx={idx}
					sesh={sesh}
					seshIdx={seshIdx}
					setExercises={setExercises}
					repChanged={repChanged}
					key={seshIdx}
				/>
			))}
		</div>
	);
};

export default ExerciseStats;
