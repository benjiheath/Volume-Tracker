import Button from "./Button";

const Header = ({ addExercise, setShowFirstAdd }) => {
  return (
    <header className="header">
      <h1>Volume Tracker</h1>

      <Button text="Add Exercise" className="btn btn-new-exercise" onClick={addExercise} />
    </header>
  );
};

export default Header;
