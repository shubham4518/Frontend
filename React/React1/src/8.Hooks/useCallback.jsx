
import { useState, useCallback } from 'react';

function Child({ handleClick }) {
  console.log('Child rendered');

  return (
    <button onClick={handleClick}>
      Click Child
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleClick = useCallback(() => {
    alert('Button clicked!');
  }, []);

  return (
    <div>
      <h2>useCallback Example</h2>

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br /><br />

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <Child handleClick={handleClick} />
    </div>
  );
}

export default App;
