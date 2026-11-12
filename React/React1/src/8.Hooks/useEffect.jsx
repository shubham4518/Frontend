import React, { useState, useEffect } from "react";

const App = () => {
  const [add, setAdd] = useState(0)
  const [sub, setSub] = useState(5)

  function handleIncrement() {
    setAdd(add + 1);
  }
  function handleDecrement() {
    setSub(sub - 1);
  }

  useEffect(()=>{
    document.title=`${add}`
    console.log('can you see me');
    
  },[add])
  return (
    <div>
      <h1>{add}</h1>
      <h1>{sub}</h1>
      <button onClick={handleIncrement}>Add</button>
      <button onClick={handleDecrement}>Sub</button>
    </div>
  )
}

export default App;
