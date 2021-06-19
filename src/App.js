import Header from "./Components/Header";
import ExerciseCard from "./Components/ExerciseCard";
import Chart from "react-google-charts";
import Button from "./Components/Button";

import { useState, useEffect } from "react";

function App() {
	const newExerciseTemplate = { id: 0, sessions: [{ reps: [0, 0, 0] }], numSets: [0, 0, 0] };
	const [exercises, setExercises] = useState([
		{ id: 0, sessions: [{ reps: [0, 0, 0] }], numSets: [0, 0, 0] },
	]);

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

	// TODO - graph data
	// const [graphVols, setGraphVols] = useState([[], []]);
	// const [graphData, setGraphData] = useState([]);
	// const [updateGraph, setUpdateGraph] = useState(false);

	// useEffect(() => {
	// 	let arr = [[], []];

	// 	const getVolsForMap = () => {
	// 		exercises.forEach((ex, idx) => {
	// 			ex.sessions.forEach((sesh, i) => {
	// 				arr[i].push(sesh.totalVolume);
	// 			});
	// 		});
	// 		setGraphVols(arr);
	// 		console.log(graphVols);

	// 		const dataa = graphVols.map((vols, idx) => {
	// 			return [idx + 1, ...vols];
	// 		});
	// 		setGraphData(dataa);
	// 		console.log(graphData);
	// 	};

	// 	getVolsForMap();
	// }, [updateGraph]);

	// const [showGraph, setShowGraph] = useState(false);

	// const showGraphFn = () => {
	// 	setUpdateGraph(!updateGraph);
	// 	setShowGraph(true);
	// };

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

			{/* {showGraph && ( //TODO
				<div className="chartContainer">
					<Chart
						width={"600px"}
						style={{ backgroundColor: "transparent" }}
						height={"400px"}
						chartType="LineChart"
						loader={<div>Loading Chart</div>}
						data={[
							[
								"x",
								...exercises.map(
									(ex) => ex.name
								),
							],
							[0, 0, 0],
							...graphData,
						]}
						options={{
							hAxis: {
								title: "Volume",
							},
							vAxis: {
								title: "Sessions",
							},
							series: {
								1: { curveType: "function" },
							},
						}}
						rootProps={{ "data-testid": "2" }}
					/>
				</div>
			)}
			<Button text="update" onClick={showGraphFn} /> */}
		</div>
	);
}

export default App;

// ["x", ...exercises.map((ex) => ex.name)],

//  data={[
//   ["x", ...exercises.map((ex) => ex.name)],
//   [0, 0, 0],
//   ...graphData,
// ]}
