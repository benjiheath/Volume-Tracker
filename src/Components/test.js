const exercises = [
	{
		name: "bench",
		id: 0, // USE STATE FOR EXERCISES.LENGTH? THEN ID = ex.length ( +1?)
		sessions: [
			{
				id: 0,
				weight: 10,
				unit: "kg",
				sets: [5, 5, 0, 0], // when user adds set, push 0?}
			},

			{
				id: 1,
				weight: 11,
				unit: "kg",
				sets: [5, 5, 0, 0], // when user adds set, push 0?}
			},

			{
				id: 2,
				weight: 10,
				unit: "kg",
				sets: [10, 5, 0, 0], // when user adds set, push 0?}
			},
		],
	},
]; /* 
 
 
 
 




 
*/
function getSessionStats(exercise) {
	const sessionStats = exercise.sessions.map((session, idx) => {
		if (session.id === 0) {
			const id = session.id;
			const totalReps = session.sets.reduce((s, accu) => s + accu);
			const totalVolume = totalReps * session.weight;

			return {
				id,
				totalReps,
				totalVolume,
			};
		}

		if (session.id === 1) {
			const id = session.id;
			const totalReps = session.sets.reduce((s, accu) => s + accu);
			const totalVolume = totalReps * session.weight;
			const changeSinceLast =
				totalVolume -
				exercise.sessions[id - 1].sets.reduce((s, accu) => s + accu) *
					exercise.sessions[id - 1].weight;
			const changeSinceLastPercentage = (
				totalVolume /
					(exercise.sessions[id - 1].sets.reduce(
						(s, accu) => s + accu
					) *
						exercise.sessions[id - 1].weight) -
				1
			).toFixed(2);

			return {
				id,
				totalReps,
				totalVolume,
				changeSinceLast,
				changeSinceLastPercentage,
			};
		}

		if (session.id >= 2) {
			const id = session.id;
			const totalReps = session.sets.reduce((s, accu) => s + accu);
			const totalVolume = totalReps * session.weight;
			const changeSinceLast =
				totalVolume -
				exercise.sessions[id - 1].sets.reduce((s, accu) => s + accu) *
					exercise.sessions[id - 1].weight;
			const changeSinceLastPercentage = (
				totalVolume /
					(exercise.sessions[id - 1].sets.reduce(
						(s, accu) => s + accu
					) *
						exercise.sessions[id - 1].weight) -
				1
			).toFixed(2);
			const changeSinceStart = (
				totalVolume /
					(exercise.sessions[0].sets.reduce((s, accu) => s + accu) *
						exercise.sessions[0].weight) -
				1
			).toFixed(2);

			return {
				id,
				totalReps,
				totalVolume,
				changeSinceLast,
				changeSinceLastPercentage,
				changeSinceStart,
			};
		}
	});
	console.log(sessionStats);
}

getSessionStats(exercises[0]);
