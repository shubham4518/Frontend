
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert("Your name is: " + name);
  }

  return (
    <div>
      <h2>Controlled Component</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <h3>Your Name: {name}</h3>
    </div>
  );
}

export default App;
