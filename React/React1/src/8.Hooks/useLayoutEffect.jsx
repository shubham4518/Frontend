
import React, { useLayoutEffect, useRef, useState } from 'react';

function App() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const boxWidth = boxRef.current.getBoundingClientRect().width;
    setWidth(boxWidth);
  }, []);

  return (
    <div>
      <h1>useLayoutEffect Example</h1>

      <div
        ref={boxRef}
        style={{
          width: '400px',
          height: '100px',
          backgroundColor: 'lightblue',
        }}
      >
        Hello React!
      </div>

      <h2>Box Width:{width}px</h2>
    </div>
  );
}

export default App;
