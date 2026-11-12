
import { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const result = useMemo(() => {
    console.log('Calculating...');
    return number * 2;
  }, [number]);

  return (
    <div>
      <h2>useMemo Example</h2>

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <h3>Number: {number}</h3>
      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;
