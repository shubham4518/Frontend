import withCounter from "./withCounter";

const Child = ({ count, handleclick }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleclick}>Add</button>
    </div>
  );
};

export default withCounter(Child);
