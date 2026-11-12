
import React, { useState } from 'react';

const Function = () => {
  const [name, setName] = useState('Shubham');
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to React!</h1>

      <h2>Student Name: {name}</h2>

      <p>Button clicked: {count} times</p>

      <button onClick={() => setName('Rahul')}>
        Change Name
      </button>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default Function;
