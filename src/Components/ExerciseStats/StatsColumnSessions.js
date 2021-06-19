import { useEffect } from "react";

const SessionColumnStats = ({ exercises, exerciseM, idx, sesh, seshIdx, setExercises, repChanged }) => {
	const totalReps = exerciseM.sessions[seshIdx].reps.reduce((accu, r) => accu + r);
	const totalVolume = totalReps * exerciseM.sessions[seshIdx].weight;

	// link stats with state whenever reps are modified
	const setTotalReps = () => {
		const copy = exercises.map((ex) => ex);

		// totalReps & TotalVolume
		copy[idx].sessions[seshIdx].totalReps = totalReps;
		copy[idx].sessions[seshIdx].totalVolume = totalVolume;

		// improvement since last session
		if (seshIdx > 0) {
			// absolute
			const change = totalVolume - exerciseM.sessions[seshIdx - 1].totalVolume;
			copy[idx].sessions[seshIdx].change = change;

			// percentage
			const changePercentage =
				exerciseM.sessions[seshIdx].change /
				exerciseM.sessions[seshIdx - 1].totalVolume;
			copy[idx].sessions[seshIdx].changePercentage = changePercentage;
		}

		// total improvement since first session
		if (seshIdx > 1) {
			const changeTotal = totalVolume - exerciseM.sessions[0].totalVolume;
			const totalChangePercentage = changeTotal / exerciseM.sessions[0].totalVolume;
			copy[idx].sessions[seshIdx].totalChangePercentage = totalChangePercentage;
		}

		setExercises(copy);
	};
	useEffect(() => {
		setTotalReps();
	}, [repChanged]);

	return (
		<div className="column-stats">
			<div className="col col-r-top-right col-stats-t-r">{totalReps}</div>
			<div className="col col-stats-t-r">
				{exerciseM.sessions[seshIdx].weight && totalVolume}
			</div>
			<div
				className={
					exerciseM.sessions[seshIdx].change > 0
						? "col col-stats-t-r stats-pos"
						: "col col-stats-t-r stats-neg"
				}
			>
				{exerciseM.sessions[seshIdx].weight &&
					exerciseM.sessions[seshIdx].change}
			</div>
			<div
				className={
					exerciseM.sessions[seshIdx].changePercentage > 0
						? "col col-stats-t-r stats-pos"
						: "col col-stats-t-r stats-neg"
				}
			>
				{seshIdx > 0 &&
					exerciseM.sessions[seshIdx].weight &&
					`${(
						exerciseM.sessions[seshIdx].changePercentage * 100
					).toFixed(1)} %`}
			</div>
			<div
				className={
					exerciseM.sessions[seshIdx].totalChangePercentage > 0
						? "col input-r-bottom-right col-stats-b-r stats-pos"
						: "col input-r-bottom-right col-stats-b-r stats-neg"
				}
			>
				{seshIdx > 1 &&
					exerciseM.sessions[seshIdx].weight &&
					`${(
						exerciseM.sessions[seshIdx]
							.totalChangePercentage * 100
					).toFixed(1)} %`}
			</div>
		</div>
	);
};

export default SessionColumnStats;
