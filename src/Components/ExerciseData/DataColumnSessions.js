import Button from "../Button";

const SessionColumn = ({
	setSessionWeight,
	exerciseM,
	idx,
	seshIdx,
	setReps,
	deleteSession,
	newSessionAdded,
}) => {
	return (
		<div className="column">
			<div
				className={
					// if last session & not first session, include delete button
					seshIdx + 1 === exerciseM.sessions.length && seshIdx > 0
						? "col col-r-top col-last-sesh"
						: "col col-r-top"
				}
			>
				<p>{`Session ${seshIdx + 1}`}</p>
				{seshIdx + 1 === exerciseM.sessions.length && seshIdx > 0 && (
					<Button
						text="-"
						className="btn-del-sesh"
						onClick={deleteSession}
					/>
				)}
			</div>
			<input
				className="input"
				type="text"
				placeholder="weight (kg)"
				onChange={(e) => setSessionWeight(e.target.value, seshIdx)}
				value={exerciseM.sessions[seshIdx].weight}
			></input>

			{exerciseM.numSets.map((set, setIdx) => (
				<input
					// if last set in last session, include class that rounds bottom-right corner
					className={
						setIdx + 1 === exerciseM.numSets.length &&
						seshIdx + 1 === exerciseM.sessions.length
							? "input input-r-bottom-right"
							: "input"
					}
					type="text"
					placeholder="reps"
					onChange={(e) => setReps(e.target.value, seshIdx, setIdx)}
					key={setIdx}
					value={exerciseM.sessions[seshIdx].reps[setIdx]}
				></input>
			))}
		</div>
	);
};

export default SessionColumn;

// <input className="input" type="text" placeholder="reps"></input>
