const ColumnMainStats = () => {
	return (
		<div className="column-stats">
			<div className="col col-r-top-left">Total Reps</div>
			<div className="col col-main">Total Volume</div>
			<div className="col col-main">Improvement</div>
			<div className="col col-main">Improvement %</div>
			<div className="col col-r-bottom-left">Since session 1</div>
		</div>
	);
};

export default ColumnMainStats;

/* totalreps
totVol
changesincelast
%change
totChange%

*/
